import React from 'react'
import { Link } from 'react-router-dom'

const Header = ({darkMode, handleDarkMode}) => {
  return (
    <header id="Header">
        <Link to="/"><h1>Where in the world?</h1></Link>
        <button onClick={handleDarkMode}>
          {darkMode ? 'DarkMode' : 'LightMode'}
        </button>
    </header>
  )
}

export default Header