import { useParams } from 'react-router-dom';
import useFetch from '../../Service/useFetch';
import css from './cast.module.css';

const Cast = () => {
  const { moviesID } = useParams();

  const { data, loading, error } = useFetch(
    `/tv/${moviesID}/credits?api_key=967fca2e12d0ec29fa75f230a5acdce3`
  );

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
            width="150"
          />
          <p>{el.name}</p>
          <p>Character: {el.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
