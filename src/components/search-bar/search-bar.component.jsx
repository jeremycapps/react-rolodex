import React from 'react';

import './search-bar.styles.css';

export const SearchBar = ({ placeholder, onChange }) => (
  <input
    className="search" 
    type='search' 
    placeholder={placeholder} 
    onChange={onChange} 
  />
)
