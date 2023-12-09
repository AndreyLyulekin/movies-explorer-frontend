import { Logo, HeaderLoggedOut, HeaderLoggedIn } from '../index.js';

export default function Header({ isLoggedIn }) {
  return (
    <header className='header'>
      <Logo />
      {isLoggedIn ? <HeaderLoggedIn /> : <HeaderLoggedOut />}
    </header>
  );
}
