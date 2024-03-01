import React from 'react'
import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SingleEvents from '../component/SingleEvents';
import Button from '@mui/material/Button';
import EventsFiletrBar from '../component/EventsFiletrBar';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';import Paper from '@mui/material/Paper';

function EventCarouselItem({ event }) {
  
  const firstWordLocation = event.location.split(' ').slice(0, 2).join(' ');
    return (
        <Paper>
          <Box className='event-box event evnt'>
            <Box className='image1'>
              <img src={event.image} alt='' />
            </Box>
            <Box className='content'>
              <Box className='title-des'>
                <Typography variant='a' component='a' className='title carou'>
                  {event.title}
                </Typography>
                <Typography variant='p' component='p' className='description carous'>
                  {event.description}
                </Typography>
              </Box>
              <Box className='date-location'>
                <Box className='date'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect x="2.5" y="2.45312" width="11.0312" height="11.0312" rx="2" stroke="#E25F3C" stroke-width="1.2" />
                    <path d="M11 1.5V3.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M5 1.5V3.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M2.5 5.5H13.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <Typography variant='span' component='span'>
                    {event.date}
                  </Typography>
                </Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
                  <path d="M0 1H16" stroke="#CBD7EA" />
                </svg>
                <Box className='location add'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <Typography variant='span' component='span'>
                    {firstWordLocation}
                  </Typography>
                </Box>
              </Box>
              <Box className='explore-event'>
                <Typography variant='a' component='a' className='title link-title'>
                  Explore event
                </Typography>
                <img className='link-img' src='images/ArrowRight.svg' alt='' />
              </Box>
            </Box>
          </Box>
        </Paper>
      );
}

function EventCarousel({ events, currentIndex, handleNext, handlePrev }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default number of slides to show
    slidesToScroll: 1, // Default number of slides to scroll
    initialSlide: currentIndex,
    className: 'carousel-event',
    responsive: [
      {
        breakpoint: 1200, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 992, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
        },
      },
    ],
  };  

  return (
    <Slider {...settings} ref={slider => { window.slider = slider; }}>
      {events.map((event, index) => (
        <EventCarouselItem key={index} event={event} />
      ))}
    </Slider>
  );
}

const eventsData = [
    {
      image: 'images/img1.jpg',
      title: 'CrossFit Event',
      description: 'Break a sweat, challenge yourself, and bond with others who thrive on high-intensity training.',
      date: 'Nov 6, 2023',
      location: 'Miami, FL',
    },
    {
      image: 'images/img2.jpg',
      title: 'Annual Marathon',
      description: 'Break a sweat, challenge yourself, and bond with others who thrive on high-intensity training.',
      date: 'Dec 15, 2023',
      location: 'Francisco, CA',
    },
    {
      image: 'images/img1.jpg',
      title: 'CrossFit Event',
      description: 'Break a sweat, challenge yourself, and bond with others who thrive on high-intensity training.',
      date: 'Nov 6, 2023',
      location: 'Miami, FL',
    },
    {
      image: 'images/img2.jpg',
      title: 'Annual Marathon',
      description: 'Break a sweat, challenge yourself, and bond with others who thrive on high-intensity training.',
      date: 'Dec 15, 2023',
      location: 'Francisco, CA',
    },
  ];

export default function BrowseEvents( props ) {
    // console.log("currentPage",props.currentPage)
    const [currentIndex, setCurrentIndex] = useState(1);

    const carouselRef = useRef(null);

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (query) => {
      setSearchQuery(query);
  };
    const handleNext = () => {
      window.slider.slickNext();
    };
  
    const handlePrev = () => {
      window.slider.slickPrev();
    };

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
          color:'#C8C8C8',
        }
      : {
          borderRadius: '4px',
          border: '1px solid #1C1F23',
        };
  
    return (
        <React.Fragment>

            <Box className='all-events-main'>
                <Container className='site-container'>
                    <Box className='all-events-inner brows'>
                        <Box className='first-block'>
                            <Typography variant='h2' component='h2' className='first-head'>
                                Events
                            </Typography>
                            <Typography variant='h2' component='h2' className='second-head'>
                                Browse all the events
                            </Typography>
                            <Typography variant='h2' component='h2' className='third-head'>
                                Browse all events, build your own adventure, and crush <br /> your goals with a supportive community.
                            </Typography>
                        </Box>
                        <Box className='featureds'>
                            <Typography variant='h2' component='h2' className='sec-heading sec1'>
                                Featured events
                            </Typography>
                             <Box className='icons'>
                              <img className="left-arrow" src='images/LeftArrow.svg' alt='' onClick={handlePrev} />
                              <img className="right-arrow" src='images/WhiteArrowRight.svg' alt='' onClick={handleNext} />
                            </Box>
                            </Box>
                            <Box className='site-containers'>
                            <Box style={{ display: 'flex' }}>
                              <EventCarousel ref={carouselRef} events={eventsData} currentIndex={(currentIndex + 1) % eventsData.length} />
                            </Box>
                            </Box>
                        <Typography variant='h2' component='h2' className='sec-heading' id="single-events">
                            All events
                        </Typography>
                        <Box className='filter-bar-main'>
                            <EventsFiletrBar searchQuery={searchQuery} onSearchChange={handleSearchChange}/>
                        </Box>
                        <Box className='events'>
                            <Box className='events-inner'>
                              <SingleEvents currentPage={props.currentPage} pagination={props.pagination} searchQuery={searchQuery} SetTotalPages={props.SetTotalPages} paginateState={props.paginateState} />
                            </Box>
                            <Box className='pagination-main'>
                              <Button variant="contained" className='custom-buttn main w-bg' onClick={()=> { scrollToSection('single-events'); props.handlePage("previous") }}
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
                                <Typography variant='span' component='span'>
                                  {props.totalPages}
                                </Typography>
                              </Typography>

                              <Link to="/browse-events">
                              <Button variant="contained" className='custom-buttn main next'  onClick={()=> { scrollToSection('single-events'); props.handlePage("next"); }}
                                style={nextButtonStyle}
                                disabled={props.currentPage === props.totalPages}
                                >
                                Next
                              </Button>
                              </Link>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

        </React.Fragment>
    )
}
