// @format

const Actions = require("../actions/Actions.js")
const interestingImageProperties = require("../../shared/interestingImageProperties")

const GroupingControls = () => (
  <React.Fragment>
    <div>
      {interestingImageProperties.map(property => (
        <button key={property} onClick={() => Actions.setFilter(property)}>
          {property}
        </button>
      ))}
    </div>
    <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
      }
      button {
        flex: 1 0 0;
        background: gray;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 12px;
        margin: 0 5px 5px 0;
      }
    `}</style>
  </React.Fragment>
)

module.exports = GroupingControls
