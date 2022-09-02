import React from 'react'
import {
    NavLink,
} from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <h2>
                    <NavLink to="/">
                        Productivity Apps
                    </NavLink>
                </h2>
            </div>
        </nav>
    )
}
