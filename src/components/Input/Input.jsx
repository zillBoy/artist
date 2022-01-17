import React, { useState, useEffect } from 'react'

// Icons
import { Search, X as Cancel } from 'react-feather'

const Input = ({ onChangeHandler, onEnterPress = () => {}, page='', placeholder='' }) => {
    
    const [search, setSearch] = useState('')
    const [showCancel, setShowCancel] = useState(false)

    const changeHandler = event => {
        let name = event.target.value
        setSearch(name)
        onChangeHandler(name)

        if (page === 'artist') window.history.replaceState(null, "New Page Title", `/artist/${name}`)
    }

    const clearInputHandler = () => {
        setSearch('')
        onChangeHandler()
    }

    const keyPressHandler = event => {
        if (event.key === 'Enter') {
            if (search.length !== 0) {
                onEnterPress(search)
            }
        }
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
            <input placeholder={placeholder} className='input__container-input' type='text' value={search} onChange={changeHandler} onKeyPress={keyPressHandler} />
            {showCancel && <div className='input__icon'>
                <Cancel onClick={clearInputHandler} className='input__icon--cancel' />
            </div>}
        </div>
    )
}

export default Input
