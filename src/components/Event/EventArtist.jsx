import React, { useState, useEffect } from 'react'

import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'
import { filterHandler } from '../../utils/Utils'
import Input from '../Input/Input'
import SocialMediaList from '../SocialMedia/SocialMediaList'

const EventArtist = ({ artist, events, setFilteredEvents }) => {

    const [image, setImage] = useState(AritstPlaceholderImage)

    useEffect(() => {
        if (artist?.image_url.length !== 0) setImage(artist?.image_url)
    }, [])

    const filterEventHandler = (value) => {

        // Filter based on properties - 'city', 'country', 'location', 'name' & 'region'.

        const filteredData = filterHandler(value, ['city', 'country', 'location', 'name', 'region'], events)
        if (value.length !== 0) setFilteredEvents(filteredData)
        else setFilteredEvents(events)
    }

    return (
        <div className='eventartist__container'>
            <div className='eventartist__profilecontainer'>
                <div className='eventartist__imagediv'>
                    <img className='eventartist__imagediv-img' src={image} alt='artist' />
                </div>
                <div className='eventartist__content'>
                    <div>
                        <h1 className='heading-primary'>{artist?.name}</h1>
                        <p className='paragraph-primary artistevent-para'>{artist?.upcoming_event_count} Upcoming Events</p>
                    </div>
                    <div className='eventartist__socialmedia'>
                        <SocialMediaList links={typeof(artist?.links) !== 'string' ? artist?.links : []} />
                    </div>
                </div>
            </div>
            <div className='eventartist__inputcontainer'>
                <Input placeholder='Filter event by name, city, etc...' onChangeHandler={filterEventHandler} />
            </div>
        </div>
    )
}

export default EventArtist
