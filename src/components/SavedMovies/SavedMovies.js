import { useState, useContext, useEffect } from 'react';
import { SearchForm, MoviesCardList, ExistingCardsContext } from '../index';

export default function SavedMovies() {
  const [searchResults, setSearchResults] = useState([]);
  const { existingCards } = useContext(ExistingCardsContext);
  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formDataSaved');
    return storedFormData ? JSON.parse(storedFormData) : { query: '', isShort: false };
  });

  useEffect(() => {
    if (formData.query.length === 0) return;

    const regex = new RegExp(formData.query, 'i');
    const results = existingCards.filter((movie) => {
      const matchesQuery = regex.test(movie.nameRU) && regex.test(movie.nameEN);
      const matchesDuration = !formData.isShort || movie.duration <= 40;
      return matchesQuery && matchesDuration;
    });
    setSearchResults(results);

    localStorage.setItem('formDataSaved', JSON.stringify(formData));
  }, [formData, existingCards]);
  return (
    <>
      <SearchForm
        formData={formData}
        setFormData={setFormData}
      />
      <MoviesCardList movies={searchResults} />
    </>
  );
}
