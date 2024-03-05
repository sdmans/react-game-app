import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to={`/`}>Home</Link>
      <NavLink to={`/about`}>About</NavLink>
    </nav>
  );
}

export default Nav;
