import React, { useState, useEffect } from 'react'
import { MapPin, Calendar } from 'react-feather'
import moment from 'moment'

import Button from '../Button/Button'
import EventPara from './EventPara'

import { formatNumber, visitWebsiteHandler } from '../../utils/Utils'

const EventCard = ({ event, index }) => {

    const [ticket, setTicket] = useState({})

    useEffect(() => {
        const ticketOffer = event.offers.find(offer => offer.type === 'Tickets')
        if (ticketOffer !== undefined) setTicket(ticketOffer)
    }, [])

    return (
        <div className='eventcard__container'>
            <h2 className='heading-secondary eventcard-header'>Event #{formatNumber(index + 1)}</h2>
            <div className='eventcard__content'>
                <div>
                    <EventPara Icon={MapPin} text={event?.venue?.name} />
                    <EventPara Icon={Calendar} text={moment(event?.datetime).format('MMMM Do YYYY')} />
                </div>
                <div className='eventcard__subcontent'>
                    <hr className='event_hrline eventcard_hrline' />
                    <div className='eventcard__paradiv'>
                        <EventPara text={event?.venue?.country} />
                        <EventPara text={event?.venue?.location} />
                    </div>
                </div>
            </div>
            {Object.keys(ticket).length !== 0 && <>
                <div className='eventcard__btn'>
                    <Button onClick={() => visitWebsiteHandler(ticket.url)} className='event' text='Get Ticket' />
                </div>
            </>}
        </div>
    )
}

export default EventCard