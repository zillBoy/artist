import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'
import Badge from '../Badge/Badge'

const SearchedArtistCard = ({ artist }) => {

    const navigate = useNavigate()
    const [image, setImage] = useState(AritstPlaceholderImage)

    const viewArtistEvents = () => {

        let artists = localStorage.getItem('artists')
        if (artists === null) {
            localStorage.setItem('artists', JSON.stringify([{...artist}]))
        } else {

            let parsedArtists = JSON.parse(artists)
            let foundArtist = parsedArtists.find(_artist => _artist.id === artist.id)
            
            if (foundArtist === undefined) {
                parsedArtists.push(artist)
                localStorage.setItem('artists', JSON.stringify(parsedArtists))
            }
        }

        navigate(`/event/${artist.name}`)
    }

    useEffect(() => {
        setImage(artist.image_url)
    }, [])

    return (
        <div onClick={viewArtistEvents} className='searchedartistcard__container'>
            <img className='searchedartistcard-image' src={image} alt='artist' />
            <section className='searchedartistcard-content'>
                <h3 className='heading-tertiary'>{artist.name}</h3>
                <Badge para='ARTIST' />
            </section>
        </div>
    )
}

export default SearchedArtistCard
