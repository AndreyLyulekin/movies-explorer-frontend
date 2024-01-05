import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';

import {
  Header,
  Preloader,
  Main,
  Footer,
  Auth,
  NotFound,
  Movies,
  Profile,
  SavedMovies,
  ContextMenu,
  ProtectedRoute,
  checkTokenValidity,
  UserContext,
  prepearingCard,
  cardService,
  ExistingCardsContext,
} from '../index.js';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [isContextMenuOpened, setIsContextMenuOpened] = useState(false);
  const [favoriteFilms, setFavoriteFilms] = useState([]);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const toggleCard = async (card) => {
    const index = favoriteFilms.findIndex((c) => c.movieId === card.movieId);
    const someСoincidence = favoriteFilms.find((obj) => obj.movieId === card.movieId);
    const _id = someСoincidence ? someСoincidence._id : null;
    index === -1
      ? cardService
          .addFavoriteFilm(card)
          .then((res) => {
            setFavoriteFilms((prev) => prev.concat(res));
          })
          .catch((err) => {
            console.error(err);
          })
      : cardService
          .deleteFavoriteFilm(_id)
          .then(() => {
            setFavoriteFilms((prev) => prev.filter((obj) => obj.movieId !== card.movieId));
          })
          .catch((err) => {
            console.error(err);
          });
  };

  const handleAuth = (token) => {
    if (token) {
      checkTokenValidity(token)
        .then((response) => {
          setIsPageLoading(true);
          setIsLoggedIn(true);
          setUser({
            name: response.name,
            email: response.email,
          });
        })
        .catch((error) => {
          console.error(error?.reason || error?.message);
        })
        .finally(() => {
          setIsPageLoading(false);
        });
    }
    return;
  };

  useEffect(() => {
    handleAuth(localStorage.getItem('token'));
  }, []);

  useEffect(() => {
    if (!isLoggedIn) return;

    (async function () {
      try {
        setIsMoviesLoading(true);
        const response = await fetch(`https://api.nomoreparties.co/beatfilm-movies`);
        const movies = await response.json();
        movies.forEach((movie) => {
          prepearingCard(movie);
        });
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsMoviesLoading(false);
      }
    })();

    (async function () {
      await cardService
        .getAllFavoriteFilms()
        .then((response) => {
          setFavoriteFilms(response);
        })
        .catch((err) => {
          console.error(err);
        });
    })();
  }, [isLoggedIn]);

  return (
    <>
      {!isPageLoading ? (
        <div className='App'>
          <ExistingCardsContext.Provider value={{ favoriteFilms, setFavoriteFilms }}>
            <UserContext.Provider value={{ user, setUser }}>
              <ContextMenu
                isContextMenuOpened={isContextMenuOpened}
                setIsContextMenuOpened={setIsContextMenuOpened}
              />
              <Routes>
                <Route
                  path='/sign-up'
                  element={
                    <Auth
                      setIsLoggedIn={setIsLoggedIn}
                      handleAuth={handleAuth}
                    />
                  }
                />
                <Route
                  path='/sign-in'
                  element={
                    <Auth
                      setIsLoggedIn={setIsLoggedIn}
                      handleAuth={handleAuth}
                    />
                  }
                />
                <Route
                  path='/'
                  element={
                    <>
                      <Header
                        isLoggedIn={isLoggedIn}
                        setIsContextMenuOpened={setIsContextMenuOpened}
                      />
                      <Main />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path='/movies'
                  element={
                    <ProtectedRoute
                      element={() => (
                        <>
                          <Header
                            isLoggedIn={isLoggedIn}
                            setIsContextMenuOpened={setIsContextMenuOpened}
                          />
                          <Movies
                            movies={movies}
                            isMoviesLoading={isMoviesLoading}
                            toggleCard={toggleCard}
                          />
                          <Footer />
                        </>
                      )}
                    />
                  }
                />
                <Route
                  path='/saved-movies'
                  element={
                    <ProtectedRoute
                      element={() => (
                        <>
                          <Header
                            isLoggedIn={isLoggedIn}
                            setIsContextMenuOpened={setIsContextMenuOpened}
                          />
                          <SavedMovies toggleCard={toggleCard} />
                          <Footer />
                        </>
                      )}
                    />
                  }
                />
                <Route
                  path='/profile'
                  element={
                    <ProtectedRoute
                      element={() => (
                        <>
                          <Header
                            isLoggedIn={isLoggedIn}
                            setIsContextMenuOpened={setIsContextMenuOpened}
                          />
                          <Profile setIsLoggedIn={setIsLoggedIn} />
                        </>
                      )}
                    />
                  }
                />
                <Route
                  path='*'
                  element={<NotFound />}
                />
              </Routes>
            </UserContext.Provider>
          </ExistingCardsContext.Provider>
        </div>
      ) : (
        <Preloader first={true} />
      )}
    </>
  );
}
