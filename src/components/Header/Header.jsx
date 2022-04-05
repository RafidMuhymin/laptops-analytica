import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header>
      <nav className="navbar d-flex p-4 justify-content-center gap-4">
        <NavLink to={"/"}>HOME</NavLink>
        <NavLink to={"/reviews"}>REVIEWS</NavLink>
        <NavLink to={"/dashboard"}>DASHBOARD</NavLink>
        <NavLink to={"/blog"}>BLOG</NavLink>
        <NavLink to={"/about"}>ABOUT</NavLink>
      </nav>
    </header>
  );
}
