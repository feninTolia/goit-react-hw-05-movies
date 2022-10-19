import { useParams } from 'react-router-dom';
import useFetch from '../../Service/useFetch';
import handleImgLoadError from '../../helpers/handleImgLoadError';
import css from './cast.module.css';

const Cast = () => {
  const { moviesID } = useParams();
  const FETCH_CAST_BY_MOVIE_ID = `/tv/${moviesID}/credits?`;

  const { data, loading, error } = useFetch(FETCH_CAST_BY_MOVIE_ID);

  if (loading) return <h2> LOADING...</h2>;

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

  return (
    <ul className={css.castList}>
      {data?.cast.length === 0 ? (
        <p>We don't have cast of this movie 😪</p>
      ) : (
        data?.cast.map(el => (
          <li key={el.name} className={css.castItem}>
            <img
              src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
              alt={el.name}
              onError={handleImgLoadError}
              width="150"
            />
            <p>{el.name}</p>
            {el.character && <p>Character: {el.character}</p>}
          </li>
        ))
      )}
    </ul>
  );
};

export default Cast;
