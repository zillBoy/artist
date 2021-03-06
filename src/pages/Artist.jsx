import React, { useState, useEffect, useContext } from 'react'
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
import { ThemeContext } from '../context/ThemeContext'

const Artist = () => {

    const { theme } = useContext(ThemeContext)

    const { name } = useParams()
    const [artist, setArtist] = useState({})
    const [artists, setArtists] = useState([])
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [artistName, setArtistName] = useState('')

    const onArtistNameChangeHandler = (name) => {
        setArtistName(name)
    }

    const resetArtistData = (name) => {
        setArtist({})
        setLoading(false)
        setMessage('')
    }

    useEffect(() => {
        if (name !== undefined) {
            getArtistData(name, setArtist, setMessage, setLoading)
        }
        const artists = localStorage.getItem('artists')
        if (artists !== null) {
            setArtists(JSON.parse(artists))
        }
    }, [])

    useEffect(() => {
        if (artistName.length !== 0) {
            const debounce = setTimeout(() => {
                getArtistData(artistName, setArtist, setMessage, setLoading)
            }, 500)
    
            return () => clearInterval(debounce)
        } else {
            resetArtistData()
        }
    }, [artistName])

    return (
        <div className={`artist__container--${theme} theme--${theme}`}>
            <Navbar page='artist' />
            <Input
                onEnterPress={(name) => getArtistData(name, setArtist, setMessage, setLoading)}
                onChangeHandler={onArtistNameChangeHandler}
                onClearHandler={resetArtistData}
                page='artist'
                placeholder='Search artist'
            />
            {loading ? <Spinner /> 
            : Object.keys(artist).length !== 0 
            ? <SearchedArtist artist={artist} />
            : message.length !== 0 ? <NotFound image={ArtistNotFoundImage} para={message} />
            : artists.length !== 0 ? <RecentSearchedArtist artists={artists} setArtists={setArtists} />
            : <NoArtist
                image={NoArtistImage}
                header='Search your favorite artist'
                para='Never miss another show'
            /> 
            }
        </div>
    )
}

export default Artist
