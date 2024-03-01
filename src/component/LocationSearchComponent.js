import React, { useState } from 'react';
import { search } from 'location-search';

const LocationSearchComponent = ({ onSelectLocation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() === '') {
      setSuggestions([]);
      return;
    }
    try {
      const results = await search(query);
      setSuggestions(results);
    } catch (error) {
      console.error('Error fetching location:', error);
    }
  };

  const handleLocationSelect = (location) => {
    onSelectLocation(location);
    setSearchQuery('');
    setSuggestions([]);
  };

  return (
    <div>
      <input 
        type="text" 
        value={searchQuery} 
        onChange={handleInputChange} 
        placeholder="Enter location" 
      />
      <div>
        {suggestions.map((suggestion) => (
          <div key={suggestion.id} onClick={() => handleLocationSelect(suggestion)}>
            {suggestion.address.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LocationSearchComponent;
