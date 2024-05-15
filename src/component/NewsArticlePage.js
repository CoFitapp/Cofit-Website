
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { styled, alpha } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import LatestEvents from '../component/LatestEvents';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));



export default function NewsArticlesPage() {
    const location = useLocation();

    const canonicalUrl = `${window.location.origin}${location.pathname}`;

    const [isImageLoaded, setIsImageLoaded] = useState(false);

    const handleImageLoad = () => {
        setIsImageLoaded(true);
    };

    useEffect(() => {
        const img = new Image();
        img.src = 'images/0082.png';
        img.onload = () => setIsImageLoaded(true);

        return () => {
            img.onload = null;
        };
    }, []);

    // useEffect(() => {
    //     const script = document.createElement('script');

    //     script.src = 'https://assets.mailerlite.com/js/universal.js';
    //     script.async = true;

    //     document.head.appendChild(script);

    //     window.ml = window.ml || function () { (window.ml.q = window.ml.q || []).push(arguments); };

    //     window.ml('account', '766520');

    //     return () => {
    //       document.head.removeChild(script);
    //     };
    //   }, []);


    return (
        <React.Fragment>
            <Helmet>
                <link rel="canonical" id="canonicalLink" href={canonicalUrl} />

            </Helmet>
            <Box className='all-events-main'>
                <Container className='site-container'>
                    <Box className='all-events-inner aboutUs blog-newss' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Box className='content-inner about-sec1 nws'>
                            <Typography variant="span" component='span' className='about-head'>
                                OUR BLOG
                            </Typography>
                            <Typography variant='h1' component='h1' className='abt-subhead'>
                                News & articles
                            </Typography>
                            <Typography variant='p' component='p' className='abt-des'>
                                Discover bite-sized articles on the latest workouts, nutrition advice, and wellness insights. Stay informed and inspired on your fitness journey with Cofit.
                            </Typography>
                        </Box>

                        <Box className='search-field'>
                            <Box className='articles'>
                                <Search>
                                    <InputBase
                                        className='search-place'
                                        placeholder="Browse articles..."
                                        inputProps={{ 'aria-label': 'search' }}
                                    />
                                    <IconButton type="submit" aria-label="search" className='search-btns'>
                                        Search
                                    </IconButton>
                                </Search>
                            </Box>
                        </Box>
                    </Box>
                    <Box className='all-events-inner aboutUs blog'>
                        <Box className={`about-sec2 newss ${isImageLoaded ? 'loaded' : ''}`}>
                            {!isImageLoaded && (
                                <CircularProgress size={40} thickness={4} sx={{ color: 'primary.main', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                            )}
                            <img
                                className='blog-img'
                                src='images/0082.png'
                                alt=''
                                loading='lazy'
                                onLoad={handleImageLoad}
                            />
                        </Box>
                        <Box className='content-inner about-sec1 blogs blg-nws'>
                            <Box className='date news' sx={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="2.5" y="2.45312" width="11.0312" height="11.0312" rx="2" stroke="#E25F3C" strokeWidth="1.2" />
                                    <path d="M11 1.5V3.5" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M5 1.5V3.5" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2.5 5.5H13.5" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <Typography variant='span' component='span'>
                                    Nov 6, 2023
                                </Typography>
                            </Box>
                            <Typography variant='h1' component='h1' className='abt-subhead news-blog'>
                                How to find the best Fitness meetups on your area
                            </Typography>
                            <Typography variant='p' component='p' className='abt-des'>
                                Lorem ipsum dolor sit amet consectetur a laoreet ullamcorper interdum posuere ullamcorper.</Typography>
                            <Box className='explore-event blog'>
                                <Typography variant='a' component='a' className='title link-title'>
                                    Read article
                                </Typography>
                                <img className='link-img' src='images/ArrowRight.svg' alt='' />
                            </Box>
                        </Box>
                    </Box>
                    <Box className='banner-main1 blog-page' sx={{ backgroundImage: 'url("images/Newslleter.png"), url("images/Rectangle6083.svg")', backgroundSize: 'auto', backgroundRepeat: 'no-repeat' }}>
                        <Container className='site-container'>
                            <Box className='banner-content banr-blog'>
                                <Box className='content-inner banrblog'>
                                    <Typography variant='h1' component='h1' className='subscrbe'>
                                        Subscribe to our newsletter
                                    </Typography>
                                    <Typography variant='p' component='p'>
                                        Join our community and never miss out on what's new and trending in the world of fitness with CoFit.
                                    </Typography>
                                    <Box className='newsletter-form sub foot nwsltr'>
                                        <Box>
                                            {/* <TextField id="outlined-basic" placeholder='Enter your email...' /> */}
                                            {/* <Button variant="contained" className='custom-buttn main'>Subscribe</Button> */}
                                            <Box className="ml-embedded news-ltr leftmargin" data-form="mOFbW7" sx={{ ml: -2 }}></Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Container>
                    </Box>
                    <Box className='tips-btns'>
                        <Box className='lat-post'>
                            <Typography variant='h2' component='h2' className='sec-heading'>
                                Latest Posts
                            </Typography>
                        </Box>
                        <Box className='news-btnns'>
                            <Button className='custom-buttn main all'>All</Button>
                            <Button className='custom-buttn main main-news'>Tips</Button>
                            <Button className='custom-buttn main main-news'>News</Button>
                            <Button className='custom-buttn main main-news'>Resources</Button>
                        </Box>
                    </Box>
                    <Box className='events'>
                        <Box className='events-inner'>
                            <LatestEvents />
                        </Box>
                    </Box>
                </Container>

                <Box className='pagination-main news-pag'>
                    <Button
                        variant='contained'
                        className='custom-buttn main w-bg new-pre' disabled
                    >
                        Previous
                    </Button>

                    <Typography variant='span' component='span' className='page-count'>
                        <Typography variant='span' component='span'>
                            1
                        </Typography>
                        /
                        <Typography variant='span' component='span'>
                            1
                        </Typography>
                    </Typography>

                    <Button variant="contained" className='custom-buttn main next' disabled>Next</Button>
                </Box>

            </Box>

        </React.Fragment>
    )
}
