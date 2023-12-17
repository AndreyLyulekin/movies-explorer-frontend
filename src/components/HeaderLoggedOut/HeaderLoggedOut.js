import { Link } from 'react-router-dom';

export default function HeaderLoggedOut() {
  return (
    <nav className='header__nav_loggedOut'>
      <Link
        className='header__link_registration util__link'
        to='/sign-up'>
        Регистрация
      </Link>
      <Link
        className='header__link_login util__link'
        to='/sign-in'>
        Войти
      </Link>
    </nav>
  );
}
