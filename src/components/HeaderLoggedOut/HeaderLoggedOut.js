import { Link } from 'react-router-dom';

export default function HeaderLoggedOut() {
  return (
    <nav className='header__nav'>
      <Link
        className='header__link_registration'
        to='/sign-up'>
        Регистрация
      </Link>
      <Link
        className='header__link_login'
        to='/sign-in'>
        Войти
      </Link>
    </nav>
  );
}
