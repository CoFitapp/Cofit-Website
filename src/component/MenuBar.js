import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export default function MenuBar() {
  const navigate = useNavigate();
  const [isMobileNavbarOpen, setIsMobileNavbarOpen] = React.useState(false);

  const handleNavigation = (route) => {
    navigate(route);
    scrollToTop();
    setIsMobileNavbarOpen(false); 
  };

  const toggleMobileNavbar = () => {
    setIsMobileNavbarOpen(!isMobileNavbarOpen);
  };

  return (
    <Box sx={{ width: '100%' }} className="main_navbar">
      <nav aria-label="main mailbox folders">
        {/* Mobile Navbar Toggle Button */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={toggleMobileNavbar}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        {/* Navbar, either for mobile or larger screens */}
        <List
          sx={{
            display: { xs: isMobileNavbarOpen ? 'flex' : 'none', md: 'flex' },
          }}
        >
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/about-us">
              <ListItemText primary="About" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/news-articles">
              <ListItemText primary="Blog" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </Box>
  );
}
