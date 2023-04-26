import React from 'react'
import Logo from "../icons_assets/Logo.svg"
import "../styles/nav.css"

function Nav() {
  return (
    <nav>
        <img src={Logo} alt='logo'/>
        <div className="nav-links">
            <ul>
                <li>
                    <a href='/'>HOME</a>
                </li>
                <li>
                    <a href='/'>ABOUT</a>
                </li>
                <li>
                    <a href='./'>MENU</a>
                </li>
                <li>
                    <a href='/'>RESERVATIONS</a>
                </li>
                <li>
                <a href='/'>ORDER ONLINE</a>
                </li>
                <li>
                    <a href='/'>LOGIN</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav