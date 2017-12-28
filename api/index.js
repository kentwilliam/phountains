// Basic express app to mount local-API routes
//
// @format

const express = require("express")
const pretty = require("express-prettify")

const createImageDetailsRoute = require("./image_details/createImageDetailsRoute.js")
const errorHandler = require("./errorHandler")
const { PORT, PATH } = require("./configuration.js")

const application = express()
application.use(express.static("public"))
application.use(errorHandler)
application.use(pretty({ query: "pretty" }))

application.get("/", createImageDetailsRoute(PATH))

application.listen(PORT, () => console.log(`API running on port ${PORT}`))
