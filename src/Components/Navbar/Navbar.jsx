import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <img className='logo' src='./Images/icon1.svg' alt=''></img>
            <ul>
                <li>
                    <a className='menu-item'>Home</a>
                </li>
                <li>
                    <a className='menu-item'>Skills</a>
                </li>
                <li>
                    <a className='menu-item'>Work Experience</a>
                </li>
                <li>
                    <a className='menu-item'>Contact Me</a>
                </li>
                <button className='contact-btn' onClick={ ()=>{}}>
                    Hire me
                </button>
            </ul>

            <button class="menu-btn" onClick={() => {}}>
                <span 
                    class={"material-symbol-outlined"}
                    style={{fontsize:"1.8rem"}}
                >
                    = 
                </span>
            </button>
        </div>
    </nav>
  )
}

export default Navbar
