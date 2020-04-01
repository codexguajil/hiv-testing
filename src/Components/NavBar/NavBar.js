import React from "react";
import { Route, NavLink } from "react-router-dom";
import About from '../About/About';

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/About" className="nav">
        About
      </NavLink>
      <Route path="/About" component={About} />
    </div>
  );
}

export default NavBar;
