import React from 'react';
import SearchIconImg from '../assets/images/search/SearchIcon.png'
import { TrackingContext } from '../context/TrackingContext';

const SearchBar = () => {
  const [searchValue, setSearchValue] = React.useState('');
  const context = React.useContext(TrackingContext);

  const handleSearch = async () => {
    context?.setTrackingDetails({ trackingNumber: searchValue });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='search-bar-container'>
      <img onClick={handleSearch} src={SearchIconImg} alt='search-icon' className='search-icon' />
      <input 
        type='text' 
        placeholder='Tracking Number' 
        className='search-bar-input' 
        value={searchValue} 
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
    </div>
  )
}

export default SearchBar
