import { Link } from 'react-router-dom';
import useFetch from '../../Service/useFetch';
import handleImgLoadError from '../../helpers/handleImgLoadError';
import css from './Home.module.css';

const Home = () => {
  const FETCH_TRENDING_MOVIES = `/trending/tv/week?`;
  const { data, loading, error } = useFetch(FETCH_TRENDING_MOVIES);

  if (loading) return <h2> LOADING...</h2>;

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

  return (
    <div>
      <h1>Trending TV Shows today</h1>
      <div className={css.trendingMovies}>
        {data?.results.map(el => (
          <Link to={`movies/${el.id}`} key={el.id} className={css.moviesList}>
            <img
              src={
                `https://image.tmdb.org/t/p/w500${el.poster_path}` ||
                'palaceholder'
              }
              width="200px"
              alt={el.name}
              onError={handleImgLoadError}
            />
            {el.name}
          </Link>
        )) ?? 'loading...'}
      </div>
    </div>
  );
};

export default Home;
