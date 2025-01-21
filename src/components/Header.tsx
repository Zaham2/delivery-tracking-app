// import React from 'react'
import LocationIcon from '../assets/images/LocationIcon.png'
import SearchBar from './SearchBar'

const Header = () => {
  return (
    <header className='header-container'>
      <img src={LocationIcon} alt='location-icon' />
      <h1 className='header-title'>Track Your Order</h1>
      <p className='header-subtitle'>All order updates will be available through this link.</p>
      <SearchBar />
    </header>
  )
}

export default Header
