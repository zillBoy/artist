import React, { useState, useEffect } from 'react'
import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'

const ArtistCard = ({ artist }) => {
    
    const [image, setImage] = useState(AritstPlaceholderImage)

    useEffect(() => {
        setImage(artist?.image_url)
    }, [])
    
    return (
        <div className='artistcard__container'>
            <div className='artistcard-imagediv'>
                <img className='artistcard-image' src={image} alt='artist' />
            </div>
            <div className='artistcard-content'>
                <h4 className='heading-quaternary'>{artist.name}</h4>
                <p className='paragraph-tertiary'>Aritst</p>
            </div>
        </div>
    )
}

export default ArtistCard
