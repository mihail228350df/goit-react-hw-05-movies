import { BackLink } from 'components/BackLink/BackLink';
import { Box } from 'components/Box/Box';
import { Conteiner } from 'components/GlobalStyle';
import MovieCard from 'components/MovieCard/MovieCard';
import { StyledLink } from 'components/PagesNavigation/PagesNavigation.styled';
import { Suspense, useState } from 'react';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';

import { getMovieDetails } from '../services/api';

export default function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const backLinkHref = location.state?.from ?? '/';

  useEffect(() => {
    getMovieDetails(movieId)
      .then(res => {
        setMovie(res);
      })
      .catch(e => {
        navigate('/', { replace: true });
      });
  }, [movieId, navigate]);

  if (!movie) {
    return;
  }

  const {
    id,
    backdrop_path,
    title,
    genres,
    overview,
    vote_average,
    release_date,
  } = movie;

  return (
    <Conteiner>
      <BackLink to={backLinkHref}>Back</BackLink>

      <MovieCard
        id={id}
        url={backdrop_path}
        title={title}
        genres={genres}
        overview={overview}
        vote_average={vote_average}
        date={release_date}
      />

      <Box p={4} border="1px solid black">
        <p>Additional information</p>
        <Box as="ul" display="flex" mt="10px">
          <li>
            <StyledLink to="cast" state={{ from: backLinkHref }}>
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to="reviews" state={{ from: backLinkHref }}>
              Reviews
            </StyledLink>
          </li>
        </Box>
      </Box>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Conteiner>
  );
}