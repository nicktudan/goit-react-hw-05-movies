import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/API';
import { MovieList } from '../../components/MovieList/MovieList';
import { Title } from './Home.styled'


export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchTrendingMovies();
        setTrendingMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
  }, []);


  return (
    <main>
      <Title>Trending today</Title>
      {trendingMovies && <MovieList movies={trendingMovies} />}
    </main>
  );
};
