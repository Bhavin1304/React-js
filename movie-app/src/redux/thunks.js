import axios from "axios";

const API = "https://api.themoviedb.org/3";
const KEY = "YOUR_TMDB_KEY"; 


export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: "LOADING" });

  const res = await axios.get(`${API}http://www.omdbapi.com/?i=tt3896198&apikey=7044c2d${KEY}`);

  dispatch({
    type: "SET_MOVIES",
    payload: res.data.results,
  });
};


export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });

  const res = await axios.get(`${API}/movie/${id}?api_key=${KEY}`);

  dispatch({
    type: "SET_MOVIE_DETAILS",
    payload: res.data,
  });
};

