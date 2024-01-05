import { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCard, getVisibleMoviesCount } from '../index';

function MoviesCardList({ movies, toggleCard }) {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [visibleMoviesCount, setVisibleMoviesCount] = useState(getVisibleMoviesCount(windowWidth));

  const visibleMovies = movies.slice(0, visibleMoviesCount);

  const handleLoadMore = () => {
    let additionalCardsCount = 0;
    if (windowWidth >= 1280) {
      additionalCardsCount = 3;
    } else if (windowWidth >= 768) {
      additionalCardsCount = 2;
    } else {
      additionalCardsCount = 2;
    }

    setVisibleMoviesCount((prevCount) => prevCount + additionalCardsCount);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setVisibleMoviesCount(getVisibleMoviesCount(window.innerWidth));
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className='movies'>
      {visibleMovies.map((i) => (
        <MoviesCard
          card={i}
          key={i.movieId}
          toggleCard={toggleCard}
        />
      ))}
      {movies.length > visibleMoviesCount && location.pathname === '/movies' && (
        <div className='movies__more_container'>
          <button
            className='movies__more util__button'
            onClick={handleLoadMore}>
            Ещё
          </button>
        </div>
      )}
      {movies.length === 0 && <span className='movies__nothingMatch'>Ничего не найдено</span>}
    </section>
  );
}

export default memo(MoviesCardList);
