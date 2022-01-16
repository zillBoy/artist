import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Input from '../components/Input/Input'
import NoArtist from '../components/Artist/NoArtist'
import SearchedArtist from '../components/Artist/SearchedArtist'
import RecentSearchedArtist from '../components/Artist/RecentSearchedArtist'
import NoArtistImage from '../assets/images/music1.png'

const Artist = () => {

    const [artist, setArtist] = useState({})

    return (
        <>
            <Navbar />
            <Input setArtist={setArtist} />
            {Object.keys(artist).length !== 0 
            ? <SearchedArtist artist={artist} />
            : <NoArtist 
                image={NoArtistImage}
                header='Search your favorite artist'
                para='Never miss another show'
            /> // <RecentSearchedArtist />
            }
        </>
    )
}

export default Artist
