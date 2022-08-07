import { Box } from 'components/Box/Box';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { getMovieCredits } from '../../services/api';
import { CastListItemStyled } from './CastList.styled';

export default function CastList() {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getMovieCredits(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(e => {
        navigate('/', { replace: true });
      });
  }, [movieId, navigate]);

  if (!cast) {
    return;
  }

  return (
    <Box as="ul" mt="20px">
      {cast.map(({ character, name, profile_path }) => {
        let baseUrl = 'https://image.tmdb.org/t/p/w500';

        if (!profile_path) {
          baseUrl =
            'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Anonymous.svg/1481px-Anonymous.svg.png';
          profile_path = '';
        }

        return (
          <CastListItemStyled key={name}>
            <img
              src={`${baseUrl}${profile_path}`}
              alt="photo_profile"
              width={500}
            />
            <p>{name}</p>
            <p>Character: {character}</p>
          </CastListItemStyled>
        );
      })}
    </Box>
  );
}