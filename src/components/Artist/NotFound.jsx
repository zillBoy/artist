import React from 'react'

const NotFound = ({ image, para='' }) => {
    return (
        <div className='artistnotfound__container'>
            <img 
                title='Illustration by Rosina Gavrilash from Ouch!'
                className='artistnotfound__image' 
                src={image} 
                alt='artist not found' 
            />
            <p className='paragraph-tertiary artistnotfound__paragraph'>{para}</p>
        </div>
    )
}

export default NotFound
