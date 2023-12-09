import { useState, useEffect } from 'react';
import { SearchForm, MoviesCardList, Preloader } from '../index';

export default function SavedMovies() {
  const [formData, setFormData] = useState({
    query: '',
    isShort: false,
  });
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    console.log(JSON.parse(localStorage.getItem('cards')).length);
    setMovies(JSON.parse(localStorage.getItem('cards')) || []);
  }, []);

  return (
    <>
      <SearchForm setFormData={setFormData} />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
    </>
  );
}
