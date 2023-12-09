import { SearchBtn, FilterCheckbox } from '../index';

export default function SearchForm({ setFormData }) {
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
  };
  return (
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
        <FilterCheckbox
          handleInputChange={handleInputChange}
          name={'isShort'}
        />
        Короткометражки
      </span>
      <hr className='universal__line_light' />
    </section>
  );
}
