import React, { useState, useEffect } from 'react'
import { BASE_URL, AUTH } from '../../utils/api/Api'

// Icons
import { Search, X as Cancel } from 'react-feather'

const Input = ({ setArtist }) => {
    
    const [search, setSearch] = useState('')
    const [showCancel, setShowCancel] = useState(false)

    const changeHandler = event => {
        setSearch(event.target.value)
        setArtist({})
    }

    const clearInputHandler = () => setSearch('')

    const keyPressHandler = event => {
        if (event.key === 'Enter') {
            if (search.length !== 0) {
                getArtistData()
            }
        }
    }

    const getArtistData = () => {
        fetch(`${BASE_URL}/artists/${search}/?${AUTH}`)
        .then(response => response.json())
        .then(result => setArtist(result))
        .catch(err => console.log('get artist error: ', err.message))
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
