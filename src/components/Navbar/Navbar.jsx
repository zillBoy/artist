import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'react-feather'

import { ReactComponent as Logo } from '../../assets/images/logo.svg'
import { ThemeContext } from '../../context/ThemeContext'

const Navbar = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    
    const toggleThemeHandler = () => {
        // The UI Design is not completed, so can't work on this feature.
        // setTheme(theme === 'default' ? 'dark' : 'default')
    }

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
                    <li onClick={toggleThemeHandler} className='navbar__item'>
                        {theme === 'default' 
                        ? <Moon fill='#000' />
                        : <Sun fill='#fff' stroke='#fff' />}
                    </li>
                </ul>
            </li>
        </ul>
    )
}

export default Navbar
