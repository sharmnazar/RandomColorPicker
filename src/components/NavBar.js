import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/nav.scss"

const NavBar = () => {
  return (
    <nav className="nav">
        <Link to='/'><h1 className="nav__logo">RCP</h1></Link>
        <ul className="nav__links">
            <Link to='/'><li className="nav__links-link">
                Random Color Picker
            </li></Link>
            <Link to='/palette'><li className="nav__links-link">
                Random Color Palette
            </li></Link>
        </ul>
    </nav>
  )
}

export default NavBar