import React from 'react'
import { Box, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

// const FooterLink = React.forwardRef((props, ref) => <Link to="/" {...props} ref={ref} onClick={scrollToTop} />);
const TermLink = React.forwardRef((props, ref) => <Link to="/term-conditions" {...props} ref={ref} onClick={scrollToTop} />);
const PrivacyLink = React.forwardRef((props, ref) => <Link to="/privacy-policy" {...props} ref={ref} onClick={scrollToTop} />);

export default function SubscribePageFooter() {
    return (
        <React.Fragment>
            <Box className='footer-main'>
                <Container className='site-container'>
                <Box className='footer-inner' sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box className='footer-copywrite'>
                        <Box className='footer-logo logo1'>
                        <img src='images/cofit-logo.svg' alt='' />
                        </Box>
                    </Box>

                    <Box className='footer-copywrite'>
                        <Typography variant='span' component='span' className='copywrite-text'>
                        © 2023 CoFit
                        </Typography>
                        <nav>
                        <List>
                        <ListItem disablePadding>
                            <ListItemButton component={TermLink}>
                                <ListItemText primary="Terms of Service" />
                            </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton component={PrivacyLink}>
                                    <ListItemText primary="Privacy Policy" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemText primary="Cookie Policy" />
                                </ListItemButton>
                            </ListItem>
                            <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemText primary="Help" />
                            </ListItemButton>
                            </ListItem>
                        </List>
                        </nav>
                    </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}
