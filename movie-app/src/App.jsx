
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import MovieList from "./components/movielist";
import MovieDetails from "./components/MovieDetails";
import MovieSearch from "./components/MovieSearch";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./pages/Login";
import Profile from "./pages/Profile";


function App() {
return (
<div>
<Navbar />
<Routes>
<Route path="/" element={<MovieList />} />
<Route path="/movie/:id" element={<MovieDetails />} />
<Route path="/search" element={<MovieSearch />} />
<Route path="/login" element={<Login />} />
<Route
path="/profile"
element={
<PrivateRoute>
<Profile />
</PrivateRoute>
}
/>
</Routes>
</div>
);
}
export default App;