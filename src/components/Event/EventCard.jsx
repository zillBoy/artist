import React from 'react'
import { MapPin, Calendar } from 'react-feather'
import Button from '../Button/Button'
import EventPara from './EventPara'

const EventCard = () => {
    return (
        <div className='eventcard__container'>
            <h2 className='heading-secondary eventcard-header'>Event #01</h2>
            <div className='eventcard__content'>
                <div>
                    <EventPara Icon={MapPin} text='Bislett Stadion' />
                    <EventPara Icon={Calendar} text='01 Oct, 2022' />
                </div>
                <div className='eventcard__subcontent'>
                    <hr className='event_hrline eventcard_hrline' />
                    <div className='eventcard__paradiv'>
                        <EventPara text='AMEX PGA 2022' />
                        <EventPara text='La Quinta, CA' />
                    </div>
                </div>
            </div>
            <div className='eventcard__btn'>
                <Button className='event' text='Get Ticket' />
            </div>
        </div>
    )
}

export default EventCard