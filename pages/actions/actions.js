// @format

const pubsub = require("pubsub-js")

module.exports = {
  setFilter: path => pubsub.publish("SET_FILTER", path)
}
