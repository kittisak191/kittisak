import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-sm navbar-dark "
        aria-label="Third navbar example"
      >
        <div className="container-fluid">
          <Link className="navbar-brand header-navbar-collapse-left" to="/">
            Kittisak
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample03"
            aria-controls="navbarsExample03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse header-navbar-collapse-right"
            id="navbarsExample03"
          >
            <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
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
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
