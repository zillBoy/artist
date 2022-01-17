import React from 'react'
import ArtistList from './ArtistList'

const RecentSearchedArtist = ({ artists }) => {
    return (
        <div className='recentartist__container'>
            <h2 className='heading-secondary'>Recent searches</h2>
            <br />
            <ArtistList artists={artists} />
        </div>
    )
}

export default RecentSearchedArtist
