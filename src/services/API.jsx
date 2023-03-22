import axios from 'axios';

axios.default.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c633fbd383276868549332293f6b233d';


export async function fetchTrendingMovies() {
    const response = await axios.get(
        `trending/movie/day?api_key=${API_KEY}`
    );
    return response.data.results;
}    


export async function fetchSearchMovies(query) {
  const response = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${query}&page=1`
  );
  return response.data.results;
}   


export async function fetchMovieDetails(id) {
  const response = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return response.data;
}  


export async function fetchMovieCredits(id) {
  const response = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return response.data.cast;
}  


export async function fetchMovieReviews(id) {
  const response = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&page=1`
  );
  return response.data.results;
}  