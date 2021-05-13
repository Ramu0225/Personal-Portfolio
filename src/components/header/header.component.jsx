import React from 'react';
import { Link } from 'react-router-dom';
import '../custom-buton/custom-button.styles.scss';

import './header.styles.scss';

const Header =() =>(
    <div className="header">
        <span className="nameIcon">RA</span>
        <div className ="menu-item">
            <Link className= "option" to='/'>Profile</Link>
            <Link className= "option" to='/projects'>Projects</Link> 
            <Link className= "option" to='/contact'>Contact</Link>
        </div>
        
            <a href="../../CV_Ramu.pdf" download="ramu_akarapu_cv" className="download-button custom-button">Download CV<i className="fa fa-file-pdf-o"></i></a>
      
    </div>

);

export default Header;