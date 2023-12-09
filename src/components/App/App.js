import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { Header, Preloader, Main, Footer, Auth, NotFound, Movies } from '../index.js';

export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {isPageLoaded ? (
        <div className='App'>
          <Routes>
            <Route
              path='/'
              element={
                <>
                  <Header isLoggedIn={isLoggedIn} />
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
                  <Header isLoggedIn={isLoggedIn} />
                  <Movies />
                  <Footer />
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
        <Preloader />
      )}
    </>
  );
}
