import React from 'react'
import { Twitter, Facebook, Globe, Instagram, Youtube } from 'react-feather'

import AritstPlaceholderImage from '../../assets/images/artistplaceholder.jpg'

const EventArtist = () => {
    return (
        <div className='eventartist__container'>
            <div className='eventartist__imagediv'>
                <img className='eventartist__imagediv-img' src={AritstPlaceholderImage} alt='artist' />
            </div>
            <div className='eventartist__content'>
                <div>
                    <h1 className='heading-primary'>Maroon 5</h1>
                    <p className='paragraph-primary artistevent-para'>15 Upcoming Events</p>
                </div>
                <div className='eventartist__socialmedia'>
                    <Twitter className='eventartist__socialmedia--iconreset eventartist__socialmedia--icon' />
                    <Facebook className='eventartist__socialmedia--iconreset eventartist__socialmedia--icon' />
                    <Globe className='eventartist__socialmedia--icon' />
                    <Instagram className='eventartist__socialmedia--icon' />
                    <Youtube className='eventartist__socialmedia--icon' />
                </div>
            </div>
        </div>
    )
}

export default EventArtist
