import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      Movies
      <br />
      <input type="text" />
      <br />
      <br />
      search results
      <br />
      <Link to="id-23">Searched Movie 23</Link>
      <br />
      <Link to="id-24">Searched Movie 24</Link>
      <br />
      <Link to="id-25">Searched Movie 25</Link>
    </div>
  );
};

export default Movies;
