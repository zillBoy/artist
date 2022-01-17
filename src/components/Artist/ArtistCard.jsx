import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { XCircle } from 'react-feather'
import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'

const ArtistCard = ({ artist, setArtists }) => {
    
    const navigate = useNavigate()
    const [image, setImage] = useState(AritstPlaceholderImage)

    const removeArtistHandler = (event) => {
        event.stopPropagation()
        setArtists([])
        const artists = JSON.parse(localStorage.getItem('artists'))
        const filteredArtist = artists.filter(_artist => _artist.id !== artist.id)
        localStorage.setItem('artists', JSON.stringify(filteredArtist))
        setArtists(filteredArtist)
    }

    const viewArtistEvents = () => {
        navigate(`/event/${artist.name}`)
    }

    useEffect(() => {
        setImage(artist?.image_url)
    }, [])
    
    return (
        <div onClick={viewArtistEvents} className='artistcard__container'>
            <div className='artistcard-close'>
                <XCircle onClick={(event) => removeArtistHandler(event)} />
            </div>
            <div className='artistcard-imagediv'>
                <img className='artistcard-image' src={image} alt='artist' />
            </div>
            <div className='artistcard-content'>
                <h4 className='heading-quaternary'>{artist.name}</h4>
                <p className='paragraph-tertiary'>Aritst</p>
            </div>
        </div>
    )
}

export default ArtistCard
