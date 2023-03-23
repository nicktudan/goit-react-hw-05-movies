import { Link, useLocation } from "react-router-dom";
import {
  MoviesList,
  MovieItem,
  MovieItemImage,
  MovieItemTitle,
} from './MovieList.styled';


export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(({ id, title, original_title, poster_path }) => (
        <MovieItem key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            <MovieItemImage src={poster_path} alt={title} />
          </Link>
          <MovieItemTitle>{title ?? original_title}</MovieItemTitle>
        </MovieItem>
      ))}
    </MoviesList>
  );
}
