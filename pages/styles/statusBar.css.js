// @format

const colorScheme = require("./colorScheme.css.js")

const globalCSS = (
  <style jsx global>{`
    footer {
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${colorScheme.background.light};
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      border-top: 1px solid ${colorScheme.background.medium}
    }

    footer label {
      font-size: 12px;
      color: ${colorScheme.text.dark};
      margin-right: .6em;
    }

    footer > div {
      margin: 0 8px;
      padding: 6px 8px;
      display: flex;
      justify-content: center;
    }

    input[type="range"] {
      line-height: 0;
      vertical-align-bottom;
    }
  `}</style>
)

module.exports = globalCSS
