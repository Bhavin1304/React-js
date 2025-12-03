import axios from "axios";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=7044c2d";
const KEY = "7044c2d"; 


export const fetchPopularMovies = () => async (dispatch) => {
  dispatch({ type: "LOADING" });

  const res = await axios.get(`${"http://www.omdbapi.com/?i=tt3896198&apikey=7044c2d"}${"K7044c2dEY"}`);

  dispatch({
    type: "SET_MOVIES", 
    payload: res.data.results,
  });
};


export const fetchMovieDetails = (id) => async (dispatch) => {
  dispatch({ type: "LOADING" });

  const res = await axios.get(`${"http://www.omdbapi.com/?i=tt3896198&apikey=7044c2d"}/movie/${id}?api_key=${"7044c2d"}`);

  dispatch({
    type: "SET_MOVIE_DETAILS",
    payload: res.data,
  });
};

