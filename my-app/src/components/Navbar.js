import React from 'react'
import {Link} from 'react-router-dom'
import portrait from '../images/Profile.jpg';

const Navbar = () => {
    return (
        <div className="nav-bar">

            <h1>Derek Vangstad</h1>
            <img src={portrait} alt="Avatar"></img>

            <ul>
                <Link to="/">About Me</Link>
                <Link to="/portfolio">My Work</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/resume">Resume</Link>
            </ul>



        </div>
    )
}

export default Navbar
