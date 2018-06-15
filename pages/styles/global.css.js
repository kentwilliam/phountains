// @format

const colorScheme = require("./colorScheme.css.js")

const globalCSS = (
  <style jsx global>{`
    body {
      background: ${colorScheme.background.medium};
    }

    #app {
      opacity: 0;
      transition: 0.6s;
    }

    #app.mounted {
      opacity: 1;
    }

    * {
      margin: 0;
      font-size: 16px;
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    }

    input {
      border-radius: 4px;
      font-size: 16px;
      font-family: sans-serif;
      color: #222;
      border: 1px solid silver;
    }

    ol,
    ul {
      list-style-type: none;
    }
  `}</style>
)

module.exports = globalCSS
