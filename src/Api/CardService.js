import { Api } from './Api';
import { apiCredentials } from '../utils/consts';

class CardService extends Api {
  constructor() {
    super(apiCredentials);
  }

  getAllFavoriteFilms() {
    return this.get('/movies').then((response) => {
      return response;
    });
  }

  addFavoriteFilm(film) {
    return this.post('/movies', film).then((response) => {
      return response;
    });
  }

  deleteFavoriteFilm(cardId) {
    return super.delete(`/movies/${cardId}`).then((response) => {
      return response;
    });
  }
}

export const cardService = new CardService(apiCredentials);
