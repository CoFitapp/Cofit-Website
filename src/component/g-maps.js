import React, { useEffect, useRef } from 'react';
import loadGoogleMapsApi from 'load-google-maps-api';

const MapComponent = ({ onLocationChange, inputProps }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    const initAutocomplete = () => {
      const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
        if (place && place.formatted_address) {
          onLocationChange(place);
        }
      });
    };

    loadGoogleMapsApi({
      key: process.env.REACT_APP_GOOGLE_API_KEY,
      libraries: ['places']
    }).then(initAutocomplete);
  }, [onLocationChange]);

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        placeholder="Enter a Location"
        onChange={(event) => onLocationChange(event.target.value)}
        {...inputProps}
      />

    </div>
  );
};

export default MapComponent;
