import React from 'react'
import { visitWebsiteHandler } from '../../utils/Utils'
import SocialMedia from './SocialMedia'


const SocialMediaList = ({ links = [] }) => {
    return (
        <>
            {links.map((link, index) => <SocialMedia 
                key={index} 
                link={link} 
                onClick={() => visitWebsiteHandler(link.url)}
            />)}
        </>
    )
}

export default SocialMediaList
