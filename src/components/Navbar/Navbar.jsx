import React from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'react-feather'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'

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
                        <Moon fill='#000' />
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Navbar
