import MoviesList from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { useState } from 'react';
import { getTrending } from '../services/api';

import { Conteiner } from '../components/GlobalStyle';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getTrending()
      .then(res => {
        setMovies(res);
      })
      .catch(() => {
        navigate('/', { replace: true });
      });
  }, [navigate]);

  return (
    <Conteiner>
      <h2>Trending Movies</h2>

      <MoviesList movies={movies} />
    </Conteiner>
  );
}