import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Home.module.css';

const apiTrendingFetch = async () => {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=967fca2e12d0ec29fa75f230a5acdce3`
  );
  const trendMovies = await response.json();
  return trendMovies.results;
};

const Home = () => {
  // eslint-disable-next-line
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    let ignore = false;
    setTrendingMovies([]);
    apiTrendingFetch().then(result => {
      if (!ignore) {
        setTrendingMovies(result);
      }
    });
    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className={css.trendingMovies}>
      {trendingMovies.map(el => (
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
