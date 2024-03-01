import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box } from '@mui/material'
import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';

const hereAPIKey = 'UliYPibdvbwYfWNQJZaZx-9ax-g0YVZyOGCGB6B_ElQ';

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
        // vertical padding + font size from searchIcon
        width: '100%',
    },
}));



export default function EventsFiletrBar({ searchQuery, onSearchChange }) {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('/api/get-event-category')
            .then((response) => response.json())
            .then((data) => {
                // Assuming the API response is an object with a "data" property
                setCategories(data.data || []);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });

    }, []);



    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };



    const handleSearchChange = (event) => {
        const { value } = event.target;
        onSearchChange(value);
        console.log("search field", value)
    };

    const [locations, setLocations] = useState([]);
    const [searchText, setSearchText] = useState('');

    const apiKey = 'UliYPibdvbwYfWNQJZaZx-9ax-g0YVZyOGCGB6B_ElQ';
    const latitude = 48.86926; // Example latitude
    const longitude = 2.3321; // Example longitude
    
    const url = `https://geocode.search.hereapi.com/v1/geocode?q=*+at+${latitude},${longitude}&apiKey=${apiKey}`;
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the data containing all locations around the specified coordinates
        console.log(data);
        setLocations(data.items || []);
      })
      .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
      });
    





    return (
        <React.Fragment>
            <Box className='filter-bar'>
                <Box className='search-field'>
                    <Search>
                        <SearchIconWrapper>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                                <path d="M14.9999 15.6666L12.0999 12.7666" stroke="#1C1F23" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M8.33333 14.3332C11.2789 14.3332 13.6667 11.9454 13.6667 8.99984C13.6667 6.05432 11.2789 3.6665 8.33333 3.6665C5.38782 3.6665 3 6.05432 3 8.99984C3 11.9454 5.38782 14.3332 8.33333 14.3332Z" stroke="#E25F3C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
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
                            <rect x="11.5603" y="1.70605" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#1C1F23" stroke-width="1.2" />
                            <rect x="1.8103" y="1.70605" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#E25F3C" stroke-width="1.2" />
                            <rect x="11.5603" y="11.3311" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#1C1F23" stroke-width="1.2" />
                            <rect x="1.8103" y="11.3311" width="6.96283" height="6.96283" rx="1" fill="white" stroke="#1C1F23" stroke-width="1.2" />
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
                        <Autocomplete
                            value={null}
                            onChange={(event, newValue) => {
                                console.log(newValue); // Handle selected location
                            }}
                            options={locations}
                            getOptionLabel={(option) => option.address.label}
                            renderInput={(params) => (
                                <InputBase
                                    {...params}
                                    placeholder="Location"
                                    inputProps={{ ...params.inputProps, 'aria-label': 'Location' }}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            )}
                        />

                    </FormControl>
                </Box>

                {/* <svg xmlns="http://www.w3.org/2000/svg" width="2" height="40" viewBox="0 0 2 40" fill="none">
                    <path d="M1.08337 0V40" stroke="#CBD7EA" />
                </svg> */}
                {/* <Box className='type-field select-field'>
                    <FormControl sx={{ m: 1, minWidth: '200px' }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M11.375 5L15.75 9.375" stroke="#E25F3C" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M7.99219 16.8749H4.5C4.33424 16.8749 4.17527 16.8091 4.05806 16.6919C3.94085 16.5747 3.875 16.4157 3.875 16.2499V12.7577C3.87472 12.6766 3.89044 12.5962 3.92128 12.5211C3.95211 12.446 3.99745 12.3778 4.05469 12.3202L13.4297 2.94524C13.4878 2.88619 13.5572 2.83929 13.6336 2.80728C13.7101 2.77527 13.7921 2.75879 13.875 2.75879C13.9579 2.75879 14.0399 2.77527 14.1164 2.80728C14.1928 2.83929 14.2622 2.88619 14.3203 2.94524L17.8047 6.42962C17.8637 6.48777 17.9106 6.5571 17.9427 6.63355C17.9747 6.71 17.9911 6.79205 17.9911 6.87493C17.9911 6.95781 17.9747 7.03987 17.9427 7.11632C17.9106 7.19277 17.8637 7.26209 17.8047 7.32024L8.42969 16.6952C8.37216 16.7525 8.30391 16.7978 8.22884 16.8287C8.15376 16.8595 8.07335 16.8752 7.99219 16.8749V16.8749Z" stroke="#1C1F23" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <Select
                            value={age}
                            onChange={handleChange}
                            displayEmpty
                            inputProps={{ 'aria-label': 'Without label' }}
                        >
                            <MenuItem value="">
                                Type
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </Box> */}
            </Box>
        </React.Fragment>
    )
}
