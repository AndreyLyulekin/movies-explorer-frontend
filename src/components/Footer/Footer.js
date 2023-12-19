export default function Footer() {
  return (
    <footer className='footer'>
      <span className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
      <hr className='footer__line' />
      <div className='footer__underline-container'>
        <span className='footer__year'>© 2020</span>
        <nav className='footer__container-links'>
          <a
            className='footer__link util__link'
            href='https://practicum.yandex.ru'>
            Яндекс.Практикум
          </a>
          <a
            className='footer__link util__link'
            href='https://github.com/AndreyLyulekin'>
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}
