import { useState, useEffect } from 'react';

import { SearchForm, MoviesCardList, Preloader } from '../index';

export default function Movies({ movies, isMoviesLoading, toggleCard }) {
  const [searchResults, setSearchResults] = useState([]);
  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formData');
    return storedFormData ? JSON.parse(storedFormData) : { query: '', isShort: false };
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

    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData, movies]);

  return (
    <>
      <SearchForm
        formData={formData}
        setFormData={setFormData}
      />
      {isMoviesLoading ? (
        <Preloader />
      ) : (
        <MoviesCardList
          movies={searchResults}
          toggleCard={toggleCard}
        />
      )}
    </>
  );
}
