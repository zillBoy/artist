import React, { useContext } from 'react'
import Header from '../components/Header/Header'
import HeaderEvents from '../components/Header/HeaderEvents'
import Navbar from '../components/Navbar/Navbar'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {

    const { theme } = useContext(ThemeContext)

    return (
        <div className={`home__container--${theme} theme--${theme}`}>
            <Navbar />
            <Header />
            <HeaderEvents />
        </div>
    )
}

export default Home
