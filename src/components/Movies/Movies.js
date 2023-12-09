import { useState } from 'react';

import { SearchForm, MoviesCardList, Preloader } from '../index';

export default function Movies({ movies, isMoviesLoading }) {
  const [formData, setFormData] = useState({
    query: '',
    isShort: false,
  });

  return (
    <>
      <SearchForm setFormData={setFormData} />
      {isMoviesLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
    </>
  );
}
