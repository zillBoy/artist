import React from 'react'

const EventPara = ({ Icon, text }) => {
    return (
        <div className='eventpara__container'>
            {Icon && <Icon />}
            <p className='eventpara__para'>{text}</p>
        </div>
    )
}

export default EventPara
