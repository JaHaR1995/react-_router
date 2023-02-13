import React from "react";
import { NavLink } from "react-router-dom";

function Header () {
    return(
        < header>
        <h1>Cover</h1>
        <div className="Href">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/feature">Features</NavLink>  
        <NavLink to="/contact">Contact</NavLink>  
        </div>
        </header>
    )                     
}

export default Header  