import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="home-nav">
      <NavLink to="/resume" className="nav-link border-right">resume</NavLink>
      <NavLink to="/music" className="nav-link border-right">music</NavLink>
      <NavLink to="/journal" className="nav-link border-right">journal</NavLink>
      <NavLink to="/connect" className="nav-link">connect</NavLink>
    </nav>
  );
};

export default Nav;
