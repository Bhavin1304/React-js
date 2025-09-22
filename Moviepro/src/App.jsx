import React, { useState, useEffect } from "react";
import MovieForm from "./components/MovieForm";
import MovieList from "./components/MovieList";
import UserSession from "./components/UserSession";

export default function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const storedMovies = JSON.parse(localStorage.getItem("movies")) || [];
    setMovies(storedMovies);
  }, []);

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  const addMovie = (movie) => setMovies([...movies, movie]);

  const updateMovie = (updatedMovie) =>
    setMovies(movies.map((m) => (m.id === updatedMovie.id ? updatedMovie : m)));

  const deleteMovie = (id) => setMovies(movies.filter((m) => m.id !== id));

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6 flex flex-col items-center">
      <header className="w-full max-w-3xl mb-6 text-center">
        <h1 className="text-4xl font-extrabold text-purple-700 mb-2 animate-pulse">
          🎬 Favorite Movies App
        </h1>
        
      </header>

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-6 mb-6">
        <UserSession />
      </div>

      <div className="w-full max-w-3xl bg-white rounded-3xl shadow-xl p-6 mb-6">
        <MovieForm addMovie={addMovie} />
      </div>

      <div className="w-full max-w-3xl">
        {movies.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">
            No movies added yet. Add your first movie above!
          </p>
        ) : (
          <MovieList
            movies={movies}
            updateMovie={updateMovie}
            deleteMovie={deleteMovie}
          />
        )}
      </div>
    </div>
  );
}
