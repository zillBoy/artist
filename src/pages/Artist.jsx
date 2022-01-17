import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArtistData } from '../utils/api/APIUtils'

import Navbar from '../components/Navbar/Navbar'
import Input from '../components/Input/Input'
import NoArtist from '../components/Artist/NoArtist'
import SearchedArtist from '../components/Artist/SearchedArtist'
import RecentSearchedArtist from '../components/Artist/RecentSearchedArtist'
import Spinner from '../components/Spinner/Spinner'
import NoArtistImage from '../assets/images/music1.png'
import NotFound from '../components/Artist/NotFound'

import ArtistNotFoundImage from '../assets/images/artistnotfound.png'

const Artist = () => {

    const { name } = useParams()
    const [artist, setArtist] = useState({})
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    const resetArtistData = () => {
        setArtist({})
        setLoading(false)
        setMessage('')
    }

    useEffect(() => {
        if (name !== undefined) {
            getArtistData(name, setArtist, setMessage, setLoading)
        }
    }, [])

    return (
        <>
            <Navbar />
            <Input
                onEnterPress={(name) => getArtistData(name, setArtist, setMessage, setLoading)}
                onChangeHandler={resetArtistData}
                page='artist'
                placeholder='Search artist'
            />
            {loading ? <Spinner /> 
            : Object.keys(artist).length !== 0 
            ? <SearchedArtist artist={artist} />
            : message.length !== 0 ? <NotFound image={ArtistNotFoundImage} para={message} />
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
