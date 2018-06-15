// @format

const colorScheme = require("../styles/colorScheme.css.js")
const layout = require("../styles/layout.css.js")

const Header = ({ children }) => (
  <React.Fragment>
    <header>
      <div id="logo">
        <h1>Phountains</h1>
        <h2>photo organizer</h2>
      </div>
      {children}
      <style jsx global>{`
        header {
          background: ${colorScheme.background.dark};
          padding: ${layout.defaultPadding};
          justify-content: space-between;
          display: flex;
          align-items: center;
          position: fixed;
          z-index: 1;
          top: 0;
          left: 0;
          right: 0;
          height: 38px;
        }

        header > * {
          flex: 3 1 0;
        }

        header > #logo {
          flex: 0 0 120px;
          padding-right: 50px;
        }

        h1 {
          font-size: 15px;
          color: ${colorScheme.text.light};
          font-weight: 200;
          text-transform: uppercase;
        }

        h2 {
          font-size: 12px;
          color: ${colorScheme.text.medium};
          font-weight: 200;
        }
      `}</style>
    </header>
    <div style={{ height: "56px" }} />
  </React.Fragment>
)

module.exports = Header
