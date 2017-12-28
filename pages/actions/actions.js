// @format

const pubsub = require("pubsub-js")

export const setFilter = path => pubsub.publish("SET_FILTER", path)
setFilter.key = "SET_FILTER"
