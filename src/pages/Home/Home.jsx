import { useState, useEffect } from 'react';
import { fetchTrendingMovies } from '../../services/API';
import { MovieList } from '../../components/MovieList/MovieList';
import { Title } from './Home.styled'


export const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await fetchTrendingMovies().then(data=> console.log(data));
        setTrendingMovies(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    getMovies();
    // fetchTrendingMovies().then(resp => setTrendingMovies(resp));
    // fetchTrendingMovies().then(resp => console.log(resp));
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MovieList movies={trendingMovies} />
    </main>
  );
};
