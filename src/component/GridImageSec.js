import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container';

export default function GridImageSec() {
    return (
        <React.Fragment>
            <Box className='grid-image'>
                <Container className='site-container ready-to-find-container'>
                    <Box className='sec-inner'>
                        <Box className='image-box'>
                            <img src='images/grid-img.png' alt='' />
                        </Box>
                        <Box className='content-box'>
                            <Typography variant='h2' component='h2' className='sec-heading'>
                            Create the next Fitness meetup
                            </Typography>
                            <Typography variant='p' component='p'>
                            Our fitness meetup combines heart-pumping workouts with valuable networking opportunities. Build your tribe, share fitness tips, and unlock unexpected career connections
                            </Typography>
                            <Box className='buttns-box'>
                                <Button variant="contained" className='custom-buttn main'>Post a premium event</Button>
                                <Button variant="contained" className='custom-buttn main w-bg'>Post a free event</Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}
