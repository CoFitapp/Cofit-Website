import React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import Box from '@mui/material/Box';

const EventDetail = () => {
  const location = useLocation();
  const eventData = location?.state?.eventData || null;
  console.log("eventData",eventData);
  if (!eventData) {
    return <div>Loading...</div>;
  }


  return (
    <Box className='event-container'>
       <Box className='image event-image'>
       <img src={eventData.event.image} alt='' />
       </Box>
      <Typography variant="h2" component="h2" className='event-title'>
        {eventData.event.title}
      </Typography>
      <Typography variant="p" component="p" className='event-description'>
        {eventData.event.description}
      </Typography>
      <Typography variant="p" component="p" className='event-city'>
        {eventData.event.city_name}
      </Typography>
      <Typography variant="p" component="p" className='event-type'>
        {eventData.event.event_type}
      </Typography>
    
      <Typography variant="p" component="p" className='event-date'>
        {eventData.event.date.start_date}
      </Typography>
      <Box className='flex'>
        <Box className='location'>
          {eventData.event.event_location_map && eventData.event.event_location_map.link ? (
            <a href={eventData.event.event_location_map.link} target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </Box>
        <Box className='image event-image'>
        <img src={eventData.event.thumbnail} alt='' />
        </Box>
      </Box>
      <Typography variant="p" component="p" className='event-address'>
        {eventData.event.address}
      </Typography>
    </Box>
  );
};

export default EventDetail;
