import React from 'react'
import ArtistNotFoundImage from '../../assets/images/artistnotfound.png'

const ArtistNotFound = ({ para='' }) => {
    return (
        <div className='artistnotfound__container'>
            <img 
                title='Illustration by Rosina Gavrilash from Ouch!'
                className='artistnotfound__image' 
                src={ArtistNotFoundImage} 
                alt='artist not found' 
            />
            <p className='paragraph-tertiary artistnotfound__paragraph'>{para}</p>
        </div>
    )
}

export default ArtistNotFound
