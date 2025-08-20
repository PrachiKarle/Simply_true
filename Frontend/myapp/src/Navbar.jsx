import React from "react";
import './App.css';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="navbar navbar-expand-lg px-5 py-2" id="nav1" >
            <a href="#" className="navbar-brand">
                <img src="logo.png" width="100" height="70" alt="" />
            </a>

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target='nav'>
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse" id="nav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <NavLink to='/' className="nav-link">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/about' className="nav-link">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/product' className="nav-link">Products</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/blog' className="nav-link">Blog</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/community' className="nav-link">Community</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/contact' className="nav-link">Contact</NavLink>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar;