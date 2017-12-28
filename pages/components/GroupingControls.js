// @format

const interestingImageProperties = require("../../shared/interestingImageProperties")

const GroupingControls = () =>
  interestingImageProperties.map(property => (
    <button onClick={() => console.log("click")}>{property}</button>
  ))

module.exports = GroupingControls
