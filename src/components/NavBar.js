import React from 'react'
import {
    NavLink,
} from "react-router-dom";
import Logo from "../../src/PT.jpg";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-light">
            <div className="container-fluid">
                <h2>
                    <NavLink to="/">
                    <img src={Logo} width="30" height="30" className="d-inline-block" alt=""/>
                         Productivity Tools
                    </NavLink>
                </h2>
            </div>
        </nav>
    )
}
