import { useState, useEffect } from 'react';

import { SearchForm, MoviesCardList, Preloader } from '../index';

export default function Movies({ movies, isMoviesLoading }) {
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState({
    query: '',
    isShort: false,
  });

  useEffect(() => {
    if (formData.query.length === 0) return;

    const regex = new RegExp(formData.query, 'i');
    const results = movies.filter((movie) => {
      const matchesQuery = regex.test(movie.nameRU) || regex.test(movie.nameEN);
      const matchesDuration = !formData.isShort || movie.duration <= 40;
      return matchesQuery && matchesDuration;
    });
    setSearchResults(results);
  }, [formData, movies]);

  return (
    <>
      <SearchForm setFormData={setFormData} />
      {isMoviesLoading ? <Preloader /> : <MoviesCardList movies={searchResults} />}
    </>
  );
}
