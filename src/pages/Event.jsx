import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import NoArtist from '../components/Artist/NoArtist'
import Navbar from '../components/Navbar/Navbar'
import NoArtistImage from '../assets/images/music2.png'
import EventArtist from '../components/Event/EventArtist'
import EventList from '../components/Event/EventList'
import { AUTH, BASE_URL } from '../utils/api/Api'
import Spinner from '../components/Spinner/Spinner'
import NoEvent from '../components/Event/NoEvent'
import { getArtistData } from '../utils/api/APIUtils'
import NotFound from '../components/Artist/NotFound'

import ArtistNotFoundImage from '../assets/images/artistnotfound.png'
import { ThemeContext } from '../context/ThemeContext'

const Event = () => {

    const { theme } = useContext(ThemeContext)

    const { artist } = useParams()
    const [artistInfo, setArtistInfo] = useState({})
    const [events, setEvents] = useState([])
    const [filteredEvents, setFilteredEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')

    const getEventData = (artist) => {
        fetch(`${BASE_URL}/artists/${artist}/events/?${AUTH}`)
        .then(response => response.json())
        .then(result => {
            if (result.length !== 0) {

                if (!result.hasOwnProperty('errorMessage')) {
                    setEvents(result)
                    setFilteredEvents(result)
                    setArtistInfo(result[0]?.artist)
                } else {
                    setMessage(`Artist with name "${artist}" not found!`)
                }
                
                setLoading(false)

            } else {
                getArtistData(artist, setArtistInfo, setMessage, setLoading)
                setMessage(`No events`)
            }
        })
        .catch(err => console.log('event error: ', err.message))
        // .finally(() => setLoading(false))
    }

    useEffect(() => {
        if (artist !== undefined) {
            getEventData(artist)
        }
    }, [])

    return (
        <div className={`eventmain__container--${theme} theme--${theme}`}>
            <Navbar page='event' />
            {artist === undefined ? <NoArtist
                image={NoArtistImage}
                header='Select an artist to see events'
                para='Attend all the amazing events'
            /> : loading ? <Spinner /> : <>
                <div className='event__container'>
                    {Object.keys(artistInfo).length !== 0 ? <>
                        <EventArtist artist={artistInfo} events={events} setFilteredEvents={setFilteredEvents} />
                        <hr className='event_hrline' />
                        {message.length !== 0 ? <NoEvent para={message} /> : <EventList events={filteredEvents} />}
                    </> : <NotFound image={ArtistNotFoundImage} para={message} />}
                </div>
            </>}
        </div>
    )
}

export default Event
