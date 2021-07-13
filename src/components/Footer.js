import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer(){
    return (
        <footer>
            <p>&copy;2021 Todd Albert</p>
            <h3>Links</h3>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/sell">Sell</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </footer>
    )
}

export default Footer