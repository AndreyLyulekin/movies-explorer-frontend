import { Header, FirstScreen, AboutProject, Techs, Preloader, AboutMe, Footer } from './index.js';
import { useState, useEffect } from 'react';

export default function App() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
      {isPageLoaded ? (
        <div className='App'>
          <Header />
          <main>
            <FirstScreen />
            <AboutProject />
            <Techs />
            <AboutMe />
            <Footer />
          </main>
        </div>
      ) : (
        <Preloader />
      )}
    </>
  );
}
