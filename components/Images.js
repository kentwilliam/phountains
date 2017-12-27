// @format

const layout = require("../styles/layout.css.js")

const Images = ({ images, imageSize }) => {
  if (!images) {
    return "Loading ..."
  }

  imageSize = distributeImageSize(imageSize)
  const imageMargin = imageSize / 20

  return (
    <ol>
      {images.map(image => (
        <li key={image.uri}>
          <img src={image.uri} />
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
        }

        img {
          max-height: ${imageSize}px;
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
