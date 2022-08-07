import { NavLink, useLocation } from 'react-router-dom';

export default function MoviesListItem({ title = 'No movie title', id }) {
  const location = useLocation();

  return (
    <li id={id}>
      <NavLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </NavLink>
    </li>
  );
}