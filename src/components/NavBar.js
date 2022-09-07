import React from 'react'
import {
    Link,
} from "react-router-dom";
import Logo from "../../src/PT.jpg";

export const NavBar = () => {
    return (
        <nav className="navbar justify-content-center">
            <img src={Logo} width="30" height="30" className="d-inline-block" alt="" />
            <h2>
                <Link to="/" className='app-name' style={{ textDecoration: 'none' }}>
                    Productivity Tools
                </Link>
            </h2>
        </nav>
    )
}
