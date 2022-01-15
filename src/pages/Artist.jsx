import React, { useState, useEffect } from 'react'

import Navbar from '../components/Navbar/Navbar'
import Input from '../components/Input/Input'
import NoArtist from '../components/Artist/NoArtist'
import SearchedArtist from '../components/Artist/SearchedArtist'

const Artist = () => {

    const [artist, setArtist] = useState({})

    useEffect(() => {
        let artist = {
            "thumb_url": "https://photos.bandsintown.com/thumb/8479721.jpeg",
            "mbid": "0ab49580-c84f-44d4-875f-d83760ea2cfe",
            "facebook_page_url": "http://www.facebook.com/5330548481",
            "image_url": "https://photos.bandsintown.com/large/8479721.jpeg",
            "tracker_count": 6085169,
            "tracking": [],
            "upcoming_event_count": 11,
            "url": "https://www.bandsintown.com/a/510?came_from=267&app_id=abc",
            "support_url": "",
            "name": "Maroon 5",
            "options": {
                "display_listen_unit": false
            },
            "links": [{
                    "type": "twitter",
                    "url": "http://twitter.com/maroon5"
                },
                {
                    "type": "website",
                    "url": "http://www.maroon5.com"
                },
                {
                    "type": "facebook",
                    "url": "https://www.facebook.com/maroon5/"
                }
            ],
            "id": "510"
        }
        setArtist(artist)
    }, [])

    return (
        <>
            <Navbar />
            <Input />
            {Object.keys(artist).length !== 0 ? <SearchedArtist artist={artist} /> : <NoArtist />}
        </>
    )
}

export default Artist
