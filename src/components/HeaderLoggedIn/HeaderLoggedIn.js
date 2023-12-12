import { Link } from 'react-router-dom';

import { burger } from '../index.js';

export default function HeaderLoggedIn({ setIsContextMenuOpened }) {
  const burgerClick = () => {
    setIsContextMenuOpened((prev) => !prev);
  };

  return (
    <>
      <nav className='header__nav'>
        <Link
          className='header__link_loggedIn'
          to='/movies'>
          Фильмы
        </Link>
        <Link
          className='header__link_loggedIn'
          to='/saved-movies'>
          Сохранённые фильмы
        </Link>
      </nav>
      <Link to='/profile'>
        <button className='header__profile'>Аккаунт</button>
      </Link>
      <button
        className='header__burger'
        onClick={burgerClick}>
        <img
          src={burger}
          alt='Logo'
        />
      </button>
    </>
  );
}
