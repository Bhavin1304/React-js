import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovieDetails } from "../redux/thunks";
import { useParams } from "react-router-dom";


function MovieDetails() {
const { id } = useParams();
const dispatch = useDispatch();
const { selectedMovie, loading } = useSelector((s) => s.movie);


useEffect(() => {
dispatch(fetchMovieDetails(id));
}, [id, dispatch]);


if (loading) return <h3 className="text-center">Loading...</h3>;


if (!selectedMovie) return null;


return (
<div className="container mt-3">
<h2>{selectedMovie.title}</h2>
<p><strong>Release:</strong> {selectedMovie.release_date}</p>
<p><strong>Overview:</strong> {selectedMovie.overview}</p>
</div>
);
}
export default MovieDetails;