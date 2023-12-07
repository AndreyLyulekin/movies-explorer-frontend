import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { Header, Preloader, Main, Footer, Auth, NotFound } from '../index.js';

export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
                  <Header />
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
