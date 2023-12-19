import React, { Fragment } from 'react';
import { mePhoto, sitesPortfolio } from '../index';

export default function AboutMe() {
  return (
    <section
      className='aboutMe'
      id={'student'}>
      <h2 className='aboutMe__header'>Студент</h2>
      <hr className='aboutMe__header-line' />
      <article className='aboutMe__container'>
        <div>
          <h3 className='aboutMe__title'>Андрей</h3>
          <h4 className='aboutMe__subtitle'>Фронтенд-разработчик, 30 лет</h4>
          <p className='aboutMe__paragraph'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать
            музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После
            того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <a
            href='https://github.com/AndreyLyulekin'
            className='aboutMe__link_github util__link'>
            Github
          </a>
        </div>
        <img
          className='aboutMe__photo'
          src={mePhoto}
          alt='mePhoto'
        />
      </article>
      <div className='aboutMe__portfolio'>
        <h4 className='aboutMe__portfolio_title'>Портфолио</h4>
        <nav className='aboutMe__portfolio_nav'>
          {sitesPortfolio.map((item, index) => {
            return (
              <React.Fragment key={index}>
                <a
                  target='_blank'
                  className='aboutMe__portfolio_link util__link'
                  href={item.link}
                  rel='noreferrer'>
                  <span className='aboutMe__portfolio_text'>{item.text}</span>
                  <span className='aboutMe__portfolio_arrow'>↗</span>
                </a>
                {index < sitesPortfolio.length - 1 ? <hr className='aboutMe__line' /> : ''}
              </React.Fragment>
            );
          })}
        </nav>
      </div>
    </section>
  );
}
