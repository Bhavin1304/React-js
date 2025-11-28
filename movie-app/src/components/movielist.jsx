import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../redux/thunks";
import { Link } from "react-router-dom";

function MovieList() {
  const dispatch = useDispatch();
  const { movies = [], loading } = useSelector((s) => s.movie);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) return <h3 className="text-center p-3">Loading...</h3>;

  return (
    <div className="container mt-3">
      <div className="row">
        {movies.map((m) => (
          <div className="col-md-3 mb-3" key={m.id}>
            <div className="card">
              <img
                src={`https://api.themoviedb.org/3${m.poster_path}`}
                alt={m.title}
                className="card-img-top"
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

        {movies.length === 0 && <p className="text-center">No movies found.</p>}
      </div>
    </div>
  );
}

export default MovieList;
