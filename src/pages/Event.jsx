import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NoArtist from '../components/Artist/NoArtist'
import Navbar from '../components/Navbar/Navbar'
import NoArtistImage from '../assets/images/music2.png'
import EventArtist from '../components/Event/EventArtist'
import EventList from '../components/Event/EventList'
import { AUTH, BASE_URL } from '../utils/api/Api'
import Spinner from '../components/Spinner/Spinner'

const Event = () => {

    const { artist } = useParams()
    const [artistInfo, setArtistInfo] = useState({})
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')

    const getEventData = (artist) => {
        fetch(`${BASE_URL}/artists/${artist}/events/?${AUTH}`)
        .then(response => response.json())
        .then(result => {
            if (result.length !== 0) {
                setEvents(result)
                setArtistInfo(result[0]?.artist)
            } else {
                let artist = {name: "Ariana Grande", image_url: "https://photos.bandsintown.com/large/11015251.jpeg"}
                setArtistInfo(artist)
                setMessage(`No events`)
            }
            
        })
        .catch(err => console.log('event error: ', err.message))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (artist !== undefined) {
            getEventData(artist)
        }
    }, [])

    return (
        <>
            <Navbar />
            {artist === undefined ? <NoArtist 
                image={NoArtistImage}
                header='Select an artist to see events'
                para='Attend all the amazing events'
            /> : loading ? <Spinner /> : <>
                <div className='event__container'>
                    <EventArtist artist={artistInfo} />
                    <hr className='event_hrline' />
                    {message.length !== 0 ? <p>No events</p> : <EventList events={events} />}
                </div>
            </>}
            
        </>
    )
}

export default Event
