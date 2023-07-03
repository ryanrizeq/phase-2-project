import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div className="navbar">
          <NavLink style={{ marginRight: "10px" }} to="/">
            Home
          </NavLink>
          <NavLink style={{ marginRight: "10px" }} to="/list">
            Cocktail Résumé
          </NavLink>
          <NavLink style={{ marginRight: "10px" }} to="/new">
            Add to Résumé
          </NavLink>
        </div>
        
    )
}

export default NavBar