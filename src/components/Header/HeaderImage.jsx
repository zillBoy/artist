import React from 'react'
import ProductLandingPage from '../../assets/images/productlandingpage.png'

const HeaderImage = () => {
    return (
        <div className='header__imagediv'>
            <img className='header__imagediv-image' src={ProductLandingPage} alt='product landing page' />
        </div>
    )
}

export default HeaderImage
