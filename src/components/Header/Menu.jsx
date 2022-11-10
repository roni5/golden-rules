import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import "./Menu.css";

const Menu = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            className={location.pathname === "/" ? "selected" : ""}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/new"
            className={location.pathname === "/new" ? "selected" : ""}
          >
            New
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
