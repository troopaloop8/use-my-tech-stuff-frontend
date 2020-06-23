import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import './App.css';

//work on this nav bar...
const NavBar = () => {
    const NavBarLinks = styled.div`
        max-width: 100%;
        display: flex;
        justify-content: flex-end
    `;
    return(
        <div className='navigation'>
            <NavBarLinks>
                    <NavLink className = 'Link' to='/'>Home</NavLink>
                    <Link className = 'Link' to='/sign-in'>Sign In</Link>
                    <NavLink className = 'Link' to='/renter-form'>Create a Listing</NavLink>
            </NavBarLinks>
        </div>
    )
}

export default NavBar;

