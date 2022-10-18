import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import useFetch from '../../Service/useFetch';
import css from './singleMovie.module.css';

const SingleMovie = () => {
  const { moviesID } = useParams();

  const { data, loading, error } = useFetch(
    `/tv/${moviesID}?api_key=967fca2e12d0ec29fa75f230a5acdce3`
  );

  if (loading) return <h2> LOADING...</h2>;

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

  return (
    <div>
      <BackLink>Back to home</BackLink>
      <br />
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        width="400px"
        alt={data?.name}
      />
      <h1>{`${data?.name} (${data?.first_air_date.slice(0, 4)})`}</h1>
      <p>
        Userscore <span>{Math.round(data?.vote_average * 10)}%</span>
      </p>
      <h2>Overview</h2>
      <p>{data?.overview}</p>
      <h2>Genres</h2>
      <ul>
        {data?.genres.map(el => (
          <li key={el.name}>{el.name}</li>
        ))}
      </ul>
      <hr />
      Additional Information
      <br />
      <br />
      <NavLink to="cast" className={css.btn}>
        Cast
      </NavLink>
      <br />
      <NavLink to="reviews" className={css.btn}>
        Reviews
      </NavLink>
      <hr />
      <Outlet />
    </div>
  );
};

export default SingleMovie;
