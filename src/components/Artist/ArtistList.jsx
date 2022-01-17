import React from 'react'
import ArtistCard from './ArtistCard'

const ArtistList = ({ artists, setArtists }) => {
    return (
        <div className='artistlist__container'>
            {artists.map((artist, index) => <ArtistCard key={index} artist={artist} setArtists={setArtists} />)}
        </div>
    )
}

export default ArtistList
