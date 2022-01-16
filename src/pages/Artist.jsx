import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL, AUTH } from '../utils/api/Api'

import Navbar from '../components/Navbar/Navbar'
import Input from '../components/Input/Input'
import NoArtist from '../components/Artist/NoArtist'
import SearchedArtist from '../components/Artist/SearchedArtist'
import RecentSearchedArtist from '../components/Artist/RecentSearchedArtist'
import Spinner from '../components/Spinner/Spinner'
import NoArtistImage from '../assets/images/music1.png'

const Artist = () => {

    const { name } = useParams()
    const [artist, setArtist] = useState({})
    const [loading, setLoading] = useState(false)

    const resetArtistData = () => {
        setArtist({})
        setLoading(false)
    }

    const getArtistData = (name) => {
        setLoading(true)

        fetch(`${BASE_URL}/artists/${name}/?${AUTH}`)
        .then(response => response.json())
        .then(result => setArtist(result))
        .catch(err => console.log('get artist error: ', err.message))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (name !== undefined) {
            getArtistData(name)
        }
    }, [])

    return (
        <>
            <Navbar />
            <Input
                onEnterPress={getArtistData} 
                onChangeHandler={resetArtistData}
            />
            {loading ? <Spinner /> 
            : Object.keys(artist).length !== 0 
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
