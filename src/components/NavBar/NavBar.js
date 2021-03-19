import React from 'react'
import {NavLink } from "react-router-dom";
import { FcHome , FcDoughnutChart, FcViewDetails } from "react-icons/fc";
import './NavBar.css'
const NavBar = ({icon_size=32}) => {



    return (
        <div>
             <nav className="Navbar-main">
              <NavLink  to="/" exact ><FcHome size={icon_size} /></NavLink >
              <NavLink  to="/charts" ><FcDoughnutChart size={icon_size} /></NavLink >
              <NavLink  to="/detalis" ><FcViewDetails size={icon_size} /></NavLink >
            </nav>

        </div>
    )
}

export default NavBar
