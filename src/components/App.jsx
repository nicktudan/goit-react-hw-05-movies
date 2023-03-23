import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { Header } from './Header/Header';
import { Layout } from './Layout';

import { GlobalStyle } from './GlobalStyle';

const Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails'));
// const Cast = lazy(() => import(''));
// const Reviews = lazy(() => import(''));

export const App = () => {
  return (
    <Layout>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          {/* <Route path="movies" element={<Movies />} /> */}
          {/* <Route path="/movies/:movieId" element={<MovieDetails />} /> */}
          {/* <Route path="cast" element={<Cast />} /> */}
          {/* <Route path="reviews" element={<Reviews />} /> */}
        </Route>
        <Route path="*" element={<Navigate to="/dashboard" replace={true} />} />
      </Routes>
    </Layout>
  );
};
