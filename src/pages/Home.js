import React, { useState } from 'react';
import BannerSection from '../component/BannerSection'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SingleEvents from '../component/SingleEvents';
import EventsFiletrBar from '../component/EventsFiletrBar';
import HowItWrokSection from '../component/HowItWrokSection';
import WhyCofitSec from '../component/WhyCofitSec';
import ReadyToFindSec from '../component/ReadyToFindSec';
import GridImageSec from '../component/GridImageSec';
import NewsArticlesSec from '../component/NewsArticlesSec';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function Home(props) {
    const location = useLocation();
    const [eventData, setEventData] = useState([]);

    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    // const [eventData, setEventData] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await axios.post('/api/get-event', {
    //         city_name: 'Chicago', 
    //       });

    //       setEventData(response.data);
    //     } catch (error) {
    //       console.error('Error fetching event data:', error);
    //     }
    //   };

    //   fetchData();
    // }, []); 


    // const [currentPage, setCurrentPage] = useState(1);
    // const eventsPerPage = 10;

    // const handleNextPage = () => {
    //   setCurrentPage((prevPage) => prevPage + 1);
    // };

    // const handlePrevPage = () => {
    //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    // };

    // const displayEvents = eventData.slice((currentPage - 1) * eventsPerPage, currentPage * eventsPerPage);

    // const remainingEvents = eventData.slice(currentPage * eventsPerPage);

    // const handleNextPageBrowse = () => {
    //   navigate('/browse-events');
    //   props.handlePage();
    // };
    //   console.log("props.page", props.totalPages)
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };
    // const scrollToTop = () => {
    //     window.scrollTo({
    //       top: -20,
    //       behavior: 'smooth',
    //     });
    //   };
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const isLastPage = props.currentPage === props.pagination.totalPages;
    const isFirstPage = props.currentPage === 1;

    const previousButtonStyle = {
        borderRadius: '4px',
        border: isFirstPage ? '1px solid #C8C8C8' : '1px solid #1C1F23',
        color: isFirstPage ? '#C8C8C8' : '#1C1F23',
        backgroundColor: isFirstPage ? 'transparent' : '#fff',
        '&:hover': {
            backgroundColor: isFirstPage ? 'transparent' : '#1C1F23',
            color: isFirstPage ? '#fff' : '#1C1F23',
        },
    };

    const nextButtonStyle = isLastPage
        ? {
            display: 'flex',
            borderRadius: '4px',
            border: '1px solid #C8C8C8',
            background: '#FFF',
            color: '#C8C8C8',
        }
        : {
            borderRadius: '4px',
            border: '1px solid #1C1F23',
        };

    return (
        <React.Fragment>
            <Helmet>
                <link rel="canonical" id="canonicalLink" href={canonicalUrl} />

            </Helmet>
            {/* Banner Section */}
            <BannerSection />

            {/* All Events Section */}
            <Box className='all-events-main'>
                <Container className='site-container'>
                    <Box className='all-events-inner'>
                        <Typography variant='h2' component='h2' className='sec-heading' id='single-events'>
                            All events
                        </Typography>
                        <Box className='filter-bar-main'>
                            <EventsFiletrBar searchQuery={searchQuery} onSearchChange={handleSearchChange}  eventData={eventData} setEventData= {setEventData} />
                        </Box>
                        <Box className='events'>
                            <Box className='events-inner'>
                                <SingleEvents currentPage={props.currentPage} pagination={props.pagination} searchQuery={searchQuery} SetTotalPages={props.SetTotalPages} eventData={eventData} setEventData= {setEventData}/>
                            </Box>
                            <Box className='pagination-main'>
                                <Button
                                    variant="contained"
                                    className='custom-buttn main w-bg'
                                    onClick={() => {
                                        scrollToSection('single-events');
                                        props.handlePage("previous");
                                    }}
                                    // style={previousButtonStyle}
                                    disabled={isFirstPage}
                                >
                                    Previous
                                </Button>


                                <Typography variant='span' component='span' className='page-count'>
                                    <Typography variant='span' component='span'>
                                        {props.currentPage}
                                    </Typography>
                                    /
                                    <Typography variant='span' component='span'>1
                                        {/* {props.totalPages} */}
                                    </Typography>
                                </Typography>


                                <Button
                                    variant="contained"
                                    className='custom-buttn main next'
                                    onClick={() => {
                                        scrollToSection('single-events');
                                        props.handlePage("next");
                                    }}
                                    style={nextButtonStyle}
                                    // disabled={props.currentPage === props.totalPages}
                                    disabled={props.currentPage === 1}

                                >
                                    Next
                                </Button>

                            </Box>

                        </Box>
                    </Box>
                </Container>
            </Box>
            <Box className='how-it-works-main'>
                <HowItWrokSection />
            </Box>

            {/* Why COFIT Section */}
            <Box className='why-cofit-main'>
                <WhyCofitSec />
            </Box>

            {/* Ready to find Section */}
            <Box className='ready-find-main'>
                <ReadyToFindSec />
            </Box>

            {/* Grid Image Section */}
            <Box className='grid-image-main'>
                <GridImageSec />
            </Box>

            {/* News Articles Section */}
            <Box className='news-articles-main'>
                <Container className='site-container'>
                    <Box className='heading-titles'>
                        <Box className='titles'>
                            <Typography variant='span' component='span' className='tag-line'>
                                Our Blog
                            </Typography>
                            <Typography variant='h2' component='h2' className='sec-heading'>
                                News & articles
                            </Typography>
                        </Box>
                        <Box className='sub-heading'>
                            <Typography variant='p' component='p'>
                                Dive into our fitness articles for stories & wisdom to empower your journey.
                            </Typography>
                        </Box>
                    </Box>

                    <NewsArticlesSec />
                </Container>
            </Box>

        </React.Fragment>
    )
}
