import { useState } from 'react';

export default function IosCheckBox({ handleInputChange, name }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setIsChecked(!isChecked);
    handleInputChange(e);
  };

  return (
    <label
      className={`switch ${isChecked ? 'on' : 'off'}`}
      htmlFor='toggle'>
      <input
        type='checkbox'
        id='toggle'
        checked={isChecked}
        onChange={handleChange}
        name={name}
      />
      <span className='slider' />
    </label>
  );
}
