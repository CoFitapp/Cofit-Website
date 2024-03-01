import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const LatestEvents = () => {
    const [selectedButtonType, setSelectedButtonType] = useState('All');
    const staticEvents = [
        { id: 1, title: '18 tips to organize a perfect and successful meetup ', image: 'images/latepost.png', date: { start_date: 'Nov 30, 2023' }, buttonType: 'Tips' },
        { id: 2, title: 'How to find the best design meetups in your area', image: 'images/0082.png', date: { start_date: 'Nov 30, 2023' }, buttonType: 'Resources' },
        { id: 1, title: '10 ways to approach and talk to people in a meetup', image: 'images/late1.png', date: { start_date: 'Nov 30, 2023' }, buttonType: 'News' },
        { id: 2, title: 'How to build a successful community doing meetups', image: 'images/late2.png', date: { start_date: 'Nov 30, 2023' }, buttonType: 'News' },
        { id: 1, title: '5 tips to get the most out of any person in an event', image: 'images/late3.png', date: { start_date: 'Nov 30, 2023' }, buttonType: 'Tips' },
        { id: 2, title: 'Why should you attend meetings more frequently?', image: 'images/late4.png', date: { start_date: 'Nov 30, 2023' }, buttonType: 'Resources' },
    ];

    const getButtonStyles = (buttonType) => {
        let backgroundColor, borderColor;
    
        if (buttonType === selectedButtonType) {
            // Apply selected styles
            backgroundColor = '#YourSelectedColor';
            borderColor = '#YourSelectedBorderColor';
        } else {
            // Apply default styles
            switch (buttonType) {
                case 'Tips':
                    backgroundColor = '#5870FF';
                    borderColor = '#5870FF';
                    break;
                case 'Resources':
                    backgroundColor = '#7848FF';
                    borderColor = '#7848FF';
                    break;
                case 'News':
                    backgroundColor = '#58C3FF';
                    borderColor = '#58C3FF';
                    break;
                default:
                    backgroundColor = '#000000'; // Default color
                    borderColor = '#000000'; // Default color
            }
        }

        return {
            backgroundColor,
            borderColor,
        };
    };

    return (
        <React.Fragment>
            {staticEvents.map((event) => (
                <Box key={event.id} className='event-box box'>
                    <Box className='image'>
                        <img src={event.image} alt='' />
                    </Box>
                    <Box className='content'>
                        <Box className='title-des'>
                            <Typography variant='h3' component='h3' className='title latest' noWrap={true}>
                                {event.title}
                            </Typography>
                        </Box>
                        <Box className='date-location'>
                            <Box className="location">
                                <button
                                    className='tip-btn tipp'
                                    style={getButtonStyles(event.buttonType)}
                                >
                                    {event.buttonType}
                                </button>
                            </Box>
                            <Box className='date'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                    <rect x="2.5" y="2.45312" width="11.0312" height="11.0312" rx="2" stroke="#E25F3C" stroke-width="1.2" />
                                    <path d="M11 1.5V3.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M5 1.5V3.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2.5 5.5H13.5" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <Typography variant='span' component='span' className="date year">
                                    {event?.date?.start_date}
                                </Typography>
                                <ArrowForwardIcon className='arrow-latest' />
                            </Box>
                        </Box>
                    </Box>
                </Box>
            ))}
        </React.Fragment>
    );
};

export default LatestEvents;
