import { useLocation } from "react-router-dom";

import { PropTypes } from 'prop-types';

import {
  MoviesList,
  MovieItem,
  LinkMovieItem,
  MovieItemImage,
  MovieItemTitle,
} from './MovieList.styled';


export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <MoviesList>
      {movies.map(({ id, title, original_title, poster_path }) => (
        <MovieItem key={id}>
          <LinkMovieItem to={`/movies/${id}`} state={{ from: location }}>
            <MovieItemImage
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              alt={title}
            />
          </LinkMovieItem>
          <MovieItemTitle>{title ?? original_title}</MovieItemTitle>
        </MovieItem>
      ))}
    </MoviesList>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};