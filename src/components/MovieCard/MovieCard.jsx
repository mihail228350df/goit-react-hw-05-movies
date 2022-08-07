import { Box } from 'components/Box/Box';
import { MovieCardStyled } from './MovieCard.styled';
import PropTypes from 'prop-types';

export default function MovieCard({
  id,
  url,
  title,
  genres,
  overview,
  vote_average,
  date,
}) {
  let baseUrl = 'https://image.tmdb.org/t/p/w500';

  if (!url) {
    baseUrl =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png';
    url = '';
  }

  return (
    <MovieCardStyled id={id}>
      <img src={`${baseUrl}${url}`} alt="Poster movie" />
      <Box p={4}>
        <h1>
          {title} ({date})
        </h1>
        <p>User Score: {vote_average} </p>

        {overview && (
          <>
            <h2>Overview</h2>
            <p>{overview}</p>
          </>
        )}
        {genres && (
          <>
            <h2>Genres</h2>
            <p>{genres.map(genre => `${genre.name} `)}</p>
          </>
        )}
      </Box>
    </MovieCardStyled>
  );
}

MovieCard.propTypes = {
  id: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};