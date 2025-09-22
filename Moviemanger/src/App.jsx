import React, { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/movieList";
import UserSession from "./components/userSession";

export default function App() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  // Save Movies
  const saveMovies = (newMovies) => {
    setMovies(newMovies);
    localStorage.setItem("movies", JSON.stringify(newMovies));
  };

  const addMovie = (movie) => saveMovies([...movies, movie]);

  const updateMovie = (index, updatedMovie) => {
    const newMovies = [...movies];
    newMovies[index] = updatedMovie;
    saveMovies(newMovies);
  };

  const deleteMovie = (index) => {
    const newMovies = movies.filter((_, i) => i !== index);
    saveMovies(newMovies);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        🎬 Favorite Movies Manager
      </h1>

      <UserSession />
      <MovieForm addMovie={addMovie} />
      <MovieList
        movies={movies}
        onEdit={updateMovie}
        onDelete={deleteMovie}
      />
    </div>
  );
}
