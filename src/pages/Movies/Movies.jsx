import { useState } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import useFetch from '../../Service/useFetch';
import handleImgLoadError from '../../helpers/handleImgLoadError';
import css from './movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const [value, setValue] = useState(search);
  const location = useLocation();
  const FETCH_MOVIES_BY_QUERY = `/search/tv?query=${search}`;

  const { data, error } = useFetch(FETCH_MOVIES_BY_QUERY);

  const handleChange = e => setValue(e.target.value);

  const handleInputSubmit = e => {
    e.preventDefault();
    if (e.target[0].value === '') {
      return;
    }
    setSearchParams({ query: value });
  };

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

  return (
    <div>
      <br />
      <form onSubmit={handleInputSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={value}
          className={css.input}
        />
        <button type="submit" className={css.searchBtn}>
          Search
        </button>
      </form>
      <br />
      <div className={css.searchedMovies}>
        {data?.results?.length === 0 ? (
          <p>We don't have such TV shows 🤡</p>
        ) : (
          data?.results?.map(el => (
            <Link
              to={el.id.toString()}
              key={el.id}
              className={css.searchedMovieItem}
              state={{ from: location }}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                width="200px"
                alt={el.name}
                onError={handleImgLoadError}
              />
              {el.name}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Movies;
