import { useState, useEffect } from 'react';

import { SearchForm, MoviesCardList, Preloader } from '../index';

export default function Movies() {
  const [formData, setFormData] = useState({
    query: '',
    isShort: false,
  });
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setIsLoading(true);
        for (let i = 1; i <= 9; i++) {
          const response = await fetch(`https://api.nomoreparties.co/beatfilm-movies/${i}`);
          const jsonData = await response.json();
          setMovies((prev) => prev.concat(jsonData));
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <SearchForm setFormData={setFormData} />
      {isLoading ? <Preloader /> : <MoviesCardList movies={movies} />}
    </>
  );
}
