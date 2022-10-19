import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import BackLink from '../../components/BackLink/BackLink';
import useFetch from '../../Service/useFetch';
import css from './singleMovie.module.css';
import handleImgLoadError from '../../helpers/handleImgLoadError';

const SingleMovie = () => {
  const { moviesID } = useParams();

  const { data, loading, error } = useFetch(`/tv/${moviesID}?`);

  if (loading) return <h2> LOADING...</h2>;

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

  return (
    <div>
      <BackLink>⬅ Go Back</BackLink>
      <br />
      <img
        src={`https://image.tmdb.org/t/p/w500${data?.poster_path}`}
        width="400px"
        alt={data?.name}
        onError={handleImgLoadError}
      />
      <h1>
        {data?.name}{' '}
        {data?.first_air_date && (
          <span>({data?.first_air_date.slice(0, 4)})</span>
        )}
      </h1>
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
