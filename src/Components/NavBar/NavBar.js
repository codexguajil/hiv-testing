import React from "react";
import { Route, NavLink } from "react-router-dom";
import About from '../About/About';
import LogIn from '../../Containers/LogIn/LogIn';
import Appointment from '../../Containers/Appointment/Appointment';

function NavBar() {
  return (
    <div className="NavBar">
      <NavLink to="/About" className="nav">
        About
      </NavLink>
      <NavLink to="/MakeAnAppointment" className="nav">
        Make An Appointment
      </NavLink>
      <NavLink to="/LogIn" className="nav">
        LogIn
      </NavLink>
      <Route path="/About" component={About} />
      <Route path="/MakeAnAppointment" component={Appointment} />
      <Route path="/LogIn" component={LogIn} />
    </div>
  );
}

export default NavBar;