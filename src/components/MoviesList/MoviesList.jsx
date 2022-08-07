import MoviesListItem from './MoviesListItem';
import PropTypes from 'prop-types';

export default function MoviesList({ movies }) {
  const moviesItem = movies.map(movie => {
    const { id, title, original_title } = movie;

    return <MoviesListItem key={id} id={id} title={original_title || title} />;
  });

  return <ol>{moviesItem}</ol>;
}

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};