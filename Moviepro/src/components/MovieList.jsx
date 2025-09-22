import React, { useState } from "react";

export default function MovieList({ movies, updateMovie, deleteMovie }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ title: "", genre: "", rating: "" });

  const startEdit = (movie) => {
    setEditingId(movie.id);
    setFormData(movie);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    updateMovie(formData);
    setEditingId(null);
  };

  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">Movies List</h2>
      {movies.length === 0 && <p>No movies added yet.</p>}
      <ul className="space-y-3">
        {movies.map((movie) => (
          <li key={movie.id} className="border p-3 rounded-lg shadow-sm">
            {editingId === movie.id ? (
              <form onSubmit={handleUpdate}>
                <input
                  className="border p-1 mr-2 rounded"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                />
                <input
                  className="border p-1 mr-2 rounded"
                  value={formData.genre}
                  onChange={(e) =>
                    setFormData({ ...formData, genre: e.target.value })
                  }
                />
                <input
                  type="number"
                  className="border p-1 mr-2 rounded w-20"
                  value={formData.rating}
                  onChange={(e) =>
                    setFormData({ ...formData, rating: e.target.value })
                  }
                />
                <button className="bg-green-600 text-white px-2 py-1 rounded mr-2">
                  Save
                </button>
                <button
                  type="button"
                  className="bg-gray-400 text-white px-2 py-1 rounded"
                  onClick={() => setEditingId(null)}
                >
                  Cancel
                </button>
              </form>
            ) : (
              <div className="flex justify-between items-center">
                <span>
                  <strong>{movie.title}</strong> | {movie.genre} | ⭐ {movie.rating}
                </span>
                <div>
                  <button
                    className="bg-yellow-500 text-white px-2 py-1 rounded mr-2"
                    onClick={() => startEdit(movie)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-600 text-white px-2 py-1 rounded"
                    onClick={() => deleteMovie(movie.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
