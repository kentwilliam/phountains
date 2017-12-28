// @format

const errorHandler = (error, request, response, next) =>
  response.status(500).send(JSON.stringify(error))

module.exports = errorHandler
