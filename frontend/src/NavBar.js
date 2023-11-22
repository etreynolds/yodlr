import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink exact to="/">Home</NavLink>
      <NavLink exact to="/signup">Register</NavLink>
      <NavLink exact to="/admin">Admin</NavLink>
    </div>
  )
}

export default NavBar;