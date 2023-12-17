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
} from '../index.js';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isContextMenuOpened, setIsContextMenuOpened] = useState(false);
  const [user, setUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
  }, []);

  useEffect(() => {
    (async function () {
      try {
        setIsMoviesLoading(true);
        for (let i = 1; i <= 5; i++) {
          const response = await fetch(`https://api.nomoreparties.co/beatfilm-movies/${i}`);
          const movie = await response.json();
          setMovies((prev) => prev.concat(movie));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsMoviesLoading(false);
      }
    })();
  }, []);

  return (
    <>
      {isPageLoaded ? (
        <div className='App'>
          <ContextMenu
            isContextMenuOpened={isContextMenuOpened}
            setIsContextMenuOpened={setIsContextMenuOpened}
          />
          <Routes>
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
              path='/sign-up'
              element={<Auth />}
            />
            <Route
              path='/sign-in'
              element={<Auth />}
            />
            <Route
              path='/movies'
              element={
                <>
                  <Header
                    isLoggedIn={isLoggedIn}
                    setIsContextMenuOpened={setIsContextMenuOpened}
                  />
                  <Movies
                    movies={movies}
                    isMoviesLoading={isMoviesLoading}
                  />
                  <Footer />
                </>
              }
            />
            <Route
              path='/saved-movies'
              element={
                <>
                  <Header
                    isLoggedIn={isLoggedIn}
                    setIsContextMenuOpened={setIsContextMenuOpened}
                  />
                  <SavedMovies />
                  <Footer />
                </>
              }
            />
            <Route
              path='/profile'
              element={
                <>
                  <Header
                    isLoggedIn={isLoggedIn}
                    setIsContextMenuOpened={setIsContextMenuOpened}
                  />
                  <Profile
                    user={user}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                </>
              }
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
        </div>
      ) : (
        <Preloader first={true} />
      )}
    </>
  );
}
