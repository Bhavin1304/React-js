import { Link } from "react-router-dom";


function Navbar() {
return (
<nav className="navbar navbar-dark bg-dark navbar-expand-lg px-3">
<Link className="navbar-brand" to="/">Movie Library</Link>


<div className="navbar-nav">
<Link className="nav-link" to="/">Popular</Link>
<Link className="nav-link" to="/search">Search</Link>
<Link className="nav-link" to="/profile">Profile</Link>
<Link className="nav-link" to="/login">Login</Link>
</div>
</nav>
);
}
export default Navbar;