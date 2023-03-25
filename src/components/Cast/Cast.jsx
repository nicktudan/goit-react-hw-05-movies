import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

import { fetchMovieCredits } from '..//../services/API';
import avatar from "..//..//img/noavatar.jpg"

import {
  CastList,
  CastItem,
  CastImg,
  CastInfo,
  CastInfoTitle,
} from './Cast.styled';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast ] = useState(null);

  useEffect(() => {
    async function getMovieCredits() {
      try {
        const data = await fetchMovieCredits(movieId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieCredits();
  }, [movieId]);

  return (
    <>
      {cast && (
        <CastList>
          {cast.map(({ cast_id, profile_path, name, character }) => (
            <CastItem key={cast_id}>
              <CastImg
                src={
                  profile_path
                    ? `https://image.tmdb.org/t/p/original/${profile_path}`
                    : avatar
                }
                alt={name}
              />
              <CastInfo>
                <CastInfoTitle>{name}</CastInfoTitle>
                <CastInfoTitle>Character: {character}</CastInfoTitle>
              </CastInfo>
            </CastItem>
            ))}
        </CastList>
      ) }
    </>
  );
}
