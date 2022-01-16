import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Artist from './pages/Artist'
import Home from './pages/Home'
import Event from './pages/Event'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artist' element={<Artist />} />
        <Route path='/artist/:name' element={<Artist />} />
        <Route path='/event' element={<Event />} />
        <Route path='/event/:artist' element={<Event />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App