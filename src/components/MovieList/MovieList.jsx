import { Link, useLocation } from "react-router-dom";


export const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movies/${id}`} state={{ from: location }}>
            <h3>{title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
}