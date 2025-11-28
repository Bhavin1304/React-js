import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function MovieSearch() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (q) => {
    setQuery(q);

    if (!q) {
      setMovies([]); 
      return;
    }

    try {
      const res = await axios.get(
        `: http://www.omdbapi.com/?i=tt3896198&apikey=7044c2d${q}`
      );

      setMovies(res.data.results || []);
    } catch (err) {
      console.error("Search error:", err);
      setMovies([]);
    }
  };

  return (
    <div className="container mt-3">
      <input
        className="form-control"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />

      <div className="row mt-3">
        {movies.map((m) => (
          <div className="col-md-3 mb-3" key={m.id}>
            <div className="card">
              <img
                src={`https://image.tmdb.org/t/p/w300${m.poster_path}`}
                className="card-img-top"
                alt={m.title}
              />
              <div className="card-body">
                <h5>{m.title}</h5>
                <Link to={`http://www.omdbapi.com/?i=tt3896198&apikey=7044c2d${m.id}`} className="btn btn-primary btn-sm">
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}

        {movies.length === 0 && query && (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default MovieSearch;
