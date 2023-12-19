import { memo } from 'react';
import { useLocation } from 'react-router-dom';

import { MoviesCard } from '../index';

function MoviesCardList({ movies }) {
  const location = useLocation();
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
      <div className='moveis__more_container'>
        {location.pathname === '/movies' ? <button className='movies__more util__button'>Ещё</button> : ''}
      </div>
    </section>
  );
}

export default memo(MoviesCardList);
