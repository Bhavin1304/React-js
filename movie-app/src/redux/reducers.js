import { combineReducers } from "redux";


const initialMovieState = {
movies: [],
selectedMovie: null,
loading: false,
error: null,
};


function movieReducer(state = initialMovieState, action) {
switch (action.type) {
case "LOADING": return { ...state, loading: true };
case "SET_MOVIES": return { ...state, movies: action.payload, loading: false };
case "SET_MOVIE_DETAILS": return { ...state, selectedMovie: action.payload, loading: false };
default: return state;
}
}


const authReducer = (state = { user: null }, action) => {
if (action.type === "LOGIN") return { user: action.payload };
return state;
};


export default combineReducers({ movie: movieReducer, auth: authReducer });