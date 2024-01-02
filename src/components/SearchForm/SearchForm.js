import { useState } from 'react';
import { SearchBtn, FilterCheckbox } from '../index';

export default function SearchForm({ setFormData }) {
  const [searchValue, setSearchValue] = useState('');
  const [isShort, setIsShort] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const updatedValue = type === 'checkbox' ? checked : value;

    if (name === 'query') {
      setSearchValue(updatedValue);
    } else if (name === 'isShort') {
      setIsShort(updatedValue);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ query: searchValue, isShort });
  };

  return (
    <section className='search'>
      <form
        onSubmit={handleSubmit}
        className='searchForm'>
        <input
          className='search__input'
          type='search'
          id='searchInput'
          placeholder='Фильм'
          name='query'
          value={searchValue}
          onChange={handleInputChange}
        />
        <button
          className='search__submit util__button'
          type='submit'>
          <img
            src={SearchBtn}
            alt='search'
          />
        </button>
      </form>
      <span className='search__label_description'>
        <FilterCheckbox
          handleInputChange={handleInputChange}
          name='isShort'
          checked={isShort}
        />
        Короткометражки
      </span>
      <hr className='search__line' />
    </section>
  );
}
