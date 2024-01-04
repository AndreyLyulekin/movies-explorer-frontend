import { useContext } from 'react';

import { convertMinToHrsAndMin, openTrailerLink, cardService, ExistingCardsContext } from '../index';

export default function MoviesCard({ card }) {
  const { existingCards, setExistingCards } = useContext(ExistingCardsContext);

  const isAdded = existingCards.some((cardObj) => cardObj.movieId === card.movieId);

  const duration = convertMinToHrsAndMin(card.duration);

  const toggleCard = async (e) => {
    e.stopPropagation();

    const index = existingCards.findIndex((c) => c.movieId === card.movieId);
    const someСoincidence = existingCards.find((obj) => obj.movieId === card.movieId);
    const _id = someСoincidence ? someСoincidence._id : null;

    index === -1
      ? cardService
          .addFavoriteFilm(card)
          .then((res) => {
            setExistingCards((prev) => prev.concat(res));
          })
          .catch((err) => {
            console.error(err);
          })
      : cardService
          .deleteFavoriteFilm(_id)
          .then(() => {
            setExistingCards((prev) => prev.filter((obj) => obj.movieId !== card.movieId));
          })
          .catch((err) => {
            console.error(err);
          });
  };

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
        onClick={(e) => toggleCard(e)}
        className={isAdded ? 'card__save_done' : 'card__save'}></button>
    </article>
  );
}
