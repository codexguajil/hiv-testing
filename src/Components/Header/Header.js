import React from "react";
import Search from "../../Containers/Search/Search";
import { Route, NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <Link to='/'>
        <h1>HIV Clinic</h1>
      </Link>
      <Search />
    </div>
  );
}

export default Header;
