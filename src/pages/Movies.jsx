import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';

import { fetchSearchMovies } from '../services/API';
import Searchbar from '../components/Searchbar/Searchbar';
import { MovieList } from '../components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    async function getMovie() {
      try {
        const data = await fetchSearchMovies(query);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovie();
  }, [query]);

  function handleFormSubmit(query) {
    setSearchParams({ query });
  }
    
  return (
    <>
      <Searchbar onSubmit={handleFormSubmit} />
      {movies && <MovieList movies={movies} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
}