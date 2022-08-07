import MoviesList from 'components/MoviesList/MoviesList';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Notiflix from 'notiflix';
import { useEffect } from 'react';
import { useState } from 'react';
import { getMoviesSearhQuery } from '../services/api';
import { Conteiner } from 'components/GlobalStyle';
import SearchBar from 'components/SearchBar/SearchBar';

export default function Movies() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      getMoviesSearhQuery(query)
        .then(res => {
          if (res.length === 0 && query) {
            setSearchParams({});
            Notiflix.Notify.failure('Not found movie this name!!!');
          }
          setMovies(res);
        })
        .catch(() => {
          navigate('/', { replace: true });
        });
    }
  }, [query, setSearchParams, navigate]);

  return (
    <Conteiner>
      <SearchBar setSearchParams={setSearchParams} />
      {query && <MoviesList movies={movies} />}
    </Conteiner>
  );
}