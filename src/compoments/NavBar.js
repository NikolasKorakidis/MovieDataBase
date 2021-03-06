import React from "react";
import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              exact={true}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              exact={true}
              activeStyle={{
                fontWeight: "bold",
                color: "red",
              }}
              to="/discover/"
            >
              Discover
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
