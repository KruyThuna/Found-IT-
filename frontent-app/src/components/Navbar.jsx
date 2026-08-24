import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">
          <span className="logo-icon">◎</span>
          Found-IT
        </Link>

        <nav className="nav-links">
          <Link to="/lost-items">Report Lost</Link>
          <Link to="/found-items">Report Found</Link>
          <Link to="/admin-login">Admin Login</Link>

          <Link to="/login" className="signin-btn">
            Sign In
          </Link>

          <Link to="/ProfileDetail" className="profile-avatar">
            👤
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
