// Basic express app to mount local-API routes
//
// @format

const express = require("express")

const createImageDetailsRoute = require("./createImageDetailsRoute.js")
const errorHandler = require("./errorHandler")
const { PORT, PATH } = require("./configuration.js")

const application = express()
application.use(express.static("public"))
application.use(errorHandler)

application.get("/", createImageDetailsRoute(PATH))

application.listen(PORT, () =>
  console.log(`Image details service running on port ${PORT}`)
)
