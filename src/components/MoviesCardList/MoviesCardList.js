import { useState, useEffect, memo } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCard } from '../index';

function MoviesCardList({ movies }) {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 1000);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768 && windowWidth > 320) {
      console.log('Mobil');
    } else if (windowWidth > 768 && windowWidth < 1280) {
      console.log('Tablet');
    } else {
      console.log('Laptop');
    }
  }, [windowWidth]);

  return (
    <section className='movies'>
      {movies.map((i) => {
        return (
          <MoviesCard
            card={i}
            key={i.id}
          />
        );
      })}
      {movies.length > 1 ? (
        <div className='movies__more_container'>
          {location.pathname === '/movies' ? <button className='movies__more util__button'>Ещё</button> : ''}
        </div>
      ) : (
        ''
      )}
    </section>
  );
}

export default memo(MoviesCardList);
