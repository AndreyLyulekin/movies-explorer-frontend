import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { Header, Preloader, Main, Footer, Auth, NotFound, Movies, Profile } from '../index.js';

export default function App() {
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
              element={<Movies />}
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
