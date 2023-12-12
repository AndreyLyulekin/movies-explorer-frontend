import React, { Fragment } from 'react';
import { mePhoto } from '../index';

export default function AboutMe() {
  const sitesPortfolio = [
    {
      link: '#',
      text: 'Статичный сайт',
    },
    {
      link: '#',
      text: 'Адаптивный сайт',
    },
    {
      link: '#',
      text: 'Одностраничное приложение',
    },
  ];
  return (
    <section
      className='universal__section aboutMe'
      id={'student'}>
      <h2 className='universal__section_header'>Студент</h2>
      <hr className='universal__header_line' />
      <div className='aboutMe__container'>
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
            className='aboutMe__link_github'>
            Github
          </a>
        </div>
        <img
          className='aboutMe__photo'
          src={mePhoto}
          alt='mePhoto'
        />
      </div>
      <div className='aboutMe__portfolio'>
        <h4 className='aboutMe__portfolio_title'>Портфолио</h4>
        {sitesPortfolio.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <a
                className='aboutMe__portfolio_link'
                href={item.link}>
                <span className='aboutMe__portfolio_text'>{item.text}</span>
                <span className='aboutMe__portfolio_arrow'>↗</span>
              </a>
              {index < sitesPortfolio.length - 1 ? <hr className='universal__line_light' /> : ''}
            </React.Fragment>
          );
        })}
      </div>
    </section>
  );
}
