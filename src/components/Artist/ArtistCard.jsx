import React from 'react'
import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'

const ArtistCard = ({ artist }) => {
    return (
        <div className='artistcard__container'>
            <div className='artistcard-imagediv'>
                <img className='artistcard-image' src={AritstPlaceholderImage} alt='artist' />
            </div>
            <div className='artistcard-content'>
                <h4 className='heading-quaternary'>{artist.name}</h4>
                <p className='paragraph-tertiary'>Aritst</p>
            </div>
        </div>
    )
}

export default ArtistCard
