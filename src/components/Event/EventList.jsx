import React from 'react'
import EventCard from './EventCard'

const EventList = () => {
    return (
        <div className='eventlist__container'>
            <EventCard />
            <EventCard />
            <EventCard />
        </div>
    )
}

export default EventList
