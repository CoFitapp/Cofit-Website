import React, { useState, useEffect } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useLocation, useParams } from 'react-router-dom';
import SingleEvents from '../component/SingleEvents';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import CircularProgress from '@mui/material/CircularProgress'; // Import CircularProgress

export default function SingleEvent(props) {
    const [searchQuery, setSearchQuery] = useState('');
    const { slug } = useParams();
    const paramData = useParams();
    const location = useLocation();
    console.log("props", props)
    const eventId = location.state && location.state.eventId;

    console.log('Event ID:', eventId);
    console.log('paramData', paramData)
    const canonicalUrl = `${window.location.origin}${location.pathname}`;
    console.log("Canonical URL:", canonicalUrl);
    const [loading, setLoading] = useState(true);

    const [eventData, setEventData] = useState([]);

    const handleSearchChange = (query) => {
        setSearchQuery(query);
    };

    // const eventData = location?.state?.eventData || null; 
    useEffect(() => {
        axios.get(`/api/event-details/${slug}`)
            .then(response => {
                console.log('API Response:', response); // Log the entire API response
                setEventData(response.data.events);
                setLoading(false);
                let slug = response.data.events.event.slug;
                console.log("eventData API", eventData)
                // If slug doesn't exist, create it from the title
                if (!slug) {
                    // Create slug from title
                    slug = response.data.events.event.title
                        .toLowerCase()
                        .replace(/[^a-z0-9]/g, '-')
                        .replace(/-{2,}/g, '-')
                        .replace(/^-|-$/g, '');
                    response.events.event.slug = slug; // Update eventData with the new slug
                }

                console.log("slug new", slug);
                // navigate(`/single-event/${slug}`, { state: { eventData } });
            })
            .catch(error => {
                console.error('Error fetching event details:', error);
            });
    }, []);


    // if (loading) {
    //     return <CircularProgress />; // or any other loading indicator you prefer
    // }
    

    const description = eventData?.description || '';
    // const address = eventData?.address || '';
    const address = (eventData && eventData.address && eventData.address.length > 0) ? eventData.address[0] : '';

    const wordLimit = 100;
    console.log("description", description);
    let firstHalf, secondHalf;

    if (description.split(/\s+/).length > wordLimit) {
        const words = description.split(/\s+/);
        const halfIndex = Math.ceil(words.length / 2);

        firstHalf = words.slice(0, halfIndex).join(' ');
        secondHalf = words.slice(halfIndex).join(' ');
    } else {
        firstHalf = description;
    }


    console.log("eventData?.event?.date?.start_date", eventData)
    const image = eventData?.image || '../images/CoFit-Image-Not-Found-1.jpg';
    const title = eventData?.title || '';
    const startDateString = eventData?.date?.start_date || '';
    console.log("image", image)
    const startDate = new Date(startDateString);

    const options = { day: 'numeric' };

    const scrollToTop = () => {
        if ('scrollBehavior' in document.documentElement.style) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        } else {
            window.scrollTo(0, 0);
        }
    };
    useEffect(() => {
        const scrollToTop = () => {
            if ('scrollBehavior' in document.documentElement.style) {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            } else {
                window.scrollTo(0, 0);
            }
        };

        // Call scrollToTop function here
        scrollToTop();

       

    }, []);

    //   console.log("eventData22222222", eventData.event.link)
    console.log("eventData22222222", eventData)
    const addressParts = address.split(',').map(part => part.trim());
    const locality = addressParts[addressParts.length - 1];
    

    return (
        <React.Fragment>

            <Helmet>
                <meta charSet="utf-8" />
                <title>{title}</title>
                <meta name="description" content={description.slice(0, 75)} />
                <link rel="canonical" id="canonicalLink" href={canonicalUrl} />

            </Helmet>
            {loading ? ( // Display CircularProgress when loading is true
            <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', minWidth: '100vh' }}>
                <CircularProgress />
            </Box>
        ) : (
            <>
            {/* Back Button*/}
            <Box className='back-events' id="back-events">

                <Container className='site-container'>
                    <Box className='back-events-inner'>
                        <Link to="/">
                            <Button variant="contained" className='custom-buttn main'>

                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M6.64056 1.35938L0.999985 6.99995L6.64056 12.6405" stroke="#1C1F23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M1.00006 7L13 7" stroke="#1C1F23" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>

                                Back to events
                            </Button>
                        </Link>
                    </Box>
                </Container>
            </Box>
            {/* Banner */}
            <Box className='event-banner-main'>
                <Container className='site-container'>
                    <Box className='banner-inner'>
                        <img src={image} alt='' />
                    </Box>
                </Container>
            </Box>
            {/* Content with Sidebar */}
            <Box className='content-with-sidebar'>
                <Container className='site-container'>
                    <Box className='content-inner'>
                        {/* Left */}
                        <Box className='main-content'>
                            <Box className='title-desc'>
                                <Typography variant='h1' component='h1' className='title'>
                                    {title}
                                </Typography>
                                <Typography variant='p' component='p' className='desc'>
                                    {firstHalf}
                                </Typography>
                                {secondHalf && (
                                    <Typography variant='p' component='p' className='desc'>
                                        {secondHalf}
                                    </Typography>
                                )}
                            </Box>
                            <Box className='photo-gallery'>
                                <Box className='title-main'>
                                    <Box className='icon'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none">
                                            <rect width="48" height="48" rx="4" fill="#98A9FF" />
                                            <path d="M34 34.1162H14C13.4696 34.1162 12.9609 33.9055 12.5858 33.5304C12.2107 33.1554 12 32.6466 12 32.1162V18.1162C12 17.5858 12.2107 17.0771 12.5858 16.702C12.9609 16.3269 13.4696 16.1162 14 16.1162H18L20 13.1162H28L30 16.1162H34C34.5304 16.1162 35.0391 16.3269 35.4142 16.702C35.7893 17.0771 36 17.5858 36 18.1162V32.1162C36 32.6466 35.7893 33.1554 35.4142 33.5304C35.0391 33.9055 34.5304 34.1162 34 34.1162Z" fill="white" stroke="#5870FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M24 29.1162C26.4853 29.1162 28.5 27.1015 28.5 24.6162C28.5 22.1309 26.4853 20.1162 24 20.1162C21.5147 20.1162 19.5 22.1309 19.5 24.6162C19.5 27.1015 21.5147 29.1162 24 29.1162Z" stroke="#5870FF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Box>
                                    <Box className='title'>
                                        <Typography variant='h2' component='h2' className='title'>
                                            Photo gallery
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='gallery-main'>
                                <Box className='gallery-inner'>
                                    <Box className='gallery-img'>
                                        <img src='../images/img0.jpg' alt='' />
                                        <img src={image} alt='' />
                                    </Box>
                                    <Box className='gallery-img'>
                                        <img src='../images/img2.jpg' alt='' />
                                    </Box>
                                    <Box className='gallery-img'>
                                        <img src='../images/img3.jpg' alt='' />
                                    </Box>
                                    <Box className='gallery-img'>
                                        <img src='../images/img4.jpg' alt='' />
                                    </Box>
                                    <Box className='gallery-img'>
                                        <img src='../images/img5.jpg' alt='' />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {/* Right */}
                        <Box className='sidebar'>
                            <Box className='sidebar-inner'>

                                {/* Event-details */}
                                <Box className='event-details'>
                                    <Box className='date-label'>
                                        <Box className='label-box'>
                                            <img src='../images/date-label.svg' alt='' />
                                            <Typography variant='span' component='span' className='date'>
                                                {startDate.toLocaleDateString('en-US', options)}
                                            </Typography>
                                        </Box>
                                        <Box className='date-year'>
                                            <Typography variant='span' component='span' className='date-title'>
                                                Event date
                                            </Typography>
                                            <Typography variant='span' component='span' className='full-date'>
                                                {eventData?.event?.date?.start_date}
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className='descrip'>
                                        <Typography variant='p' component='p' className='desc'>
                                            Grab your spot now and save 10%! Lace up and join us for an amazing running experience. Don't miss out - book today!
                                        </Typography>
                                    </Box>
                                    <Box className='location'>
                                        <Typography variant='a' component='a' className='loc' href='#' target='_blank'>
                                            {eventData?.event?.event_location_map && eventData?.event?.event_location_map?.link ? (
                                                <a href={eventData?.event?.event_location_map?.link} target="_blank" rel="noopener noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                        <path d="M6.88824 9.00963C8.12026 9.00963 9.11901 8.01089 9.11901 6.77887C9.11901 5.54685 8.12026 4.5481 6.88824 4.5481C5.65622 4.5481 4.65747 5.54685 4.65747 6.77887C4.65747 8.01089 5.65622 9.00963 6.88824 9.00963Z" stroke="#5870FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M12.4649 6.77883C12.4649 11.7981 6.88796 15.7019 6.88796 15.7019C6.88796 15.7019 1.31104 11.7981 1.31104 6.77883C1.31104 5.29974 1.8986 3.88122 2.94448 2.83535C3.99035 1.78947 5.40887 1.2019 6.88796 1.2019C8.36705 1.2019 9.78556 1.78947 10.8314 2.83535C11.8773 3.88122 12.4649 5.29974 12.4649 6.77883V6.77883Z" stroke="#5870FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                </a>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                    <path d="M6.88824 9.00963C8.12026 9.00963 9.11901 8.01089 9.11901 6.77887C9.11901 5.54685 8.12026 4.5481 6.88824 4.5481C5.65622 4.5481 4.65747 5.54685 4.65747 6.77887C4.65747 8.01089 5.65622 9.00963 6.88824 9.00963Z" stroke="#5870FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M12.4649 6.77883C12.4649 11.7981 6.88796 15.7019 6.88796 15.7019C6.88796 15.7019 1.31104 11.7981 1.31104 6.77883C1.31104 5.29974 1.8986 3.88122 2.94448 2.83535C3.99035 1.78947 5.40887 1.2019 6.88796 1.2019C8.36705 1.2019 9.78556 1.78947 10.8314 2.83535C11.8773 3.88122 12.4649 5.29974 12.4649 6.77883V6.77883Z" stroke="#5870FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            )}
                                            {address}
                                        </Typography>
                                    </Box>
                                    <Box className='webiste'>
                                        <Typography variant='a' component='a' className='web' href='#' target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
                                                <path d="M8 14.4519C11.3137 14.4519 14 11.7656 14 8.4519C14 5.1382 11.3137 2.4519 8 2.4519C4.68629 2.4519 2 5.1382 2 8.4519C2 11.7656 4.68629 14.4519 8 14.4519Z" stroke="#4457FF" stroke-width="1.2" stroke-miterlimit="10" />
                                                <path d="M2 8.4519H14" stroke="#4457FF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M8 14.2893C9.38071 14.2893 10.5 11.6757 10.5 8.45176C10.5 5.2278 9.38071 2.61426 8 2.61426C6.61929 2.61426 5.5 5.2278 5.5 8.45176C5.5 11.6757 6.61929 14.2893 8 14.2893Z" stroke="#4457FF" stroke-width="1.2" stroke-miterlimit="10" />
                                            </svg>
                                            www.fitnessup.com
                                        </Typography>
                                    </Box>
                                    <Box className='hosted-by'>
                                        <Box className='user-img'>
                                            <img src='../images/06.svg' alt='' />
                                        </Box>
                                        <Box className='host-by'>
                                            <Typography variant='span' component='span' className='host'>
                                                Event hosted by Graham Hills
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className='reg-btn'>
                                        <Button variant="contained" className='custom-buttn main'>Register to event</Button>
                                    </Box>
                                </Box>

                                {/* Map */}
                                <Box className='map-main'>
                                    <Box className='map-title'>
                                        <Box className='icon'>
                                            {eventData?.event?.event_location_map && eventData?.event?.event_location_map?.link ? (
                                                <a href={eventData?.event?.event_location_map?.link} target="_blank" rel="noopener noreferrer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                        <rect x="0.666626" y="0.666748" width="34.6667" height="34.6667" rx="4" fill="#FFEFF0" />
                                                        <path d="M6.83326 14.7513L6.83326 14.751C6.83676 11.7903 8.01446 8.95182 10.108 6.85825C12.2014 4.7649 15.0395 3.58722 17.9999 3.5835C20.9604 3.58722 23.7985 4.7649 25.8918 6.85825C27.9854 8.95182 29.1631 11.7903 29.1666 14.751V14.7512C29.1701 17.1677 28.3807 19.5187 26.9196 21.4434L26.8446 21.5423L26.844 21.5441L26.7521 21.6639C26.7086 21.7205 26.6642 21.7782 26.6279 21.8251L26.582 21.884C26.5726 21.896 26.5675 21.9023 26.5657 21.9046C26.5657 21.9046 26.5657 21.9047 26.5656 21.9047L17.9999 32.0071L9.43406 21.9048L9.43407 21.9048L9.43075 21.9009C9.43114 21.9014 9.43033 21.9004 9.42824 21.8977C9.422 21.8899 9.40433 21.8677 9.37269 21.827C9.33633 21.7802 9.29194 21.7225 9.2484 21.6657C9.20501 21.6091 9.16317 21.5542 9.13213 21.5135L9.09497 21.4647L9.08472 21.4512L9.08207 21.4477L9.0814 21.4468L9.0813 21.4467L9.08124 21.4466L9.08121 21.4466C7.61941 19.5209 6.82972 17.1689 6.83326 14.7513ZM23.0833 14.7511V14.7502C23.0833 13.7448 22.7851 12.762 22.2266 11.926C21.668 11.0901 20.8741 10.4385 19.9452 10.0538C19.0164 9.66903 17.9943 9.56836 17.0082 9.7645C16.0222 9.96065 15.1164 10.4448 14.4055 11.1557C13.6946 11.8666 13.2104 12.7724 13.0143 13.7585C12.8181 14.7445 12.9188 15.7666 13.3035 16.6955C13.6883 17.6243 14.3398 18.4182 15.1758 18.9768C16.0117 19.5354 16.9945 19.8335 17.9999 19.8335H18.0009C19.3483 19.8318 20.64 19.2958 21.5928 18.343C22.5456 17.3903 23.0816 16.0985 23.0833 14.7511Z" fill="white" stroke="#E25F3C" stroke-width="1.5" />
                                                    </svg>
                                                </a>
                                            ) : (
                                                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                                    <rect x="0.666626" y="0.666748" width="34.6667" height="34.6667" rx="4" fill="#FFEFF0" />
                                                    <path d="M6.83326 14.7513L6.83326 14.751C6.83676 11.7903 8.01446 8.95182 10.108 6.85825C12.2014 4.7649 15.0395 3.58722 17.9999 3.5835C20.9604 3.58722 23.7985 4.7649 25.8918 6.85825C27.9854 8.95182 29.1631 11.7903 29.1666 14.751V14.7512C29.1701 17.1677 28.3807 19.5187 26.9196 21.4434L26.8446 21.5423L26.844 21.5441L26.7521 21.6639C26.7086 21.7205 26.6642 21.7782 26.6279 21.8251L26.582 21.884C26.5726 21.896 26.5675 21.9023 26.5657 21.9046C26.5657 21.9046 26.5657 21.9047 26.5656 21.9047L17.9999 32.0071L9.43406 21.9048L9.43407 21.9048L9.43075 21.9009C9.43114 21.9014 9.43033 21.9004 9.42824 21.8977C9.422 21.8899 9.40433 21.8677 9.37269 21.827C9.33633 21.7802 9.29194 21.7225 9.2484 21.6657C9.20501 21.6091 9.16317 21.5542 9.13213 21.5135L9.09497 21.4647L9.08472 21.4512L9.08207 21.4477L9.0814 21.4468L9.0813 21.4467L9.08124 21.4466L9.08121 21.4466C7.61941 19.5209 6.82972 17.1689 6.83326 14.7513ZM23.0833 14.7511V14.7502C23.0833 13.7448 22.7851 12.762 22.2266 11.926C21.668 11.0901 20.8741 10.4385 19.9452 10.0538C19.0164 9.66903 17.9943 9.56836 17.0082 9.7645C16.0222 9.96065 15.1164 10.4448 14.4055 11.1557C13.6946 11.8666 13.2104 12.7724 13.0143 13.7585C12.8181 14.7445 12.9188 15.7666 13.3035 16.6955C13.6883 17.6243 14.3398 18.4182 15.1758 18.9768C16.0117 19.5354 16.9945 19.8335 17.9999 19.8335H18.0009C19.3483 19.8318 20.64 19.2958 21.5928 18.343C22.5456 17.3903 23.0816 16.0985 23.0833 14.7511Z" fill="white" stroke="#E25F3C" stroke-width="1.5" />
                                                </svg>
                                            )}
                                        </Box>
                                        <Box className='title'>
                                            <Typography variant='span' component='span' className='title'>
                                                Get direction on map
                                            </Typography>
                                        </Box>
                                    </Box>
                                    <Box className='map'>
                                        {eventData?.event?.event_location_map && eventData?.event?.event_location_map.link ? (
                                            <a href={eventData?.event?.event_location_map?.link} target="_blank" rel="noopener noreferrer">
                                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3531447501646!2d-122.4072144246497!3d37.78176291175828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580812ab3d88d%3A0x94d2e15f9bb288bb!2sHoward%20St%2C%20San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1704970781066!5m2!1sen!2sin" width="372" height="400" sx={{ border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps Embedded Location"></iframe>
                                            </a>
                                        ) : (
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.3531447501646!2d-122.4072144246497!3d37.78176291175828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580812ab3d88d%3A0x94d2e15f9bb288bb!2sHoward%20St%2C%20San%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1704970781066!5m2!1sen!2sin" width="372" height="400" sx={{ border: 'none' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Google Maps Embedded"></iframe>
                                        )}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            <Box className='related-events-main'>
                <Container className='site-container'>
                    <Box className='related-title'>
                        <Typography variant='h2' component='h2' className='title'>
                            Related events
                        </Typography>
                        <Link to="/browse-events">
                            <Button variant="contained" className='custom-buttn main w-bg' onClick={scrollToTop}>Browse all events</Button>
                        </Link>
                    </Box>
                    <Box className='events'>
                        <Box className='events-inner'>
                            <SingleEvents currentPage={props.currentPage} pagination={props.pagination} searchQuery={searchQuery} SetTotalPages={props.SetTotalPages} eventData={props.eventData} eventId={eventId} />
                            {/* <SingleEvents /> */}
                        </Box>
                    </Box>
                </Container>
            </Box>
            <script type="application/ld+json">
                {`
               {
                 "@context": "https://schema.org",
                 "@type": "Event",
                 "name": "${eventData.title}",
                 "startDate": "${eventData.date && eventData.date.start_date ? new Date(eventData.date.start_date).toISOString() : ''}", 
                 "endDate": "${eventData.endDate ? new Date(eventData.endDate).toISOString() : ''}", 
                 "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
                 "eventStatus": "https://schema.org/EventScheduled",
                 "location": {
                   "@type": "Place",
                   "name": "${address}",
                   "address": {
                     "@type": "PostalAddress",
                     "streetAddress": "${address}",
                     "addressLocality": "${locality}",
                    "postalCode": "Unknown",
                    "addressRegion": "${locality}",
                    "addressCountry":"India"
                   }
                 },
                 "image": [
                   "${image}"
                  ],
                 "description": "${description}",
                 "performer": {
                   "@type": "PerformingGroup",
                   "name": "Leslie and Group"
                 },
                 "organizer": {
                   "@type": "Organization",
                   "name": "Leslie",
                   "link": ${eventData?.event?.link ? `"url": "${eventData.event.link}"` : `"https://cofitapp.com"`}
                }
               }
             `}
            </script>
            </>
        )}
        </React.Fragment>
    )
}

