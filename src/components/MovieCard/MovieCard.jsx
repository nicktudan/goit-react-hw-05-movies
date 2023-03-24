import { PropTypes } from 'prop-types';

import {
  MovieCardWrap,
  MovieCardImage,
  MovieCardInfo,
  MovieCardText,
} from './MovieCard.styled';


export const MovieCard = ({
  movie: {
    name,
    title,
    poster_path,
    vote_average,
    overview,
    release_date,
    genres =[],
  },
}) => (
  <MovieCardWrap>
    <MovieCardImage
      src={`https://image.tmdb.org/t/p/original/${poster_path}`}
      alt={title}
    />
    <MovieCardInfo>
      <h2>
        {title ?? name}({release_date.slice(0, 4)})
      </h2>
      <MovieCardText>
        User Score: {Math.round(vote_average * 10)}%
      </MovieCardText>
      <h3>Overview</h3>
      <MovieCardText>{overview}</MovieCardText>
      <h3>Genres</h3>
      <MovieCardText>{genres.join(', ')}</MovieCardText>
      {/* <MovieCardText>{genres.map(({ name }) => name).join(', ')}</MovieCardText> */}
    </MovieCardInfo>
  </MovieCardWrap>
);


MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}