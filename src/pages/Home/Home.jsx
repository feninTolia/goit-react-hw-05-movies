import React from 'react';
import { Link } from 'react-router-dom';
const API_KEY = '967fca2e12d0ec29fa75f230a5acdce3';

const Home = () => {
  const apiTrendingFetch = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/trending/tv/week?api_key=967fca2e12d0ec29fa75f230a5acdce3`
    );
    const movies = await response.json();
    console.log(movies);
  };

  apiTrendingFetch();

  return (
    <div>
      Home
      {/* map links from API */}
      <br />
      <Link to="movies/id-1">Movie 1</Link>
      <br />т<Link to="movies/id-2">Movie 2</Link>
      <br />
      <Link to="movies/id-3">Movie 3</Link>
    </div>
  );
};

export default Home;
