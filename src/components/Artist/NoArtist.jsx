import React from 'react'
import NoArtistImage from '../../assets/images/music1.png'

const NoArtist = () => {
    return (
        <main className='noartist__container'>
            <img className='noartist__container-image' src={NoArtistImage} alt='no artist' />
            <article className='noartist_content'>
                <h2 className='heading-secondary'>Search your favorite artist</h2>
                <p className='paragraph'>Never miss another show</p>
            </article>
        </main>
    )
}

export default NoArtist
