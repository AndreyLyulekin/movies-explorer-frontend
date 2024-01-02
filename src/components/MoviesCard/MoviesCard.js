import { useState, useEffect } from 'react';

function convertMinToHrsAndMin(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}ч ${remainingMinutes}м`;
}

function openTrailerLink(trailerLink) {
  window.open(trailerLink, '_blank');
}

export default function MoviesCard({ card }) {
  const [isAdded, setIsAdded] = useState(false);

  const duration = convertMinToHrsAndMin(card.duration);

  const toggleCard = (e) => {
    e.stopPropagation();
    const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    const index = existingCards.findIndex((c) => c.id === card.id);

    index === -1 ? existingCards.push(card) : existingCards.splice(index, 1);

    localStorage.setItem('cards', JSON.stringify(existingCards));
    setIsAdded((prev) => !prev);
  };

  useEffect(() => {
    const existingCards = JSON.parse(localStorage.getItem('cards')) || [];
    const currentCardId = card.id;
    setIsAdded(existingCards.some((obj) => obj.id === currentCardId));
  }, [card.id]);

  return (
    <article
      className='card'
      onClick={(e) => openTrailerLink(card.trailerLink)}>
      <img
        className='card__image'
        src={`https://api.nomoreparties.co${card.image.url}`}
        alt={`Постер фильма ${card.nameRU}`}
      />
      <div className='card__description-container'>
        <h2 className='card__title'>{card.nameRU}</h2>
        <p className='card__description'>{duration}</p>
      </div>
      <button
        onClick={(e) => toggleCard(e)}
        className={isAdded ? 'card__save_done' : 'card__save'}></button>
    </article>
  );
}
