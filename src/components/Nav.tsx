import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={`/`}>
                Main
              </Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={`/about`}>
                About
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* <Link to={`/`}>Main</Link>
      <NavLink to={`/about`}>About</NavLink> */}
    </nav>
  );
}

export default Nav;
