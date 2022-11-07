import './styles.scss';
import 'bootstrap/js/src/collapse.js';
import { Link, NavLink } from 'react-router-dom';
import { NONAME } from 'dns';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-md navbar-dark bg-primary main-nav">
        <div className="container-fluid">
          <Link to="/" className="nav-logo-text">
            <h4>DS Catalog</h4>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#dscatalog-navbar"
            aria-controls="dscatalog-navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="dscatalog-navbar">
            <ul className="navbar-nav offset-md-2 main-menu">
              <li>
                <NavLink
                  to="/"
                  style={(isActive) => ({
                    color: isActive ? '#fff' : 'none',
                  })}
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  style={(isActive) => ({
                    color: isActive ? '#fff' : 'none',
                  })}
                >
                  CATÁLOGO
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/admin"
                  style={(isActive) => ({
                    color: isActive ? '#fff' : 'none',
                  })}
                >
                  ADMIN
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
