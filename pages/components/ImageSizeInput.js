// @format

const ImageSizeInput = ({ imageSize, onChange }) => (
  <div>
    <label htmlFor="imageSize">Photo Size: </label>
    <input
      max={500}
      min={20}
      name="imageSize"
      type="range"
      value={imageSize}
      onChange={event => onChange(event.target.value)}
    />
  </div>
)

module.exports = ImageSizeInput
