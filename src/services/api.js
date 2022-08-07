import axios from 'axios';

const API_KEY = 'ab9c2583cd1a2f86525b45efd67b53f1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export async function getMoviesSearhQuery(searhQuery) {
  const response = await axios.get(
    `/search/movie?api_key=${API_KEY}&language=en-US&query=${searhQuery}&page=1&include_adult=false`
  );
  const moviesSearhQuery = response.data.results;
  return moviesSearhQuery;
}

export async function getTrending() {
  const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  const trendingMoviesArray = response.data.results;
  return trendingMoviesArray;
}

export async function getMovieDetails(id) {
  const response = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  const movieDetails = response.data;
  return movieDetails;
}

export async function getMovieCredits(id) {
  const response = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const movieCredits = response.data;
  return movieCredits;
}

export async function getMovieReviews(id) {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const movieReviews = response.data;
  return movieReviews;
}