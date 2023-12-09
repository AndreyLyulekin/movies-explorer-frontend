import React, { useState, useEffect, useCallback } from 'react';

export default function MoviesCard({ card }) {
  const [isAdded, setIsAdded] = useState(false);

  const convertMinToHrsAndMin = useCallback((minutes) => {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    return `${hours}ч ${remainingMinutes}м`;
  }, []);

  let duration = convertMinToHrsAndMin(card.duration);

  const handleClick = () => {
    const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    existingCards.push(card);
    localStorage.setItem('cards', JSON.stringify(existingCards));
  };

  useEffect(() => {
    const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    const currentCardId = card.id;
    setIsAdded(existingCards.some((obj) => obj.id === currentCardId));
  }, [card.id, isAdded]);

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
      <button
        onClick={handleClick}
        className={`${isAdded ? 'card__save_done' : 'card__save'}`}></button>
    </article>
  );
}
