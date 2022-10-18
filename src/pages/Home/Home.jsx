// import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';
import useFetch from '../../Service/useFetch';

const Home = () => {
  const { data, loading, error } = useFetch(
    `/trending/tv/week?api_key=967fca2e12d0ec29fa75f230a5acdce3`
  );

  if (loading) return <h2> LOADING...</h2>;

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

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
      )) ?? 'loading...'}
    </div>
  );
};

export default Home;
