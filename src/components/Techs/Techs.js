import { technologies } from '../index.js';

export default function Techs() {
  return (
    <section
      className='tech'
      id={'tech'}>
      <div className='tech__container'>
        <h2 className='tech__header'>Технологии</h2>
        <hr className='tech__line' />
        <article className='tech__article'>
          <h3 className='tech__article_title'>7 технологий</h3>
          <span className='tech__article_description'>
            На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
          </span>
        </article>
        <ul className='tech__lists'>
          {technologies.map((i, index) => {
            return (
              <li
                className='tech__list'
                key={index}>
                {i}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
