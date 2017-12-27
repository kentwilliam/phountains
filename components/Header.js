// @format

const colorScheme = require("../styles/colorScheme.css.js")
const layout = require("../styles/layout.css.js")

const Header = () => (
  <header>
    <h1>Phountains</h1>
    <h2>tool to organize mountains of photos</h2>

    <style jsx>{`
      header {
        background: ${colorScheme.background.dark};
        padding: ${layout.defaultPadding};
        display: flex;
        justify-content: space-between;
      }

      h1,
      h2 {
        font-weight: 200;
      }

      h1 {
        color: ${colorScheme.text.light};
        text-transform: uppercase;
      }

      h2 {
        color: ${colorScheme.text.medium};
      }
    `}</style>
  </header>
)

module.exports = Header
