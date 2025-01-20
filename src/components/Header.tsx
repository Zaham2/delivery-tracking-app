// import React from 'react'
import LocationIcon from '../assets/images/LocationIcon.png'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className='header-container'>
      <img src={LocationIcon} alt='location-icon' />
      <h1>Track Your Order</h1>
      <SearchBar />
    </header>
  )
}

export default Header
