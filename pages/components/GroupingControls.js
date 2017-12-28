// @format

const Actions = require("../actions/Actions.js")
const interestingImageProperties = require("../../shared/interestingImageProperties")

const GroupingControls = () =>
  interestingImageProperties.map(property => (
    <button onClick={() => Actions.setFilter(property)}>{property}</button>
  ))

module.exports = GroupingControls
