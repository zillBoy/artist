import React, { useState, useEffect } from 'react'
import ArtistList from './ArtistList'

const RecentSearchedArtist = () => {

    const [artists, setArtists] = useState([])

    useEffect(() => {
        let artists = [
            { name: 'James Arthur' },
            { name: 'Famba' },
            { name: 'Katy Perry' },
            { name: 'Taylor Swift' },
            { name: 'Zayn' },
        ]
        setArtists(artists)
    }, [])

    return (
        <div className='recentartist__container'>
            <h2 className='heading-secondary'>Recent searches</h2>
            <br />
            <ArtistList artists={artists} />
        </div>
    )
}

export default RecentSearchedArtist
