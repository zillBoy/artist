import React from 'react'
import HeaderArtistCard from './HeaderArtistCard'
import { artists } from '../../utils/Utils'
 
const HeaderEvents = () => {
    return (
        <div className='headerevents__container'>
            <div className='headerevents__container-main'>
                <h1 className='heading-primary headerevents__container-main--heading'>Top Events</h1>
                <div className='headerevents-textcontent'>
                    <h1 className='heading-event'>Artist</h1>
                    <h1 className='heading-event heading-event--subheading'>Events</h1>
                </div>
            </div>
            <div className='headerevents__container-artists'>
                {artists.map((artist, index) => <HeaderArtistCard key={index} image={artist.image} name={artist.name} />)}
            </div>
        </div>
    )
}

export default HeaderEvents
