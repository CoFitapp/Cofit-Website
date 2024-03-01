import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function BannerSection() {
    return (
        <React.Fragment>
            <Box className='banner-main' sx={{ backgroundImage: 'url("images/banner-img.jpg")' }}>
                <Container className='site-container'>
                    <Box className='banner-content'>
                        <Box className='content-inner'>
                            <Typography variant="span" component='span'>
                                Welcome to COFIT
                            </Typography>
                            <Typography variant='h1' component='h1'>
                                Where Fitness Meets <br /> Community!
                            </Typography>
                            <Typography variant='p' component='p'>
                                Empower your fitness journey with our dynamic event platform. Join, create, and elevate your fitness experiences with a community that shares your passion for wellness
                            </Typography>
                            <Button variant="contained" className='custom-buttn main'>Join CoFit</Button>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}
