import React from 'react'
import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'
import Badge from '../Badge/Badge'

const SearchedArtistCard = () => {
    return (
        <div className='searchedartistcard__container'>
            <img className='searchedartistcard-image' src={AritstPlaceholderImage} alt='artist' />
            <section className='searchedartistcard-content'>
                <h3 className='heading-tertiary'>Maroon 5</h3>
                <Badge />
            </section>
        </div>
    )
}

export default SearchedArtistCard
