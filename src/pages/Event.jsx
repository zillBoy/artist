import React from 'react'
import { useParams } from 'react-router-dom'
import NoArtist from '../components/Artist/NoArtist'
import Navbar from '../components/Navbar/Navbar'
import NoArtistImage from '../assets/images/music2.png'
import EventArtist from '../components/Event/EventArtist'

const Event = () => {

    const { artist } = useParams()

    return (
        <>
            <Navbar />
            {artist === undefined ? <NoArtist 
                image={NoArtistImage}
                header='Select an artist to see events'
                para='Attend all the amazing events'
            /> : <div className='event__container'>
                <EventArtist />
            </div>}
            
        </>
    )
}

export default Event
