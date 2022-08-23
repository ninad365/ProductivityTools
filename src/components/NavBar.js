import React from 'react'
import { 
    NavLink,
  } from "react-router-dom";

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <h2>
                Productivity Apps
            </h2>
            <ul className='navbar-nav'>

                <li className="nav-item">
                <NavLink to="/" className="nav-link">ExpenseTracker</NavLink>
                </li>
                <li className="nav-item">
                <NavLink to="/Calculator" className="nav-link">Calculator</NavLink>
                </li>
            </ul>
            </div>
        </nav>
    )
}
