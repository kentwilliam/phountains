// @format

const ImageGridLockCheckbox = ({ isGridLockEnabled, onChange }) => (
  <div>
    <label htmlFor="isGridLockEnabled">Lock to grid: </label>
    <input
      checked={isGridLockEnabled}
      name="isGridLockEnabled"
      type="checkbox"
      onChange={onChange}
    />
  </div>
)

module.exports = ImageGridLockCheckbox
