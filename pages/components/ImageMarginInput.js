// @format

const ImageMarginInput = ({ imageMargin, onChange }) => (
  <div>
    <input
      max={100}
      min={0}
      name="imageMargin"
      type="range"
      value={imageMargin}
      onChange={event =>
        onChange(Math.max(0, Math.min(100, Number(event.target.value))))
      }
    />
    <label htmlFor="imageMargin">{imageMargin}</label>
  </div>
)

module.exports = ImageMarginInput
