import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Navbar from './Navbar'
import Login from './Login'

const Header = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
        </Routes>
        <Navbar />
        </Router>
    </div>
  )
}

export default Header
