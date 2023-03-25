import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';

import { fetchMovieReviews } from '..//../services/API';

import {
  ReviewsList,
  ReviewsTitle,
  ReviewsText,
  ReviewsTextNo,
} from './Reviews.styled';


export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  
  useEffect(() => {
    async function getMovieReviews() {
      try {
        const data = await fetchMovieReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieReviews();
  }, [movieId]);
  
  return (
    <>
      {reviews.length ? (
        <ReviewsList>
          {reviews.map(({ id, author, content }) => (
            <li key={id}>
              <ReviewsTitle>Author: {author}</ReviewsTitle>
              <ReviewsText>{content}</ReviewsText>
            </li>
          ))}
        </ReviewsList>
      ) : (
        <ReviewsTextNo>We dont have any reviews for this movie</ReviewsTextNo>
      )}
    </>
  );
}