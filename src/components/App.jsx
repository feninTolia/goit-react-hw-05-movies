// import { lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Movies from '../pages/Movies/Movies';
import SingleMovie from '../pages/SingleMovie/SingleMovie';
import SharedLayout from '../components/SharedLayout/SharedLayout';
import Cast from '../components/Cast/Cast';
import Reviews from '../components/Reviews/Reviews';

// const createAsyncComponent = path => lazy(() => import(path));
// const Home = createAsyncComponent('src/pages/Home/Home.jsx');
// const Movies = createAsyncComponent('../pages/Movies');
// const SingleMovie = createAsyncComponent('../components/SingleMovie');
// const Cast = createAsyncComponent('../components/Cast');
// const Revievs = createAsyncComponent('../components/Revievs');

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:moviesID" element={<SingleMovie />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
