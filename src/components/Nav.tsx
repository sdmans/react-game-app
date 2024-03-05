import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to={`/`}>Main</Link>
      <NavLink to={`/about`}>About</NavLink>
    </nav>
  );
}

export default Nav;
