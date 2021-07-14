import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'

function Navbar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/sell">Sell</NavLink>
            <NavLink to="/login">Login</NavLink>
        </nav>
    )
}

export default Navbar