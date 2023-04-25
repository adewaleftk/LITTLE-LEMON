import React from 'react'
import Logo from "./icons_assets/Logo.svg"

function Nav() {
  return (
    <div>
        <img src={Logo} alt='logo'/>
        <ul>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='./'>Menu</a>
            </li>
            <li>
                <a href='/'>Reservations</a>
            </li>
            <li>
            <a href='/'>Order Online</a>
            </li>
            <li>
                <a href='/'>Login</a>
            </li>
        </ul>
    </div>
  )
}

export default Nav