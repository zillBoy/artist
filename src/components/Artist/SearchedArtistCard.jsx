import React, { useState, useEffect } from 'react'
import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'
import Badge from '../Badge/Badge'

const SearchedArtistCard = ({ artist }) => {

    const [image, setImage] = useState(AritstPlaceholderImage)

    useEffect(() => {
        setImage(artist.image_url)
    }, [])

    return (
        <div className='searchedartistcard__container'>
            <img className='searchedartistcard-image' src={image} alt='artist' />
            <section className='searchedartistcard-content'>
                <h3 className='heading-tertiary'>{artist.name}</h3>
                <Badge />
            </section>
        </div>
    )
}

export default SearchedArtistCard
