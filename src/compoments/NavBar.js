import React from "react";
import { Link, NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            {/* // Ask about font-weight: bold; */}
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
              to="/discover"
            >
              Users
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
