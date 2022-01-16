import React from 'react'

const NoArtist = ({ image, header, para }) => {
    return (
        <main className='noartist__container'>
            <img className='noartist__container-image' src={image} alt='no artist' />
            <article className='noartist_content'>
                <h2 className='heading-secondary'>{header}</h2>
                <p className='paragraph'>{para}</p>
            </article>
        </main>
    )
}

export default NoArtist
