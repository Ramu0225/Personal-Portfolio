import React from 'react';
import { Link } from 'react-router-dom';
import '../custom-buton/custom-button.styles.scss';
import Pdf from '../../CV_Ramu.pdf';
import './header.styles.scss';

const Header =() =>(
    <div className="header">
        <Link className="nameIcon" to='/'>RA</Link>
        <div className ="menu-item">
            <Link className= "option" to='/'>Profile</Link>
            <Link className= "option" to='/projects'>Projects</Link> 
            <Link className= "option" to='/contact'>Contact</Link>
        </div>
        <a href={Pdf} download="ramu.akarapu.cv.pdf" className="download-button custom-button">Download CV<i className="fa fa-file-pdf-o"></i></a>
        <button className="menu-bar"><i className="fa fa-bars"></i></button>
    </div>

);

export default Header;