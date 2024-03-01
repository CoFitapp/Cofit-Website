import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useNavigate } from "react-router-dom";
import MenuBar from './MenuBar';
import Button from '@mui/material/Button';


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);


    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const navigate = useNavigate();
    const Index = () => {
        navigate("/");
    };

    return (
        <AppBar position="static" className='header_main' id='header-section'>
            <Container className='site-container'>
                <Toolbar disableGutters>

                    <Box component="a" variant="a" className="main_logo" onClick={Index}
                        sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <img src="images/cofit-logo.svg" className='logo' alt='' />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <MenuBar />
                        </Menu>
                    </Box>

                    <Box component="a" variant="a" className="mobile-log" onClick={Index}
                        sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <img src="images/cofit-logo.svg" className='logo-mobile' />
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <MenuBar />
                    </Box>

                    <Box sx={{ flexGrow: 0 }} className='login-butns'>
                        <Button variant="contained" className='custom-buttn main bg-less'>Log in</Button>
                        <Button variant="contained" className='custom-buttn main'>Sign up</Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;