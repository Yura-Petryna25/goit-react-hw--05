import { Link, useLocation } from "react-router-dom";
import styles from "./MovieList.module.css";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={styles.list}>
      {movies.map(({ id, title, poster_path }) => (
        <li key={id} className={styles.item}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <img
              src={
                poster_path
                  ? `${IMAGE_BASE_URL}${poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={title}
              className={styles.poster}
            />
            <p className={styles.title}>{title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
