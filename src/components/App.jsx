import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from '../pages/Home/Home';
import SharedLayout from '../components/SharedLayout/SharedLayout';
// import Cast from '../components/Cast/Cast';
// import Reviews from '../components/Reviews/Reviews';

const Movies = lazy(() => import('../pages/Movies/Movies'));
const SingleMovie = lazy(() => import('../pages/SingleMovie/SingleMovie'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Reviews = lazy(() => import('../components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />

        <Route
          path="movies"
          element={
            <Suspense fallback={<div>Wait..</div>}>
              <Movies />
            </Suspense>
          }
        />

        <Route
          path="movies/:moviesID"
          element={
            <Suspense fallback={<div>Wait..</div>}>
              <SingleMovie />
            </Suspense>
          }
        >
          <Route
            path="cast"
            element={
              <Suspense fallback={<div>Wait..</div>}>
                <Cast />
              </Suspense>
            }
          />

          <Route
            path="reviews"
            element={
              <Suspense fallback={<div>Wait..</div>}>
                <Reviews />
              </Suspense>
            }
          />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace={true} />} />
    </Routes>
  );
};
