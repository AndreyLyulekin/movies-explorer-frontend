import { technologies } from './index.js';

export default function Techs() {
  return (
    <section
      className='universal__section tech'
      id={'tech'}>
      <h2 className='universal__section_header'>Технологии</h2>
      <hr className='universal__header_line' />
      <article className='tech__article'>
        <h3 className='tech__article_title'>7 технологий</h3>
        <span className='tech__article_description'>
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </span>
      </article>
      <ul className='tech__lists'>
        {technologies.map((i) => {
          return <li className='tech__list'>{i}</li>;
        })}
      </ul>
    </section>
  );
}
