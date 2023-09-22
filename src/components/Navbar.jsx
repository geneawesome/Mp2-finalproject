import React, { useState} from 'react'

import { NavLink } from 'react-router-dom';

import "./Navbar.css"
 const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <NavLink to = "/" className='title'>Logo</NavLink>
            <div className="menu" onClick={() => {setMenuOpen (!menuOpen)} }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ?"open" : ""}>
            {/* <li>
                 <Link to="/home">Home</Link>   
                </li> */}
                <li>
                <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                <NavLink to="/services">Services</NavLink>
                </li>
                <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
    
};
export default Navbar;