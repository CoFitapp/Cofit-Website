import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';

export default function WhyCofitSec() {
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return (
        <React.Fragment>
            <Box className='why-cofit'>
                <Container className='site-container'>
                    <Box className='sec-inner'>
                        <Box className='image-box'>
                            <img src='images/why-cofit.png' alt='' />
                        </Box>
                        <Box className='content-box'>
                            <Typography variant='span' component='span' className='tag-line'>
                                Why COFIT
                            </Typography>
                            <Typography variant='h2' component='h2' className='sec-heading'>
                                Discover more than 3,000+ Fitness events
                            </Typography>
                            <Typography variant='p' component='p'>
                                No more generic routines! With 3,000+ events on your map, find workouts that match your vibe and goals. Unleash your inner athlete and experience fitness like never before.
                            </Typography>
                            <Box className='buttns-box'>
                                <Button variant="contained" className='custom-buttn main'>Post a free event</Button>
                                <Link to="/browse-events">
                                    <Button variant="contained" className='custom-buttn main w-bg' onClick={() => { scrollToTop(); }}>Browse events</Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}
