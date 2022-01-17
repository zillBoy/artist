import React from 'react'
import { Twitter, Facebook, Globe, Instagram, Youtube, Disc } from 'react-feather'
import { ReactComponent as Spotify } from '../../assets/images/spotify.svg'

const SocialMedia = ({ link, onClick }) => {
    return (
        <>
            { 
                link.type === 'twitter' ? <Twitter onClick={onClick} className=' eventartist__socialmedia--icon' /> : 
                link.type === 'facebook' ? <Facebook onClick={onClick} className=' eventartist__socialmedia--icon' /> :
                link.type === 'website' ? <Globe onClick={onClick} className='eventartist__socialmedia--icon' /> :
                link.type === 'instagram' ? <Instagram onClick={onClick} className='eventartist__socialmedia--icon' /> : 
                link.type === 'youtube' ? <Youtube onClick={onClick} className='eventartist__socialmedia--icon' /> : 
                link.type === 'spotify' ? <Spotify onClick={onClick} className='eventartist__socialmedia--icon' /> : 
                <Disc onClick={onClick} className='eventartist__socialmedia--icon' />
            }
        </>
    )
}


export default SocialMedia
