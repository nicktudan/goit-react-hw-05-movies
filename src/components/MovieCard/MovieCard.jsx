import { PropTypes } from 'prop-types';

import avatar from '..//..//img/noimage.jpg';

import {
  MovieCardWrap,
  MovieCardImage,
  MovieCardInfo,
  MovieCardTitle,
  MovieCardTitleS,
  MovieCardText,
} from './MovieCard.styled';


export const MovieCard = ({
  movie: {
    title,
    original_title,
    poster_path,
    vote_average,
    overview,
    release_date,
    genres,
  },
}) => {
  return (
    <MovieCardWrap>
      <MovieCardImage
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/original/${poster_path}`
            : avatar
        }
        alt={original_title}
      />
      <MovieCardInfo>
        <MovieCardTitle>
          {original_title ?? title}({release_date.slice(0, 4)})
        </MovieCardTitle>
        <MovieCardText>
          User Score: {Math.round(vote_average * 10)}%
        </MovieCardText>
        <MovieCardTitleS>Overview</MovieCardTitleS>
        <MovieCardText>{overview}</MovieCardText>
        <MovieCardTitleS>Genres</MovieCardTitleS>
        <MovieCardText>
          {genres.map(({ name }) => name).join(', ')}
        </MovieCardText>
      </MovieCardInfo>
    </MovieCardWrap>
  );
}


MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
}