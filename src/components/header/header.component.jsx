import React from 'react';
import { Link } from 'react-router-dom';


import './header.styles.scss';

const Header =() =>(
    <div className="header">
        <span className="nameIcon">Ramu_Akarapu</span>
    
        <div className ="menu-item">
            <Link className= "option" to='/'>
                About
            </Link>
            
            <Link className= "option" to='/projects'>
                Projects
            </Link> 
            <Link className= "option" to='/contact'>
                Contact
            </Link>
            

        </div>
    </div>

);

export default Header;