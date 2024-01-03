export function convertMinToHrsAndMin(minutes) {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  return `${hours}ч ${remainingMinutes}м`;
}

export function openTrailerLink(trailerLink) {
  window.open(trailerLink, '_blank');
}

export const prepearingCard = (card) => {
  const newCard = card;
  newCard.image = `https://api.nomoreparties.co${card.image.url}`;
  newCard.thumbnail = newCard.image;
  newCard.movieId = card.id;
  delete newCard.created_at;
  delete newCard.id;
  delete newCard.updated_at;
  return newCard;
};
