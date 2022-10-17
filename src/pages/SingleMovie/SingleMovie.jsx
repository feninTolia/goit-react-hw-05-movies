import React from 'react';
import BackLink from '../../components/BackLink/BackLink';
import { NavLink, Outlet } from 'react-router-dom';

const SingleMovie = () => {
  return (
    <div>
      <BackLink>Back to home</BackLink>
      <br />
      SingleMovie
      <br />
      <br />
      <hr />
      Additional Information
      <br />
      <NavLink to="cast">cast</NavLink>
      <br />
      <NavLink to="reviews">reviews</NavLink>
      <hr />
      <Outlet />
    </div>
  );
};

export default SingleMovie;
