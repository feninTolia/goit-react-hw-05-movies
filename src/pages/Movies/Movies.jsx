import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import useFetch from '../../Service/useFetch';
import css from './movies.module.css';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const [value, setValue] = useState(search);
  const handleChange = e => setValue(e.target.value);

  const { data, loading, error } = useFetch(
    `/search/tv?query=${search}&api_key=967fca2e12d0ec29fa75f230a5acdce3`
  );

  const handleInputSubmit = e => {
    e.preventDefault();
    if (e.target[0].value === '') {
      return;
    }
    setSearchParams({ query: value });
  };

  if (loading) return <h2> LOADING...</h2>;

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
        {data?.results !== [] &&
          data?.results?.map(el => (
            <Link
              to={el.id.toString()}
              key={el.id}
              className={css.searchedMovieItem}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${el.poster_path}`}
                width="200px"
                alt={el.name}
              />
              {el.name}
            </Link>
          ))}
      </div>
      {data?.results?.length === 0 && <p>We don't have such TV shows 🤡</p>}
    </div>
  );
};

export default Movies;
