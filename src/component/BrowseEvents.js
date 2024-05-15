import React from 'react'
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import SingleEvents from '../component/SingleEvents';
import Button from '@mui/material/Button';
import EventsFiletrBar from '../component/EventsFiletrBar';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css'; import Paper from '@mui/material/Paper';
import { Helmet } from "react-helmet";

function EventCarouselItem({ event, handleTitleClick, eventData }) {
  console.log("event carou", event.events.venue.name);
  // Check if event.location is defined before splitting
  const firstWordLocation = event.events.venue.name ? event.events.venue.name.split(' ').slice(0, 2).join(' ') : '';

  return (
    <Paper>
      <Box className='event-box event evnt'>
        <Box className='image1'>
          <Link to={`/single-event/${event.events.slug}`} onClick={() => handleTitleClick(event.id)}>
            <img src={event.events.image} alt='' />
          </Link>
        </Box>
        <Box className='content'>
          <Box className='title-des'>
            <Link to={`/single-event/${event.events.slug}`} onClick={() => handleTitleClick(event.id)} className='title carou'>
              <Typography variant='a' component='a' className='title carou'>
                {event.events.title}
              </Typography>
            </Link>
            <Typography variant='p' component='p' className='description carous'>
              {event.events.description}
            </Typography>
          </Box>
          <Box className='date-location'>
            <Box className='date'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <rect x="2.5" y="2.45312" width="11.0312" height="11.0312" rx="2" stroke="#E25F3C" strokeWidth="1.2" />
                <path d="M11 1.5V3.5" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 1.5V3.5" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.5 5.5H13.5" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <Typography variant='span' component='span'>
                {event.events.date.when}
              </Typography>
            </Box>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
              <path d="M0 1H16" stroke="#CBD7EA" />
            </svg>
            <Box className='location add'>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <Typography variant='span' component='span'>
                {firstWordLocation}
              </Typography>
            </Box>
          </Box>
          <Box className='explore-event'>
          <Link to={`/single-event/${event.events.slug}`} onClick={() => handleTitleClick(event.id)} className='title link-title' style={{ textDecoration: 'none', color: 'inherit' }}>
              Explore event
            </Link>

            <img className='link-img' src='images/ArrowRight.svg' alt='' />
          </Box>
        </Box>
      </Box>
    </Paper>
  );
}



function EventCarousel({ events, sliderRef, handleNext, handlePrev, handleTitleClick }) {
  // const sliderRef = useRef(null); // Define sliderRef here

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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
  // const handleNext = () => {
  //   sliderRef.current?.slickNext();
  // };

  // const handlePrev = () => {
  //   sliderRef.current?.slickPrev();
  // };


  return (
    <>
      
      <Slider {...settings} ref={sliderRef}>

        {events.map((event, index) => (
          <EventCarouselItem key={index} event={event} handleTitleClick={handleTitleClick} />
        ))}
      </Slider>
    </>

  );
}


export default function BrowseEvents(props) {
  // console.log("currentPage",props.currentPage)
  const [currentIndex, setCurrentIndex] = useState(1);
  const [events, setEvents] = useState([]);
  const location = useLocation();

  const canonicalUrl = `${window.location.origin}${location.pathname}`;
  const sliderRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState('');
  const [eventData, setEventData] = useState([]);
  const navigate = useNavigate();

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };
  // const handleNext = () => {
  //   sliderRef.current?.slickNext();
  // };

  // const handlePrev = () => {
  //   sliderRef.current?.slickPrev();
  // };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };
  const handleTitleClick = (id, slug) => {
    console.log(`/api/event-details/${slug}`);
    axios.get(`/api/event-details/${slug}`)
        .then(response => {
            const eventData = response.events;
            let eventSlug = eventData.event.slug;

            // If slug doesn't exist, create it from the title
            if (!eventSlug) {
                // Create slug from title
                eventSlug = eventData.event.title
                    .toLowerCase()
                    .replace(/[^a-z0-9]/g, '-')
                    .replace(/-{2,}/g, '-')
                    .replace(/^-|-$/g, '');
                eventData.event.slug = eventSlug; // Update eventData with the new slug
            }

            console.log("slug new", eventSlug);
            navigate(`/single-event/${eventSlug}`, { state: { eventData } });

        })
        .catch(error => {
            console.error('Error fetching event details:', error);
        });
    console.log("eventData new", eventData)
};
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post('/api/get-event');
        console.log("response", response);

        // Log the entire response object to inspect its structure
        console.log("response data", response.data.events);

        // Access the events data
        const eventData = response.data.events; // Check the structure of response.data

        if (eventData) {
          setEvents(eventData);
        }
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
    fetchEvents();
  }, []);
  console.log("events browse", events)

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
                <EventCarousel events={events} sliderRef={sliderRef} handleNext={handleNext} handlePrev={handlePrev} handleTitleClick={handleTitleClick} />
              </Box>
            </Box>
            <Typography variant='h2' component='h2' className='sec-heading' id="single-events">
              All events
            </Typography>
            <Box className='filter-bar-main'>
              <EventsFiletrBar searchQuery={searchQuery} onSearchChange={handleSearchChange} />
            </Box>
            <Box className='events'>
              <Box className='events-inner'>
                <SingleEvents currentPage={props.currentPage} pagination={props.pagination} searchQuery={searchQuery} SetTotalPages={props.SetTotalPages} paginateState={props.paginateState} handleTitleClick={handleTitleClick} />
              </Box>
              <Box className='pagination-main'>
                <Button variant="contained" className='custom-buttn main w-bg' onClick={() => { scrollToSection('single-events'); props.handlePage("previous") }}
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
                  <Button variant="contained" className='custom-buttn main next' onClick={() => { scrollToSection('single-events'); props.handlePage("next"); }}
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
