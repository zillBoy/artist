import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button/Button'

const HeaderContent = () => {

    const navigate = useNavigate()

    return (
        <div className='header__content'>
            <div className='header__content-maindiv'>
                <div className='header__content-main'>
                    <h1 className='heading-primary header__content-main--heading'>Artist Events</h1>
                    <h1 className='heading-primary header__content-main--subheading'>Around The World</h1>
                </div>

                <p className='paragraph header__content-para'>
                    Browse a curated selection of artist events from around the world,
                    attend amazing events because the true beauty of music is that it 
                    connects people. It carries a message, and we, the musicians, 
                    are the messengers.
                </p>
            </div>
            <div className='header__content-button'>
                <Button className='header' onClick={() => navigate('/artist')} text='Search Now' />
            </div>
        </div>
    )
}

export default HeaderContent
