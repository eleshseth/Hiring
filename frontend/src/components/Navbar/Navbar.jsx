import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>Hiring</div>
      <div className='navlinks'>
        <div>Home</div>
        <div>Menu</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Blogs</div>
      </div>
      <div className='profile'>Profile</div>
    </div>
  );
}

export default Navbar