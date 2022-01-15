import React from 'react'
import SearchedArtistCard from './SearchedArtistCard'

const SearchedArtist = ({ artist }) => {
    return (
        <div className='searchedartist__container'>
            <h2 className='heading-secondary'>Top Results</h2>
            <br />
            <SearchedArtistCard artist={artist} />
        </div>
    )
}

export default SearchedArtist
