import React from 'react'

const Button = ({ className, onClick = () => {}, text = ''  }) => {
    return (
        <div className={`btn__container btn__container--${className}`}>
            <button className={`btn btn--${className}`} onClick={onClick}>{text}</button>
        </div>
    )
}

export default Button