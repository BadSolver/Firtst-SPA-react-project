import React from 'react'
import './navbar.scss'
import navbarLogo from '../assets/navbar_logo.png'

export const Navbar = () => {
  return (
    <div className='navbar__container'>
      <div className='navbar__logo'>
        <a href=""><img src={navbarLogo}  alt="logo"/></a>
      </div>
      <div className='navbar__links'>
        <ul className='navbar_link'>
          <a href="">Features</a>
        </ul>
        <ul className='navbar_link'>
          <a href="">Partners</a>
        </ul>
        <ul className='navbar_link'>
          <a href="">Stories</a>
        </ul>
      </div>
      <div className='navbar__dwn-btn'>
          <button className='navbar_btn'>Download for free</button>
        </div>
    </div>
  )
}
