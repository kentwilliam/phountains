// @format

const statusBarCSS = require("../styles/statusBar.css.js")

const StatusBar = ({ children }) => (
  <React.Fragment>
    <div>
      <style jsx>{`
        div {
          height: 60px;
        }
      `}</style>
    </div>
    <footer>
      {children}
      {statusBarCSS}
    </footer>
  </React.Fragment>
)

module.exports = StatusBar
