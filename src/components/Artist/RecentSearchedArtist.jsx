import React from 'react'
import ArtistList from './ArtistList'

const RecentSearchedArtist = ({ artists, setArtists }) => {
    return (
        <div className='recentartist__container'>
            <h2 className='heading-secondary'>Recent searches</h2>
            <br />
            <ArtistList artists={artists} setArtists={setArtists} />
        </div>
    )
}

export default RecentSearchedArtist
