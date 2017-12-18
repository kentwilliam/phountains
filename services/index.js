const jetpack = require('fs-jetpack')
const express = require('express')
const {ExifImage} = require('exif')



// Application configuration

const PORT = 3001
const PATH = '/Users/kentwilliam/example-photos'

const application = express()

application.use(handleError)

application.get('/', root)

application.listen(
  PORT,
  () => console.log(`photo-data service running on port ${PORT}`)
)



// Main route

async function root(req, res, next) {
  try {
    const fileNames = await jetpack.listAsync(PATH)

    const EXIFPromises = fileNames.map(createEXIFPromise)

    Promise.all(EXIFPromises)
      .then(result => {
        console.log({result})

        res.send('done ' + result)
      })
      .catch(next)

  } catch (e) {
    next(e)
  }
}



// --

function createEXIFPromise(fileName) {
  return new Promise(
    (resolve, reject) => {
      try {
        new ExifImage({image: PATH + '/' + fileName}, (error, EXIFData) =>
          error
            ? reject(error)
            : resolve(EXIFData)
        )
      } catch (error) {
        reject(error)
      }
    }
  )
}

function handleError (error, request, response, next) {
  console.error(error.stack)
  response.status(500).send('Something broke!')
}
