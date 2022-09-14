import React from "react";
import logo from "../assets/img/gb-logo.jpg";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => (
    <div className="container">
        <ul className="nav d-flex align-items-center">
            <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" 
                to='/'><img src={logo} width="48" alt="logo" /></NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to='/'>Inicio</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to='/'>Contacto</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to='/category/:id%20bidon'>Bidones</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link link_header" to='/category/:id%20sifon'>Sifones</NavLink>
            </li>
            <button type="button" className="btn btn-outline-secondary">
            <CartWidget /></button>
        </ul>
    </div>

)

export default NavBar;