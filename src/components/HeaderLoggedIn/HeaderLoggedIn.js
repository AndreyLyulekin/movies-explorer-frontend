import { Link } from 'react-router-dom';

export default function HeaderLoggedIn() {
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
    </>
  );
}
