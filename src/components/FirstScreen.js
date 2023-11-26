export default function FirstScreen() {
  return (
    <section className='first'>
      <h1 className='first__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <nav className='first__nav-bar'>
        <a
          href='#about'
          className='first__nav'>
          О проекте
        </a>
        <a
          href='#tech'
          className='first__nav'>
          Технологии
        </a>
        <a
          href='#student'
          className='first__nav'>
          Студент
        </a>
      </nav>
    </section>
  );
}
