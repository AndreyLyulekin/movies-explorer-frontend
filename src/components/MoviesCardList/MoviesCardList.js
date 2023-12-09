import { MoviesCard } from '../index';
import { memo } from 'react';

function MoviesCardList({ movies }) {
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
    </section>
  );
}

export default memo(MoviesCardList);
