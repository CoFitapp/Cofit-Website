import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MapComponent from './g-maps.js'; // ensure correct import path

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        width: '100%',
    },
}));

export default function EventsFiletrBar({ searchQuery, onSearchChange, eventData, setEventData }) {
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/get-event-category')
            .then((response) => response.json())
            .then((data) => {
                setCategories(data.data || []);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });
    }, []);

    const handleCategoryChange = (event) => {
        const categoryId = event.target.value;
        const selectedCategory = categories.filter(category => category.id === categoryId);

        const filteredEvents = eventData ? eventData.filter(eventItem => {
            return selectedCategory.some(cat => eventItem?.event_category === cat.category);
        }) : [];
        setEventData(filteredEvents);
        setCategory(categoryId);
    };

    const handleSearchChange = (event) => {
        const { value } = event.target;
        onSearchChange(value);
    };

    const handleLocationChange = (place) => {
    console.log("Place selected:", place);

    if (place) {
        const location = place;
        console.log("Formatted location:", location);

        const filteredEvents = eventData ? eventData.filter(eventItem => {
            // Directly compare the eventItem.address (string) with location (string)
            return typeof eventItem.address === 'string' && eventItem.address.toLowerCase().includes(location);
        }) : [];

        console.log("Filtered events:", filteredEvents);
        setEventData(filteredEvents);
    }
};



    return (
        <React.Fragment>
            <Box className='filter-bar'>
                <Box className='search-field'>
                    <Search>
                        <SearchIconWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M14.9999 15.6666L12.0999 12.7666" stroke="#1C1F23" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8.33333 14.3332C11.2789 14.3332 13.6667 11.9454 13.6667 8.99984C13.6667 6.05432 11.2789 3.6665 8.33333 3.6665C5.38782 3.6665 3 6.05432 3 8.99984C3 11.9454 5.38782 14.3332 8.33333 14.3332Z" stroke="#E25F3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </SearchIconWrapper>
                        <StyledInputBase
                            value={searchQuery} onChange={handleSearchChange}
                            placeholder="Search for events..."
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                    <path d="M1.08337 0V40" stroke="#CBD7EA" />
                </svg>
                <Box className='category-field select-field'>
                    <FormControl sx={{ m: 1, minWidth: '200px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <rect x="11.5603" y="1.70605" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#1C1F23" strokeWidth="1.2" />
                            <rect x="1.8103" y="1.70605" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#E25F3C" strokeWidth="1.2" />
                            <rect x="11.5603" y="11.3311" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#1C1F23" strokeWidth="1.2" />
                            <rect x="1.8103" y="11.3311" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#1C1F23" strokeWidth="1.2" />
                        </svg>
                        <Select
                            value={category}
                            onChange={handleCategoryChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                Category
                            </MenuItem>
                            {categories.map((category) => (
                                <MenuItem key={category.id} value={category.id}>
                                    {category.category}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
                <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                    <path d="M1.08337 0V40" stroke="#CBD7EA" />
                </svg>
                <Box className='location-field select-field'>
                    <FormControl sx={{ m: 1, minWidth: '200px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M10.3332 10.5384C11.5227 10.5384 12.487 9.5741 12.487 8.38456C12.487 7.19502 11.5227 6.23071 10.3332 6.23071C9.14363 6.23071 8.17932 7.19502 8.17932 8.38456C8.17932 9.5741 9.14363 10.5384 10.3332 10.5384Z" stroke="#E25F3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15.7178 8.38462C15.7178 13.2308 10.3332 17 10.3332 17C10.3332 17 4.94861 13.2308 4.94861 8.38462C4.94861 6.95653 5.51591 5.58693 6.52573 4.57712C7.53554 3.56731 8.90514 3 10.3332 3C11.7613 3 13.1309 3.56731 14.1407 4.57712C15.1505 5.58693 15.7178 6.95653 15.7178 8.38462V8.38462Z" stroke="#1C1F23" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <MapComponent onLocationChange={handleLocationChange} />
                    </FormControl>
                </Box>
            </Box>
        </React.Fragment>
    );
}
