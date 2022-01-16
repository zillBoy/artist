import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import NoArtist from '../components/Artist/NoArtist'
import Navbar from '../components/Navbar/Navbar'
import NoArtistImage from '../assets/images/music2.png'
import EventArtist from '../components/Event/EventArtist'
import EventList from '../components/Event/EventList'
import { AUTH, BASE_URL } from '../utils/api/Api'

const Event = () => {

    const { artist } = useParams()
    const [artistInfo, setArtistInfo] = useState({})
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)

    const getEventData = (artist) => {
        fetch(`${BASE_URL}/artists/${artist}/events/?${AUTH}`)
        .then(response => response.json())
        .then(result => {
            if (result.length !== 0) {
                setEvents(result)
                console.log('result[0]?.artist: ', result[0]?.artist)
                setArtistInfo(result[0]?.artist)
            }
            
        })
        .catch(err => console.log('event error: ', err.message))
        .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (artist !== undefined) {
            getEventData('Maroon5')
        }
    }, [])

    return (
        <>
            <Navbar />
            {artist === undefined ? <NoArtist 
                image={NoArtistImage}
                header='Select an artist to see events'
                para='Attend all the amazing events'
            /> : loading ? <p>Loading</p> : <>
                <div className='event__container'>
                    <EventArtist artist={artistInfo} />
                    <hr className='event_hrline' />
                    <EventList events={events} />
                </div>
            </>}
            
        </>
    )
}

export default Event
