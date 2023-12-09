import React from 'react';

export default function MoviesCard({ card }) {
  function convertMinToHrsAndMin(minutes) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}ч ${remainingMinutes}м`;
  }

  let duration = convertMinToHrsAndMin(card.duration);

  return (
    <article className='card'>
      <img
        className='card__image'
        src={`https://api.nomoreparties.co${card.image.url}`}
        alt='...'
      />
      <div className='card__description-container'>
        <h2 className='card__title'>{card.nameRU}</h2>
        <p className='card__description'>{duration}</p>
      </div>
      <button className='card__save'>Сохранить</button>
    </article>
  );
}
