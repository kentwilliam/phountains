// @format

const colorScheme = require("../styles/colorScheme.css.js")
const layout = require("../styles/layout.css.js")

const Images = ({ 
  imageMargin, 
  imageSize,
  images, 
  isGridLockEnabled,
}) => {
  if (!images) {
    return "Loading ..."
  }

  imageSize = distributeImageSize(imageSize)
  imageMargin = Math.max(imageSize / 20, imageMargin)
  console.log('rendering', isGridLockEnabled)

  return (
    <ol>
      {images.map(image => (
        <li key={image.uri}>
          <img src={image.uri} />
          <figcaption>{JSON.stringify(image, null, 2)}</figcaption>
        </li>
      ))}
      <style jsx>{`
        ol {
          display: flex;
          padding: 0;
          margin: ${layout.defaultPadding};
          flex-wrap: wrap;
        }

        li {
          margin: 0 ${imageMargin}px ${imageMargin}px 0;
          line-height: 0;
          position: relative;
          ${isGridLockEnabled ? 'width: ' + imageSize + 'px;' : ''}
          ${isGridLockEnabled ? 'justify-content: center;' : ''}
          ${isGridLockEnabled ? 'align-items: center;' : ''}
          display: flex;
          background: ${colorScheme.background.light};
        }

        img, 
        li {
          ${isGridLockEnabled ? 'max-width: ' + imageSize + 'px;' : ''}
          max-height: ${imageSize}px;
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

        li:not(:hover) figcaption {
          display: none;
        }
      `}</style>
    </ol>
  )
}

const distributeImageSize = imageSize => {
  // Add one so that even if the control's imageSize is 0, the images are
  // still visible
  imageSize = (imageSize + 1) / 101

  // Based on unit circle: Small values of image size will get boosted,
  // large values will get reduced compared to a linear sizing
  return 200 * Math.sqrt(1 - Math.pow(imageSize - 1, 2))
}

module.exports = Images
