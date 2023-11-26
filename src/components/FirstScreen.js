import { Link } from 'react-router-dom';

export default function FirstScreen() {
  return (
    <section className='first'>
      <h1 className='first__header'>Учебный проект студента факультета Веб-разработки.</h1>
      <nav className='first__nav-bar'>
        <Link className='first__nav'>О проекте</Link>
        <Link className='first__nav'>Технологии</Link>
        <Link className='first__nav'>Студент</Link>
      </nav>
    </section>
  );
}
