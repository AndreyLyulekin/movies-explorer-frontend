import { Link } from 'react-router-dom';

import { logo, HeaderLoggedOut, HeaderLoggedIn } from '../index.js';

export default function Header({ isLoggedIn, setIsContextMenuOpened }) {
  return (
    <header className='header'>
      <Link
        to='/'
        className='util__link'>
        <img
          src={logo}
          alt='Logo'
        />
      </Link>
      {isLoggedIn ? <HeaderLoggedIn setIsContextMenuOpened={setIsContextMenuOpened} /> : <HeaderLoggedOut />}
    </header>
  );
}
