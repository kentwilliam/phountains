// @format

const colorScheme = require("../styles/colorScheme.css.js")
const layout = require("../styles/layout.css.js")

const Images = ({ imageMargin, imageSize, images, isGridLockEnabled }) => {
  if (!images) {
    return "Loading ..."
  }

  imageMargin = Math.max(imageSize / 20, imageMargin)

  return (
    <section>
      {Object.entries(images).map(([group, images]) => (
        <dl>
          <dt>{group}</dt>
          {images.map(image => (
            <dd key={image.uri}>
              <img src={image.uri} />
              <figcaption>{JSON.stringify(image, null, 2)}</figcaption>
            </dd>
          ))}
        </dl>
      ))}
      <style jsx>{`
        section {
          padding: 0;
          margin: ${layout.defaultPadding};
        }

        dl {
          display: flex;
          flex-wrap: wrap;
        }

        dt {
          flex: 1 0 100%;
          padding: 10px;
          margin-bottom: 10px;
          font-size: 1.2em;
          border-bottom: 1px solid ${colorScheme.text.medium};
        }

        dd {
          margin: 0 ${imageMargin}px ${imageMargin}px 0;
          line-height: 0;
          position: relative;
          ${isGridLockEnabled
            ? "width: " + imageSize + "px;"
            : ""} ${isGridLockEnabled
              ? "justify-content: center;"
              : ""} ${isGridLockEnabled
              ? "align-items: center;"
              : ""} display: flex;
        }

        img,
        dd {
          ${isGridLockEnabled
            ? "max-width: " + imageSize + "px;"
            : ""} max-height: ${imageSize}px;
        }

        img {
          box-shadow: 0 1px 3px ${colorScheme.background.dark};
        }

        figcaption {
          white-space: pre;
          line-height: 1.5em;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          font-size: 8pt;
          overflow: auto;
          background: ${colorScheme.background.light};
        }

        dd:not(:hover) figcaption {
          display: none;
        }
      `}</style>
    </section>
  )
}

module.exports = Images
