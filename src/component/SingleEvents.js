import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const SingleEvents = ({ eventData, setEventData, currentPage, pagination, searchQuery, SetTotalPages, eventData2, setEventData2 }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const isMounted = useRef(true);
    const limit = 9;
    const currentYear = new Date().getFullYear();
    const [loading, setLoading] = useState(true);
    const [category, setCategory] = useState('');

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };


    console.log('(location.pathname', location.pathname)
    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                let page;
                let url;

                if (location.pathname === '/browse-events') {
                    if (pagination === "next") {
                        page = parseInt(new URLSearchParams(window.location.search).get('page'), 10) || currentPage;
                        console.log("worked with next", currentPage, "my page:", page)
                    } else {
                        page = currentPage;
                        console.log("worked with previous", currentPage, "my page:", page)
                    }
                    pagination(page);
                    url = `/api/get-event/?page=${currentPage}&limit=${limit}`;
                    navigate(`/browse-events?page=${page}`);
                } else if (location.pathname.includes('/single-event/')) {
                    page = Math.ceil(currentPage / 2);
                } else {
                    page = currentPage;
                }

                const offset = (page - 1) * limit;
                const response = await axios.post('/api/get-event', { page, limit, offset, searchQuery });
                setEventData(response.data);
                setEventData2(response.data);

                SetTotalPages(response.data.totalPages);

                let eventsToDisplay;

                if (location.pathname === '/browse-events') {
                    eventsToDisplay = response.data.events;
                } else if (location.pathname.includes('/single-event/')) {
                    eventsToDisplay = response.data.events.slice(0, 2);
                } else {
                    eventsToDisplay = response.data.events;
                }

                setEventData(eventsToDisplay);
                setLoading(false);
                console.log("eventsToDisplay", eventsToDisplay)
            } catch (error) {
                console.error('Error fetching event data:', error);
                setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted.current = false;
        };
    }, [currentPage, limit, pagination, searchQuery, category, SetTotalPages]);

    console.log("eventData2 single", eventData2);

    const filteredEvents = Array.isArray(eventData) ? eventData.filter((event) => {
        const titleMatch = event.events.title && event.events.title.toLowerCase().includes((searchQuery || '').toLowerCase());
        const descriptionMatch = event.events.description && event.events.description.toLowerCase().includes((searchQuery || '').toLowerCase());
        return titleMatch || descriptionMatch;
    }) : [];



    const handleTitleClick = (id, slug) => {
        console.log(`/api/event-details/${slug}`);
        axios.get(`/api/event-details/${slug}`)
            .then(response => {
                const eventData = response.data.events; // Corrected: response.data.events
                let eventSlug = eventData.slug; // Corrected: eventData.slug

                if (!eventSlug) {
                    eventSlug = eventData.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, '-')
                        .replace(/-{2,}/g, '-')
                        .replace(/^-|-$/g, '');
                    eventData.slug = eventSlug;
                }

                console.log("slug new", eventSlug);
                // navigate(`/single-event/${eventSlug}`, { state: { eventData } });

            })
            .catch(error => {
                console.error('Error fetching event details:', error);
            });
        console.log("eventData new", eventData)
    };

    const getImageUrl = (event) => {
        if (!event.events.image) {
            return location.pathname.includes('/single-event/') ? '../images/CoFit-Image-Not-Found-1.jpg' : 'images/CoFit-Image-Not-Found-1.jpg';
        }

        let imageUrl = event.events.image;

        imageUrl = imageUrl.replace('https://cofitapp.com/', '');
        console.log("imageUrl", imageUrl)
        if (!imageUrl.startsWith('https://')) {
            imageUrl = 'https://cofitapp.com/' + imageUrl;
        }

        console.log("imageUrl", imageUrl);
        return imageUrl;
    };

    console.log("eventdata+*+&+*", eventData)
    // console.log("image+*+&+*", eventData.event.events.image)

    // eventData.forEach(event => {
    //     const image = event.events.image;
    //     console.log(image);
    // });

    return (
        <React.Fragment>
            {loading ? (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    minHeight="50vh"
                    minWidth="50vw" // Ensure the container occupies the full viewport width
                >
                    <CircularProgress />
                </Box>

            ) : (
                filteredEvents.map(event => (
                    <Box key={event.events.id} className='event-box box'>

                        <Box className='image'>
                            {event.events.image ? (
                                <Link to={`/single-event/${event.events.slug || event.events.title?.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '')}`} onClick={() => handleTitleClick(event.id, event.events.slug, event.slug)}>
                                    <img src={getImageUrl(event)} alt='' />
                                </Link>
                            ) : (
                                <Link to={`/single-event/${event.events.slug || event.events.title?.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '')}`} onClick={() => handleTitleClick(event.id, event.events.slug, event.slug)}>
                                    <a href="#back-events">
                                        <img
                                            src={getImageUrl(event)}
                                            alt=''
                                        /></a>
                                </Link>
                            )}
                        </Box>
                        <Box className='content'>
                            <Box className='date-location'>
                                <Box className='date'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <rect x="2.5" y="2.45312" width="11.0312" height="11.0312" rx="2" stroke="#E25F3C" stroke-width="1.2" />
                                        <path d="M11 1.5V3.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M5 1.5V3.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M2.5 5.5H13.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                    <Typography variant='span' component='span' className="date">
                                        {event?.events.date?.start_date}, {currentYear}
                                    </Typography>
                                </Box>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
                                    <path d="M0 1H16" stroke="#CBD7EA" />
                                </svg>
                                <Box className='location'>
                                    {event?.events.event_location_map && event?.events.event_location_map.link ? (
                                        <a href={event?.events.event_location_map.link} target="_blank" rel="noopener noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                            <path d="M8 8.5C9.10457 8.5 10 7.60457 10 6.5C10 5.39543 9.10457 4.5 8 4.5C6.89543 4.5 6 5.39543 6 6.5C6 7.60457 6.89543 8.5 8 8.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M13 6.5C13 11 8 14.5 8 14.5C8 14.5 3 11 3 6.5C3 5.17392 3.52678 3.90215 4.46447 2.96447C5.40215 2.02678 6.67392 1.5 8 1.5C9.32608 1.5 10.5979 2.02678 11.5355 2.96447C12.4732 3.90215 13 5.17392 13 6.5V6.5Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    )}
                                    <Typography variant='span' component='span'>
                                        {event.events.address &&
                                            event.events.address
                                                .toString()
                                                .match(/\S+/g)
                                                ?.slice(0, 1)
                                                .join(' ')
                                        }
                                        {event.events.address &&
                                            event.events.address
                                                .toString()
                                                .match(/\S+/g)
                                                ?.length > 2 && '...'}
                                    </Typography>





                                </Box>
                            </Box>
                            <Box className='title-des'>
                                <Link to={`/single-event/${event.slug || event.events.title?.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '')}`} onClick={() => handleTitleClick(event.id)}>


                                    <Typography variant='h3' component='h3' className='title'>
                                        {event.events.title}
                                    </Typography>
                                </Link>
                                <Typography variant='p' component='p' className='description'>
                                    {event.events.description}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                ))
            )}

        </React.Fragment>
    );
};

export default SingleEvents;
