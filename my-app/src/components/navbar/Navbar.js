import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = props => (
    <nav className="navbar">
      <Link className="nabar-brand" to="/">ClickGame</Link>
        <div>
            <ul>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    </nav>
)