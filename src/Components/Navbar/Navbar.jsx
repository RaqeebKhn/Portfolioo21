import React, { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav.jsx';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  return (
    <>
    
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    
    
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src='./Images/icon1.svg' alt=''></img>
            <ul>
                <li>
                    <a href="/" className='menu-item'>Home</a>
                </li>
                <li>
                    <a href="/" className='menu-item'>Skills</a>
                </li>
                <li>
                    <a href="/" className='menu-item'>Work Experience</a>
                </li>
                <li>
                    <a href="/" className='menu-item'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={ ()=>{}}>
                    Hire me
                </button>
            </ul>

            <button className="menu-btn" onClick={toggleMenu}>
                <span 
                    class={"material-symbol-outlined"}
                    style={{fontsize:"1.8rem"}}
                >
                    {openMenu ? "x" : "="}
                </span>
            </button>
        </div>
    </nav>
    </>
  )  
}

export default Navbar
