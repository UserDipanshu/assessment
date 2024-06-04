import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            MRM PROCOM.
          </Link>
        </span>
        <span className="h6 mb-0 ">
          <Link to="/form" style={{ color: "white", textDecoration: "none" }}>
            Add Movie
          </Link>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;
