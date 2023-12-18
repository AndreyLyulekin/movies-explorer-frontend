export default function Promo() {
  return (
    <section className='promo'>
      <h1 className='promo__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <nav className='promo__nav-bar'>
        <a
          href='#about'
          className='promo__nav util__button'>
          О проекте
        </a>
        <a
          href='#tech'
          className='promo__nav util__button'>
          Технологии
        </a>
        <a
          href='#student'
          className='promo__nav util__button'>
          Студент
        </a>
      </nav>
    </section>
  );
}
