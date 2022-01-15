import React from 'react'
import ArtistCard from './ArtistCard'

const ArtistList = ({ artists }) => {
    return (
        <div className='artistlist__container'>
            {artists.map((artist, index) => <ArtistCard key={index} artist={artist} />)}
        </div>
    )
}

export default ArtistList
