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
} from '../index.js';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [isMoviesLoading, setIsMoviesLoading] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isContextMenuOpened, setIsContextMenuOpened] = useState(false);
  const [user, setUser] = useState({
    name: '',
    email: '',
  });

  const handleAuth = (token) => {
    if (token) {
      checkTokenValidity(token)
        .then((response) => {
          setIsPageLoaded(true);
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
          setIsPageLoaded(false);
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
        setMovies(movies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsMoviesLoading(false);
      }
    })();
  }, [isLoggedIn]);

  return (
    <>
      {!isPageLoaded ? (
        <div className='App'>
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
                    setIsPageLoaded={setIsPageLoaded}
                  />
                }
              />
              <Route
                path='/sign-in'
                element={
                  <Auth
                    setIsLoggedIn={setIsLoggedIn}
                    handleAuth={handleAuth}
                    setIsPageLoaded={setIsPageLoaded}
                  />
                }
              />
              <Route
                path='/'
                element={
                  <ProtectedRoute
                    element={() => (
                      <>
                        <Header
                          isLoggedIn={isLoggedIn}
                          setIsContextMenuOpened={setIsContextMenuOpened}
                        />
                        <Main />
                        <Footer />
                      </>
                    )}
                  />
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
                        <SavedMovies />
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
        </div>
      ) : (
        <Preloader first={true} />
      )}
    </>
  );
}
