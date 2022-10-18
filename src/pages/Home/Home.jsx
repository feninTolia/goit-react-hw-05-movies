import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import useFetch from '../../Service/useFetch';

const Home = () => {
  const { data, loading, error, refetch } = useFetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=967fca2e12d0ec29fa75f230a5acdce3`
  );

  if (loading) return <h1> LOADING...</h1>;

  if (error) console.log(error);

  return (
    <div className={css.trendingMovies}>
      {data?.results.map(el => (
        <Link to={`movies/${el.id}`} key={el.id} className={css.moviesList}>
          <img
            src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
            width="200px"
            alt={el.name}
          />
          {el.name}
        </Link>
      )) ?? 'Loading...'}
    </div>
  );
};

// export const MoviesList = ({ id, name }) => {
//   return <Link to="movies/3">{name}</Link>;
// };

export default Home;
