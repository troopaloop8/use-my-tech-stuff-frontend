import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './App.css';

const NavBar = () => {

    return(
        <div className='Nav'>
            <NavLink className = 'Link' to='/product'>Home</NavLink>
            <Link className = 'Link' to='/'>Sign In</Link>
            <NavLink className = 'Link' to='/renter-form'>Create a Listing</NavLink>
        </div>
    )
}

export default NavBar;

