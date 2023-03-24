import { useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';

import { fetchMovieDetails } from '..//../services/API';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import { Loader } from '..//../components/Loader/Loader';

import {
    BackLinkHref,
    AboutTitle,
    AboutList,
    AboutLink,
} from './MovieDeyails.styled';


export default function MovieDetails() {
    const { movieId } = useParams;
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? '/';

    useEffect(() => {
        async function getMovieDetails() {
            try {
                const data = await fetchMovieDetails(movieId);
                setMovie(data);
            } catch (error) {
                console.log(error);
            }
        }
        getMovieDetails();
    }, [movieId])

    return (
        <>
            <BackLinkHref to={backLinkHref}>Go Back</BackLinkHref>
            <MovieCard movie={movie} />
            <AboutTitle>Additional information</AboutTitle>
            <AboutList>
                <li>
                    <AboutLink to="cast">Cast</AboutLink>
                </li>
                <li>
                    <AboutLink to="reviews">Reviews</AboutLink>
                </li>
            </AboutList>

            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    );
    
}