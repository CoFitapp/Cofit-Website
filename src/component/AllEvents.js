import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SingleEvents from '../component/SingleEvents';
import Button from '@mui/material/Button';
import EventsFiletrBar from '../component/EventsFiletrBar';
import { Link } from 'react-router-dom';



export default function AllEvents( onNext, onPrev ) {
  
  

    return (
        <React.Fragment>

            <Box className='all-events-main'>
                <Container className='site-container'>
                    <Box className='all-events-inner'>
                       
                            <Box className='site-containers'>
                            </Box>
                        <Typography variant='h2' component='h2' className='sec-heading'>
                            All events
                        </Typography>
                        <Box className='filter-bar-main'>
                            <EventsFiletrBar />
                        </Box>
                        <Box className='events'>
                            <Box className='events-inner'>
                                <SingleEvents />
                            </Box>
                            <Box className='pagination-main'>
                                <Link to="/">
                                    <Button variant="contained" className='custom-buttn main w-bg'>Previous</Button>
                                </Link>
                                <Typography variant='span' component='span' className='page-count'>
                                    <Typography variant='span' component='span'>
                                        1
                                    </Typography>
                                    /
                                    <Typography variant='span' component='span'>
                                        2
                                    </Typography>
                                </Typography>
                              <Link to="/all-events">
                                <Button variant="contained" className='custom-buttn main'>Next</Button>
                              </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </React.Fragment>
    )
}
