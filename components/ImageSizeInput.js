// @format

const ImageSizeInput = ({ imageSize, onChange }) => (
  <div>
    <input
      type="number"
      value={imageSize}
      onChange={event =>
        onChange(Math.max(0, Math.min(100, Number(event.target.value))))
      }
    />
  </div>
)

module.exports = ImageSizeInput
