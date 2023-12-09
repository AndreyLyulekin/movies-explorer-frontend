import { useState, useEffect, useLayoutEffect } from 'react';
import { Routes, Route } from 'react-router';
import { Header, Preloader, Main, Footer, Auth, NotFound, Movies, Profile, SavedMovies } from '../index.js';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [user, setUser] = useState({
    name: 'Виталий',
    email: 'pochta@yandex.ru',
  });

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
  }, []);

  useLayoutEffect(() => {
    (async function () {
      try {
        setIsMoviesLoading(true);
        for (let i = 1; i <= 9; i++) {
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
          <Header isLoggedIn={isLoggedIn} />
          <Routes>
            <Route
              path='/'
              element={<Main />}
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
                <Movies
                  movies={movies}
                  isMoviesLoading={isMoviesLoading}
                />
              }
            />
            <Route
              path='/saved-movies'
              element={<SavedMovies />}
            />
            <Route
              path='/profile'
              element={
                <Profile
                  user={user}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route
              path='*'
              element={<NotFound />}
            />
          </Routes>
          <Footer />
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}
