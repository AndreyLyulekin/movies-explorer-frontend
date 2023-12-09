import { Link } from 'react-router-dom';
import { memo } from 'react';

import { Logo, HeaderLoggedOut, HeaderLoggedIn } from '../index.js';

const Header = ({ isLoggedIn }) => {
  return (
    <header className='header'>
      <Link to='/'>
        <Logo />
      </Link>
      {isLoggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
    </header>
  );
};

export default memo(Header);
