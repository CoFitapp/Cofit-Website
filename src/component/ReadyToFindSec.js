import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container';

export default function ReadyToFindSec() {
    return (
        <React.Fragment>
            <Box className='ready-find'>
                <Container className='site-container ready-to-find-container'>
                    <Box className='sec-inner'>
                        <Box className='content-box'>
                            <Typography variant='h2' component='h2' className='sec-heading'>
                                Ready to find your fitness tribe and push your limits?
                            </Typography>
                            <Typography variant='p' component='p'>
                                CoFit connects you with like-minded fitness enthusiasts, gives personalized event recommendations and help you create your own events.
                            </Typography>
                            <Typography variant='p' component='p'>
                                Download CoFit and create your fitness adventure!
                            </Typography>
                            <Box className='buttns-box'>
                                <Button variant="contained" className='custom-buttn main'>
                                    <img src='images/apple-btn.svg' alt='' />
                                </Button>
                                <Button variant="contained" className='custom-buttn main w-bg'>
                                    <img src='images/google-btn.svg' alt='' />
                                </Button>
                            </Box>
                        </Box>
                        <Box className='image-box'>
                            <img src='images/iphone-15.png' alt='' />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}
