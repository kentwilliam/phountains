// @format

const ImageMarginInput = ({ imageMargin, onChange }) => (
  <div>
    <label htmlFor="imageMargin">Spacing: </label>
    <input
      max={100}
      min={3}
      name="imageMargin"
      type="range"
      value={imageMargin}
      onChange={event => onChange(event.target.value)}
    />
  </div>
)

module.exports = ImageMarginInput
