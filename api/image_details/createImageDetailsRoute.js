// Generates list of image data, one item for each file
//
// @format

const { ExifImage } = require("exif")
const jetpack = require("fs-jetpack")
const _ = require("lodash")

const interestingImageProperties = require("../../shared/interestingImageProperties.js")
const { BASE_URI } = require("../configuration.js")

const createImageDetailsRoute = path => async (request, response, next) => {
  try {
    const fileNames = await jetpack.listAsync(path)

    const EXIFPromises = fileNames
      .filter(hasImageExtension)
      .map(fileName => imageDetails(fileName, path))

    Promise.all(EXIFPromises)
      .then(resultItems => response.json({ images: resultItems }))
      .catch(next)
  } catch (error) {
    next(error)
  }
}

const imageDetails = (fileName, path) =>
  new Promise(async (resolve, reject) => {
    const filePath = path + "/" + fileName

    // Basic info
    const fileBase = {
      fileName,
      uri: BASE_URI + "/" + fileName,
      details: await jetpack.inspectAsync(filePath, { times: true })
    }

    // EXIF info
    try {
      new ExifImage({ image: filePath }, (error, EXIFData) => {
        const file = {
          ...fileBase,
          EXIFData: error ? { type: EXIF_PARSE_ERROR, error } : EXIFData
        }
        resolve(pick(file, [...interestingImageProperties, "uri"]))
      })
    } catch (error) {
      const file = {
        ...fileBase,
        EXIFData: error ? { type: EXIF_PARSE_ERROR, error } : EXIFData
      }
      resolve(pick(file, [...interestingImageProperties, "uri"]))
    }
  })

const hasImageExtension = fileName => /\.(jpg|jpeg|gif|png)$/.test(fileName)

const EXIF_PARSE_ERROR = "EXIF_PARSE_ERROR"

const pick = (file, properties) =>
  properties.reduce((result, property) => {
    const value = _.get(file, property)

    return value != null ? _.set(result, property, value) : result
  }, {})

module.exports = createImageDetailsRoute
