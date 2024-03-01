import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import React from 'react'

export default function HowItWrokSection() {
    return (
        <React.Fragment>
            <Box className='how-it-works'>
                <Container className='site-container'>
                    <Box className='sec-inner'>
                        <Typography variant='span' component='span' className='tag-line'>
                            How it works
                        </Typography>
                        <Typography variant='h2' component='h2' className='sec-heading'>
                            Learn how the experience works
                        </Typography>
                        <Box className='hiw-steps'>
                            <Box className='steps-box one'>
                                <Box className='image'>
                                    <img src='images/seraach.png' alt='' />
                                </Box>
                                <Box className='step'>
                                    <Typography variant='span' component='span'>
                                        01
                                    </Typography>
                                </Box>
                                <Box className='content'>
                                    <Typography variant='h3' component='h3'>
                                        Search for events in your city
                                    </Typography>
                                    <Typography variant='p' component='p'>
                                    Discover local fitness events in a snap with CoFit. Yoga, running, and more – find what moves you in your city.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className='steps-box two'>
                                <Box className='image'>
                                    <img src='images/calneder.png' alt='' />
                                </Box>
                                <Box className='step'>
                                    <Typography variant='span' component='span'>
                                        02
                                    </Typography>
                                </Box>
                                <Box className='content'>
                                    <Typography variant='h3' component='h3'>
                                        Find an event that interests you
                                    </Typography>
                                    <Typography variant='p' component='p'>
                                        Choose events that align with your fitness passions. CoFit is your partner in exploring diverse and exciting workout experiences.
                                    </Typography>
                                </Box>
                            </Box>
                            <Box className='steps-box three'>
                                <Box className='image'>
                                    <img src='images/cone.png' alt='' />
                                </Box>
                                <Box className='step'>
                                    <Typography variant='span' component='span'>
                                        03
                                    </Typography>
                                </Box>
                                <Box className='content'>
                                    <Typography variant='h3' component='h3'>
                                        Enjoy an event and connect with people
                                    </Typography>
                                    <Typography variant='p' component='p'>
                                        Every event is a chance to meet fitness buddies and join a community of health enthusiasts. With CoFit, you're not just attending events, you're joining a fitness family.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}
