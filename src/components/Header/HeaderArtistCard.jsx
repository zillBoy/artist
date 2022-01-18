import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderArtistCard = ({ image, name }) => {
    
    const navigate = useNavigate()

    const goToEvent = () => {
        navigate(`/event/${name}`)
    }
    
    return (
        <div onClick={goToEvent} className='headereventcard__container'>
            <div className='headereventcard-imagediv'>
                <img src={image} className='headereventcard-image' alt='header event artist' />
            </div>
            <h1 className='heading-primary headereventcard-heading'>{name}</h1>
        </div>
    )
}

export default HeaderArtistCard
