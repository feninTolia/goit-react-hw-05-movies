import { useParams } from 'react-router-dom';
import useFetch from '../../Service/useFetch';
// import css from './reviews.module.css';

const Reviews = () => {
  const { moviesID } = useParams();
  const FETCH_REVIEWS_BY_MOVIE_ID = `/tv/${moviesID}/reviews?`;

  const { data, loading, error } = useFetch(FETCH_REVIEWS_BY_MOVIE_ID);

  if (loading) return <h2> LOADING...</h2>;

  if (error) {
    console.log(error);
    return <h2>Something went wrong 😢 </h2>;
  }

  if (data?.results.length === 0) {
    return <p>We don't have any rewievs for this movie 👻</p>;
  }

  return (
    <ul>
      {data?.results.map(el => (
        <li key={el.author}>
          <b>
            Author: <span>{el.author}</span>
          </b>
          <p>{el.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
