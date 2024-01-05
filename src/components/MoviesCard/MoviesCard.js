import { useContext } from 'react';

import { convertMinToHrsAndMin, openTrailerLink, ExistingCardsContext } from '../index';

export default function MoviesCard({ card, toggleCard }) {
  const { favoriteFilms } = useContext(ExistingCardsContext);

  const isAdded = favoriteFilms.some((cardObj) => cardObj.movieId === card.movieId);

  const duration = convertMinToHrsAndMin(card.duration);

  function handleLikeClick(e) {
    e.stopPropagation();
    toggleCard(card);
  }

  return (
    <article
      className='card'
      onClick={(e) => openTrailerLink(card.trailerLink)}>
      <img
        className='card__image'
        src={`${card.image}`}
        alt={`Постер фильма ${card.nameRU}`}
      />
      <div className='card__description-container'>
        <h2 className='card__title'>{card.nameRU}</h2>
        <p className='card__description'>{duration}</p>
      </div>
      <button
        type='button'
        onClick={(e) => handleLikeClick(e)}
        className={isAdded ? 'card__save_done' : 'card__save'}></button>
    </article>
  );
}
