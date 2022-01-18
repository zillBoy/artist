import React from 'react'
import HeaderArtistCard from './HeaderArtistCard'
import { artists } from '../../utils/Utils'
 
const HeaderEvents = () => {
    return (
        <div className='headerevents__container'>
            {artists.map((artist, index) => <HeaderArtistCard key={index} image={artist.image} name={artist.name} />)}
        </div>
    )
}

export default HeaderEvents
