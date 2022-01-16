import React from 'react'
import EventCard from './EventCard'

const EventList = ({ events }) => {
    return (
        <div className='eventlist__container'>
            {events.map((event, index) => <EventCard key={event.id} event={event} index={index} />)}
        </div>
    )
}

export default EventList
