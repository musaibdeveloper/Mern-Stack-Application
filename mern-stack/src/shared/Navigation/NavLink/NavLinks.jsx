import React from "react";
import { NavLink } from "react-router-dom";
import "./NavLink.css";

export default function NavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/user" exact>
          All Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/:userID/userplaces">My Places</NavLink>
      </li>
      <li>
        <NavLink to="/places/new">Add Places</NavLink>
      </li>
      <li>
        <NavLink to="/auth"> Authenticate</NavLink>
      </li>
    </ul>
  );
}
