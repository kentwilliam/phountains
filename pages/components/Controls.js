// @format

const layout = require("../styles/layout.css.js")

const Controls = ({ children }) => (
  <React.Fragment>
    <nav>{children}</nav>
    <style jsx>{`
      nav {
        margin: ${layout.defaultPadding};
      }
    `}</style>
  </React.Fragment>
)

module.exports = Controls
