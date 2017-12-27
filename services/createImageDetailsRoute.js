// Generates list of image data, one item for each file
//
// @format

const jetpack = require("fs-jetpack")
const { ExifImage } = require("exif")
const { BASE_URI } = require("./configuration.js")

const createImageDetailsRoute = path => async (request, response, next) => {
  try {
    const fileNames = await jetpack.listAsync(path)

    const EXIFPromises = fileNames
      .filter(hasImageExtension)
      .map(fileName => createEXIFPromise(fileName, path))

    Promise.all(EXIFPromises)
      .then(resultItems => response.json({ images: resultItems }))
      .catch(next)
  } catch (error) {
    next(error)
  }
}

// Create a promise that either resolves with EXIF details added (once parsed),
// or with EXIF-parsing error details added
function createEXIFPromise(fileName, path) {
  const FILE_NAME = path + "/" + fileName
  const FILE = { fileName, uri: BASE_URI + "/" + fileName }

  return new Promise((resolve, reject) => {
    try {
      new ExifImage(
        { image: FILE_NAME },
        (error, EXIFData) =>
          error
            ? resolve({ ...FILE, EXIFData: { type: EXIF_PARSE_ERROR, error } })
            : resolve({ ...FILE, EXIFData })
      )
    } catch (error) {
      resolve({ ...FILE, EXIFData: { type: EXIF_PARSE_ERROR, error } })
    }
  })
}

const hasImageExtension = fileName => /\.(jpg|jpeg|gif|png)$/.test(fileName)

const EXIF_PARSE_ERROR = "EXIF_PARSE_ERROR"

module.exports = createImageDetailsRoute
