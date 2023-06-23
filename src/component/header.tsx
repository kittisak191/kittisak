import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark navbar-expand-lg"
        aria-label="Third navbar example"
      >
        <div className="container-fluid header-container">
          <span className="navbar-brand header-navbar-collapse-left">
            My Website
          </span>
          <button
            className="navbar-toggler header-navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <span
            className="collapse navbar-collapse header-navbar-collapse-right"
            id="navbarsExample03"
          >
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/gallery">
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
