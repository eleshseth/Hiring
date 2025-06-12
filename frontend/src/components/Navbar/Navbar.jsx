import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>ALTISLINK</div>
      <div className='navlinks'>
        <div>Home</div>
        <div>Menu</div>
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Blogs</div>
      </div>
      <div className='profile'><button className='signupbutton'>signup</button></div>
    </div>
  );
}

export default Navbar