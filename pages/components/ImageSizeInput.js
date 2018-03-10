// @format

const ImageSizeInput = ({ imageSize, onChange }) => (
  <div>
    <input
      max={100}
      min={0}
      name="imageSize"
      type="range"
      value={imageSize}
      onChange={event =>
        onChange(Math.max(0, Math.min(100, Number(event.target.value))))
      }
    />
    <label htmlFor="imageSize">{imageSize}</label>
  </div>
)

module.exports = ImageSizeInput
