import { useParams } from 'react-router-dom';
import useFetch from '../../Service/useFetch';
import css from './cast.module.css';
import handleImgLoadError from '../../helpers/handleImgLoadError';

const Cast = () => {
  const { moviesID } = useParams();

  const { data, loading, error } = useFetch(`/tv/${moviesID}/credits?`);

  if (loading) return <h2> LOADING...</h2>;

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

  if (data?.cast.length === 0) {
    return <p>We don't have any cast for this movie 👻</p>;
  }

  return (
    <ul className={css.castList}>
      {data?.cast.map(el => (
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
      ))}
    </ul>
  );
};

export default Cast;
