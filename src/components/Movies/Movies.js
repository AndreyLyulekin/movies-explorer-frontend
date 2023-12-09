import { useState } from 'react';

import { SearchBtn, IosCheckBox } from '../index';

export default function Movies() {
  const [formData, setFormData] = useState({
    query: '',
    isShort: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: updatedValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className='universal__section search'>
        <form
          onSubmit={handleSubmit}
          className='searchForm'>
          <input
            className='search__input'
            type='search'
            id='searchInput'
            placeholder='Фильм'
            name='query'
            onChange={handleInputChange}
          />
          <button
            className='search__submit'
            type='submit'>
            <img
              src={SearchBtn}
              alt='search'
            />
          </button>
        </form>
        <span className='search__label_description'>
          <IosCheckBox
            handleInputChange={handleInputChange}
            name={'isShort'}
          />
          Короткометражки
        </span>
        <hr className='universal__header_line' />
      </section>
      <section>Movies</section>
    </>
  );
}
