import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { useNavigate, useLocation, Link } from 'react-router-dom';

const SingleEvents = (props) => {

    const [eventData, setEventData] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const isMounted = useRef(true);
    const limit = 9;
    const currentYear = new Date().getFullYear();
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let page;
                let url;
                const searchQuery = props.searchQuery;

                if (location.pathname === '/browse-events') {
                    if (props.paginateState === "next") {
                        page = parseInt(new URLSearchParams(window.location.search).get('page'), 10) || props.currentPage;
                        console.log("worked with next", props, "my page:", page)
                    } else {
                        page = props.currentPage;
                        console.log("worked with previous", props, "my page:", page)

                    }
                    props.pagination(page);
                    url = `/api/get-event/?page=${props.currentPage}&limit=${limit}`;

                    // console.log("url", props.pagination);

                    navigate(`/browse-events?page=${page}`);

                } else if (location.pathname.includes('/single-event/')) {
                    page = Math.ceil(props.currentPage / 2);
                } else {
                    page = props.currentPage;
                }

                const offset = (page - 1) * limit;
                const response = await axios.post('/api/get-event', { page, limit, offset, searchQuery });

                // setTotalPages(response.data.totalPages);
                props.SetTotalPages(response.data.totalPages)
                // console.log("Total Pages:", totalPages);

                let eventsToDisplay;

                if (location.pathname === '/browse-events') {
                    eventsToDisplay = response.data.events

                } else if (location.pathname.includes('/single-event/')) {
                    eventsToDisplay = response.data.events.slice(0, 2);
                }
                else {
                    eventsToDisplay = response.data.events

                }

                setEventData(eventsToDisplay);
                // console.log("location.pathname", eventsToDisplay)
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        };
        fetchData();
        return () => {
            isMounted.current = false;
        };
    }, [props.currentPage, limit, props.totalPages, props.paginateState, props.searchQuery]);

    // const filteredEvents = eventData.filter((event) => {
    //     const titleMatch = event.title && event.title.toLowerCase().includes((props.searchQuery || '').toLowerCase());
    //     const descriptionMatch = event.description && event.description.toLowerCase().includes((props.searchQuery || '').toLowerCase());
    //     return titleMatch || descriptionMatch;
    // });



    // {eventData.map((event) => {
    //     // console.log("event", event); 
    // })}

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleTitleClick = (eventId) => {
        axios.get(`/api/event-detail/${eventId}`)
            .then(response => {
                const eventData = response.data;
                let slug = eventData.event.slug;

                // If slug doesn't exist, create it from the title
                if (!slug) {
                    // Create slug from title
                    slug = eventData.event.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, '-')
                        .replace(/-{2,}/g, '-')
                        .replace(/^-|-$/g, '');
                    eventData.event.slug = slug; // Update eventData with the new slug
                }

                console.log("slug new", slug);
                navigate(`/single-event/${slug}`, { state: { eventData } });
                scrollToTop();
            })
            .catch(error => {
                console.error('Error fetching event details:', error);
            });
    };


    const getImageUrl = (event) => {
        if (!event.image) {
            return location.pathname.includes('/single-event/') ? '../images/CoFit-Image-Not-Found-1.jpg' : 'images/CoFit-Image-Not-Found-1.jpg';
        }
    
        let imageUrl = event.image;
    
        // Remove 'https://api.cofitapp.com/' from the image URL
        imageUrl = imageUrl.replace('https://api.cofitapp.com/', '');
    
        return imageUrl;
    };
    
    
    return (
        <React.Fragment>
            {eventData && eventData.map((event) => (
                <Box key={event.id} className='event-box box'>

                    <Box className='image'>
                        {event.image ? (
                            <Link to={`/single-event/${event.slug || event.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '')}`} onClick={() => handleTitleClick(event.id)}>
                                <img src={getImageUrl(event)} alt='' />
                            </Link>
                        ) : (
                            <Link to={`/single-event/${event.slug || event.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '')}`} onClick={() => handleTitleClick(event.id)}>

                                <img
                                    src={getImageUrl(event)}
                                    alt=''
                                />
                            </Link>
                        )}


                        {/* <Box className='mi-count'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <g clip-path="url(#clip0_96_1603)">
                                <path d="M2.66663 6.66659C2.66663 4.15243 2.66663 2.89535 3.44767 2.1143C4.22872 1.33325 5.4858 1.33325 7.99996 1.33325C10.5141 1.33325 11.7712 1.33325 12.5522 2.1143C13.3333 2.89535 13.3333 4.15243 13.3333 6.66659V7.99992C13.3333 10.5141 13.3333 11.7712 12.5522 12.5522C11.7712 13.3333 10.5141 13.3333 7.99996 13.3333C5.4858 13.3333 4.22872 13.3333 3.44767 12.5522C2.66663 11.7712 2.66663 10.5141 2.66663 7.99992V6.66659Z" stroke="white" />
                                <path d="M2.66663 8.66675H13.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M10.3334 10.6667H11.3334" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4.66663 10.6667H5.66663" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M4 13V14C4 14.3682 4.29848 14.6667 4.66667 14.6667H5.66667C6.03486 14.6667 6.33333 14.3682 6.33333 14V13.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M12 13V14C12 14.3682 11.7015 14.6667 11.3333 14.6667H10.3333C9.9651 14.6667 9.66663 14.3682 9.66663 14V13.3333" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13.3334 6H14C14.3682 6 14.6667 6.29848 14.6667 6.66667V7.33333C14.6667 7.54317 14.5679 7.74076 14.4 7.86667L13.3334 8.66667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M2.66671 6H2.00004C1.63185 6 1.33337 6.29848 1.33337 6.66667V7.33333C1.33337 7.54317 1.43217 7.74076 1.60004 7.86667L2.66671 8.66667" stroke="white" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M13 3.33325H3" stroke="white" stroke-linecap="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_96_1603">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <Typography variant='span' component='span'>
                            965 mi
                        </Typography>
                    </Box> */}
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
                                    {event?.date?.start_date}, {currentYear}
                                </Typography>
                            </Box>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="2" viewBox="0 0 16 2" fill="none">
                                <path d="M0 1H16" stroke="#CBD7EA" />
                            </svg>
                            <Box className='location'>
                                {event?.event_location_map && event?.event_location_map.link ? (
                                    <a href={event?.event_location_map.link} target="_blank" rel="noopener noreferrer">
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
                                    {event.address &&
                                        event.address
                                            .toString()
                                            .match(/\S+/g)
                                            ?.slice(0, 1)
                                            .join(' ')
                                    }
                                    {event.address &&
                                        event.address
                                            .toString()
                                            .match(/\S+/g)
                                            ?.length > 2 && '...'}
                                </Typography>





                            </Box>
                        </Box>
                        <Box className='title-des'>
                            <Link to={`/single-event/${event.slug || event.title.toLowerCase().replace(/[^a-z0-9]/g, '-').replace(/-{2,}/g, '-').replace(/^-|-$/g, '')}`} onClick={() => handleTitleClick(event.id)}>


                                <Typography variant='h3' component='h3' className='title'>
                                    {event.title}
                                </Typography>
                            </Link>
                            <Typography variant='p' component='p' className='description'>
                                {event.description}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            ))}
        </React.Fragment>
    );
};

export default SingleEvents;
