import React, { useState } from "react";

export default function MovieForm({ addMovie }) {
  const [title, setTitle] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !genre || !rating) return;

    const newMovie = {
      id: Date.now(),
      title,
      genre,
      rating,
    };
    addMovie(newMovie);
    setTitle("");
    setGenre("");
    setRating("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-2xl shadow-lg max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
        Add a New Movie
      </h2>

      <div className="relative mb-4">
        <input
          type="text"
          id="title"
          placeholder=" "
          className="peer border-b-2 border-gray-300 focus:border-purple-500 w-full p-2 outline-none transition-colors"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label
          htmlFor="title"
          className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-purple-600 peer-focus:text-sm"
        >
          Title
        </label>
      </div>

      <div className="relative mb-4">
        <input
          type="text"
          id="genre"
          placeholder=" "
          className="peer border-b-2 border-gray-300 focus:border-purple-500 w-full p-2 outline-none transition-colors"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <label
          htmlFor="genre"
          className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-purple-600 peer-focus:text-sm"
        >
          Genre
        </label>
      </div>

      <div className="relative mb-6">
        <input
          type="number"
          id="rating"
          placeholder=" "
          min="1"
          max="10"
          className="peer border-b-2 border-gray-300 focus:border-purple-500 w-full p-2 outline-none transition-colors"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <label
          htmlFor="rating"
          className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-purple-600 peer-focus:text-sm"
        >
          Rating (1-10)
        </label>
      </div>

      <button
        type="submit"
        className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 rounded-xl shadow-md transition-transform transform hover:scale-105"
      >
        Add Movie
      </button>
    </form>
  );
}
