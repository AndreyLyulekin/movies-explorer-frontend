export default function About() {
  return (
    <section
      className='universal__section'
      id={'about'}>
      <h2 className='universal__section_header'>О проекте</h2>
      <hr className='universal__header_line' />
      <div className='about__container'>
        <article className='about__article'>
          <h3 className='about__article_title'>Дипломный проект включал 5 этапов</h3>
          <span className='about__article_description'>
            Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
          </span>
        </article>
        <article className='about__article'>
          <h3 className='about__article_title'>На выполнение диплома ушло 5 недель</h3>
          <span className='about__article_description'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься
          </span>
        </article>
      </div>
      <aside className='about__aside'>
        <figure className='about__figure'>
          <span className='about__figure-span about__figure-span_green'>1 неделя</span>
          <figcaption className='about__figure__figcaption'>Back-end</figcaption>
        </figure>
        <figure className='about__figure'>
          <span className='about__figure-span about__figure-span_grey'>4 недели</span>
          <figcaption className='about__figure__figcaption'>Front-end</figcaption>
        </figure>
      </aside>
    </section>
  );
}
