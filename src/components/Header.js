import { Link, NavLink } from "react-router-dom";
import logo from "../assets/rp-refreshed-logo.jpg";

export default function Header() {
  return (
    <header className="container topbar">
      <Link to="/">
        <img
          className="logo"
          src={logo}
          alt="Republic Polytechnic logo"
          title="RP Course Enrolment Portal | Home"
        />
      </Link>

      <nav className="topnav">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Home
        </NavLink>

        <NavLink
          to="/diplomas"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Diplomas
        </NavLink>

        <NavLink
          to="/favourites"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Favourites
        </NavLink>

        <NavLink
          to="/faq"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          FAQ
        </NavLink>

        <NavLink
          to="/register"
          className={({ isActive }) => (isActive ? "nav-active" : "")}
        >
          Register
        </NavLink>
      </nav>
    </header>
  );
}
