import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ReactComponent as Sun } from '../../assets/images/sun.svg'
import { ReactComponent as Moon } from '../../assets/images/moon.svg'

const Navbar = () => {
    
    return (
        <ul className='navbar__container'>
            <li className='navbar__item'>
                <Link to='/'>
                    <Logo className='navbar__item-logo' />
                </Link>
            </li>
            <li className='navbar__item'>
                <ul className='navbar__item-page'>
                    <Link to='/artist' className='navbar__item navbar-link'>Artist</Link>
                    <Link to='/event' className='navbar__item navbar-link'>Events</Link>
                    <li className='navbar__item'>
                        <Moon />
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Navbar
