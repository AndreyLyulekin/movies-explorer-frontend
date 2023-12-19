import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { close } from '../index';

export default function ContextMenu({ isContextMenuOpened, setIsContextMenuOpened }) {
  const location = useLocation();

  const handleOverlayClick = (e) => {
    if (e.target?.className?.includes('contextMenu__overlay')) {
      handleCloseButtonClick();
    }
  };

  const handleCloseButtonClick = () => {
    setIsContextMenuOpened((prev) => !prev);
  };

  return (
    <div
      className={`contextMenu__overlay ${isContextMenuOpened ? 'contextMenuOpened' : 'contextMenuClosed'}`}
      onClick={(e) => handleOverlayClick(e)}>
      <menu className={`contextMenu ${isContextMenuOpened ? 'contextMenuOpened' : 'contextMenuClosed'}`}>
        <nav className='contextMenu__nav'>
          <Link
            onClick={handleCloseButtonClick}
            className={`contextMenu__link util__link ${location.pathname === '/' ? 'contextMenu__current' : ''}`}
            to='/'>
            Главная
          </Link>
          <Link
            onClick={handleCloseButtonClick}
            className={`contextMenu__link util__link ${location.pathname === '/movies' ? 'contextMenu__current' : ''}`}
            to='/movies'>
            Фильмы
          </Link>
          <Link
            onClick={handleCloseButtonClick}
            className={`contextMenu__link util__link ${
              location.pathname === '/saved-movies' ? 'contextMenu__current' : ''
            }`}
            to='/saved-movies'>
            Сохранённые фильмы
          </Link>
        </nav>
        <Link
          to='/profile'
          onClick={handleCloseButtonClick}>
          <button className='contextMenu__profile util__link'>Аккаунт</button>
        </Link>
        <button
          className='contextMenu__close util__button'
          onClick={handleCloseButtonClick}>
          <img
            src={close}
            alt='Logo'
          />
        </button>
      </menu>
    </div>
  );
}
