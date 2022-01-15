import React, { useState, useEffect } from 'react'

// Icons
import { ReactComponent as Search } from '../../assets/images/search.svg'
import { ReactComponent as Cancel } from '../../assets/images/cancel.svg'

const Input = () => {
    
    const [search, setSearch] = useState('')
    const [artist, setArtist] = useState({})
    const [showCancel, setShowCancel] = useState(false)

    const changeHandler = event => setSearch(event.target.value)

    const clearInputHandler = () => setSearch('')

    const keyPressHandler = event => {
        if (event.key === 'Enter') {
            if (search.length !== 0) {
                getArtistData()
            }
        }
    }

    const getArtistData = () => {
        console.log('now the artist data comes: ', search)
    }

    useEffect(() => {
        if (search.length === 0) setShowCancel(false)
        else setShowCancel(true)
    }, [search])
    
    return (
        <div className='input__container'>
            <div className='input__icon'>
                <Search className='input__icon--search' />
            </div>
            <input className='input__container-input' type='text' value={search} onChange={changeHandler} onKeyPress={keyPressHandler} />
            {showCancel && <div className='input__icon'>
                <Cancel onClick={clearInputHandler} className='input__icon--cancel' />
            </div>}
        </div>
    )
}

export default Input
