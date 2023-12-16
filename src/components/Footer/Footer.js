export default function Footer() {
  return (
    <footer className='universal__section footer'>
      <span className='footer__description'>Учебный проект Яндекс.Практикум х BeatFilm.</span>
      <hr className='universal__line_light footer__line' />
      <div className='footer__underline-container'>
        <span className='footer__year'>©2020</span>
        <nav className='footer__container-links'>
          <a
            className='footer__link'
            href='https://practicum.yandex.ru'>
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            href='https://github.com/AndreyLyulekin'>
            Github
          </a>
        </nav>
      </div>
    </footer>
  );
}
