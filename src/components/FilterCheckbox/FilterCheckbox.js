export default function IosCheckBox({ handleInputChange, checked }) {
  return (
    <label
      className={`switch ${checked ? 'on' : 'off'}`}
      htmlFor='toggle'>
      <input
        type='checkbox'
        id='toggle'
        checked={checked}
        onChange={(e) => handleInputChange(e)}
        name='isShort'
      />
      <span className='slider' />
    </label>
  );
}
