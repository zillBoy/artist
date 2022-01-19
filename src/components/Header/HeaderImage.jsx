import React from 'react'
import ProductLandingPage from '../../assets/images/productlandingpage.png'
import CircleText from '../CircleText/CircleText'

const HeaderImage = () => {
    return (
        <>
            <CircleText />
            <div className='header__imagediv'>
                <img className='header__imagediv-image' src={ProductLandingPage} alt='product landing page' />
            </div>
        </>
    )
}

export default HeaderImage
