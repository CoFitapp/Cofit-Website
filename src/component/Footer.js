import React, { useEffect }  from 'react'
import { Box, Button, Typography } from '@mui/material'
import Container from '@mui/material/Container';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

const FooterLink = React.forwardRef((props, ref) => <Link to="/" {...props} ref={ref} onClick={scrollToTop} />);
const TermLink = React.forwardRef((props, ref) => <Link to="/term-conditions" {...props} ref={ref} onClick={scrollToTop} />);
const PrivacyLink = React.forwardRef((props, ref) => <Link to="/privacy-policy" {...props} ref={ref} onClick={scrollToTop} />);
// const AboutLink = React.forwardRef((props, ref) => <Link to="/about-us" {...props} ref={ref} onClick={scrollToTop} />);

export default function Footer() {
    // useEffect(() => {
    //     // Create a script element
    //     const script = document.createElement('script');
        
    //     // Set the attributes for the MailerLite script
    //     script.src = 'https://assets.mailerlite.com/js/universal.js';
    //     script.async = true;
    
    //     // Append the script to the head of the document
    //     document.head.appendChild(script);
    
    //     // Define the MailerLite function
    //     window.ml = window.ml || function () { (window.ml.q = window.ml.q || []).push(arguments); };
    
    //     // Initialize MailerLite
    //     window.ml('account', '766520');
    
    //     // Clean up function to remove the script when the component is unmounted
    //     return () => {
    //       document.head.removeChild(script);
    //     };
    //   }, []);
    
    return (
        <React.Fragment>
            <Box className='footer-main'>
                <Container className='site-container'>
                    <Box className='footer-inner'>

                        <Box className='footer-top'>
                            <Box className='footer-logo'>
                                <img src='images/cofit-logo.svg' alt='' />
                            </Box>
                            <Box className='footer-buttns'>
                                <Button variant="contained" className='custom-buttn main'>Post a premium event</Button>
                                <Button variant="contained" className='custom-buttn main w-bg'>Post a free event</Button>
                            </Box>
                        </Box>

                        <Box className='footer-middle'>
                            <Box className='footer-menus'>
                                <Box className='main-menu'>
                                    <Typography variant='h3' component='h3' className='menu-title'>
                                        Main pages
                                    </Typography>
                                    <nav>
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Home" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="About" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Event" />
                                                </ListItemButton>
                                            </ListItem>
                                            {/* <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Event single" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Event location" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Submit a free event" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Submit a featured event" />
                                                </ListItemButton>
                                            </ListItem> */}
                                        </List>
                                    </nav>
                                </Box>
                                <Box className='account-links'>
                                    <Typography variant='h3' component='h3' className='menu-title'>
                                        Your Account
                                    </Typography>
                                    <nav>
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Sign up" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Log in" />
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
                                <Box className='footer-links'>
                                <Box className='single-links' style={{ display: 'flex', justifyContent: 'space-between', marginRight: '40px' }}>
                                    <nav>
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Contact" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Blog" />
                                                </ListItemButton>
                                            </ListItem>
                                            {/* <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Blog category" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Blog post" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                            <ListItemButton component={FooterLink}>
                                                <ListItemText primary="Coming soon" />
                                            </ListItemButton>
                                            </ListItem> */}
                                        </List>
                                    </nav>
                                </Box>
                                <Box className='social-links'>
                                    <Typography variant='h3' component='h3' className='menu-title'>
                                        Follow us
                                    </Typography>
                                    <nav>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect width="24" height="24" rx="8" fill="#E25F3C" />
                                                        <path d="M12.9759 18V12.5262H14.9057L15.1947 10.393H12.9759V9.03102C12.9759 8.4134 13.156 7.99252 14.0863 7.99252L15.2728 7.99199V6.08405C15.0675 6.0581 14.3632 6 13.5439 6C11.8332 6 10.662 6.99412 10.662 8.81982V10.393H8.72729V12.5262H10.662V17.9999H12.9759V18Z" fill="white" />
                                                    </svg>
                                                </ListItemIcon>
                                                <ListItemText primary="Facebook" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect width="24" height="24" rx="8" fill="#E25F3C" />
                                                        <path d="M14.018 7.13424V7.13208H14.5807L14.7863 7.17314C14.9234 7.1998 15.0478 7.23473 15.1596 7.27796C15.2714 7.32118 15.3796 7.37161 15.4842 7.42923C15.5888 7.48686 15.6837 7.54558 15.7688 7.60537C15.8532 7.66444 15.929 7.72711 15.996 7.79338C16.0624 7.86038 16.1659 7.87767 16.3066 7.84525C16.4473 7.81283 16.5987 7.76781 16.761 7.71018C16.9234 7.65255 17.0839 7.58772 17.2426 7.51568C17.4013 7.44364 17.4979 7.3979 17.5326 7.37845C17.5665 7.35828 17.5845 7.34748 17.5867 7.34603L17.5888 7.34279L17.5996 7.33739L17.6105 7.33198L17.6213 7.32658L17.6321 7.32118L17.6343 7.31794L17.6375 7.31578L17.6408 7.31361L17.6429 7.31037L17.6537 7.30713L17.6646 7.30497L17.6624 7.32118L17.6592 7.33739L17.6537 7.35359L17.6483 7.3698L17.6429 7.38061L17.6375 7.39141L17.6321 7.40762C17.6285 7.41843 17.6249 7.43283 17.6213 7.45085C17.6177 7.46886 17.5834 7.54089 17.5185 7.66696C17.4536 7.79303 17.3724 7.92089 17.275 8.05056C17.1776 8.18022 17.0904 8.27819 17.0132 8.34447C16.9353 8.41146 16.8837 8.45828 16.8584 8.48494C16.8332 8.51231 16.8025 8.53752 16.7665 8.56058L16.7124 8.59624L16.7015 8.60164L16.6907 8.60705L16.6886 8.61029L16.6853 8.61245L16.6821 8.61461L16.6799 8.61785L16.6691 8.62325L16.6583 8.62866L16.6561 8.6319L16.6528 8.63406L16.6496 8.63622L16.6474 8.63946L16.6453 8.6427L16.642 8.64486L16.6388 8.64703L16.6366 8.65027H16.6907L16.9937 8.58543C17.1957 8.54221 17.3886 8.48999 17.5726 8.42875L17.8647 8.3315L17.8972 8.3207L17.9134 8.31529L17.9243 8.30989L17.9351 8.30449L17.9459 8.29909L17.9567 8.29368L17.9784 8.29044L18 8.28828V8.30989L17.9946 8.31205L17.9892 8.31529L17.987 8.31854L17.9838 8.3207L17.9805 8.32286L17.9784 8.3261L17.9762 8.32934L17.9729 8.3315L17.9697 8.33366L17.9675 8.3369L17.9654 8.34015L17.9621 8.34231L17.9567 8.35311L17.9513 8.36392L17.9481 8.36608C17.9466 8.36824 17.9008 8.42947 17.8106 8.54978C17.7205 8.6708 17.6718 8.73202 17.6646 8.73347C17.6574 8.73563 17.6472 8.74644 17.6343 8.76589C17.622 8.78605 17.5455 8.86638 17.4049 9.00685C17.2642 9.14733 17.1264 9.2723 16.9915 9.38181C16.8559 9.49202 16.7874 9.62745 16.7859 9.7881C16.7838 9.94802 16.7755 10.1288 16.761 10.3305C16.7466 10.5322 16.7196 10.7502 16.6799 10.9843C16.6402 11.2184 16.5789 11.4831 16.4959 11.7785C16.413 12.0738 16.312 12.362 16.193 12.6429C16.0739 12.9239 15.9495 13.176 15.8197 13.3993C15.6898 13.6226 15.5708 13.8117 15.4626 13.9666C15.3544 14.1215 15.2444 14.2674 15.1326 14.4043C15.0207 14.5411 14.8794 14.6953 14.7084 14.8667C14.5367 15.0375 14.4429 15.1311 14.4271 15.1477C14.4105 15.1635 14.3398 15.2226 14.215 15.3249C14.0909 15.4279 13.9574 15.5309 13.8146 15.6339C13.6725 15.7362 13.5419 15.8216 13.4229 15.89C13.3039 15.9585 13.1603 16.0366 12.9922 16.1245C12.8249 16.2131 12.6438 16.2952 12.4491 16.3709C12.2543 16.4465 12.0487 16.5167 11.8323 16.5816C11.6159 16.6464 11.4067 16.6968 11.2047 16.7329C11.0027 16.7689 10.7737 16.7995 10.5176 16.8247L10.1335 16.8625V16.8679H9.43012V16.8625L9.33814 16.8571C9.27683 16.8535 9.22633 16.8499 9.18665 16.8463C9.14699 16.8427 8.99729 16.8229 8.7376 16.7869C8.47791 16.7509 8.27412 16.7148 8.12624 16.6788C7.97837 16.6428 7.75834 16.5744 7.46619 16.4735C7.17403 16.3727 6.92408 16.2707 6.71632 16.1677C6.50929 16.0654 6.37944 16.0006 6.32678 15.9732C6.27484 15.9466 6.21641 15.9134 6.15149 15.8738L6.0541 15.8144L6.05195 15.8111L6.04869 15.809L6.04545 15.8068L6.04328 15.8036L6.03246 15.7982L6.02164 15.7928L6.01949 15.7895L6.01623 15.7874L6.01298 15.7852L6.01082 15.782L6.00867 15.7787L6.00541 15.7766H6V15.755L6.01082 15.7571L6.02164 15.7604L6.07033 15.7658C6.1028 15.7694 6.19117 15.7748 6.33544 15.782C6.47972 15.7892 6.633 15.7892 6.79531 15.782C6.95762 15.7748 7.12354 15.7586 7.29306 15.7333C7.46258 15.7081 7.66276 15.6649 7.8936 15.6037C8.12444 15.5424 8.33653 15.4697 8.52986 15.3854C8.72246 15.3004 8.85952 15.237 8.94104 15.1952C9.02183 15.1542 9.14518 15.0778 9.31109 14.9661L9.55996 14.7987L9.56213 14.7954L9.56537 14.7933L9.56863 14.7911L9.57078 14.7879L9.57295 14.7846L9.57619 14.7824L9.57945 14.7803L9.58161 14.777L9.59243 14.7738L9.60325 14.7716L9.60541 14.7608L9.60866 14.75L9.61191 14.7479L9.61407 14.7446L9.5275 14.7392C9.4698 14.7356 9.41389 14.732 9.35978 14.7284C9.30568 14.7248 9.22092 14.7086 9.1055 14.6798C8.99009 14.651 8.86565 14.6078 8.73219 14.5501C8.59874 14.4925 8.46889 14.4241 8.34265 14.3448C8.21642 14.2656 8.12516 14.1997 8.06889 14.1471C8.01335 14.0952 7.94121 14.0217 7.85248 13.9266C7.76448 13.8308 7.68801 13.7325 7.62308 13.6317C7.55816 13.5308 7.49613 13.4144 7.43698 13.2826L7.34716 13.086L7.34175 13.0698L7.33634 13.0536L7.33309 13.0427L7.33093 13.0319L7.34716 13.0341L7.36339 13.0373L7.48242 13.0536C7.56177 13.0644 7.68621 13.068 7.85573 13.0644C8.02525 13.0608 8.14247 13.0536 8.20739 13.0427C8.27232 13.0319 8.312 13.0247 8.32642 13.0211L8.34806 13.0157L8.37511 13.0103L8.40216 13.0049L8.40433 13.0017L8.40757 12.9995L8.41083 12.9974L8.41298 12.9941L8.39134 12.9887L8.3697 12.9833L8.34806 12.9779L8.32642 12.9725L8.30478 12.9671C8.29036 12.9635 8.26511 12.9563 8.22904 12.9455C8.19297 12.9347 8.09559 12.8951 7.93688 12.8266C7.77819 12.7582 7.65194 12.6916 7.55816 12.6267C7.46415 12.5617 7.3745 12.4906 7.28981 12.4139C7.20541 12.3361 7.11272 12.2359 7.01172 12.1135C6.91073 11.991 6.82057 11.8487 6.74121 11.6866C6.66186 11.5246 6.60235 11.3697 6.56267 11.222C6.52315 11.0752 6.49708 10.9251 6.48477 10.7736L6.46528 10.5467L6.4761 10.5488L6.48693 10.5521L6.49775 10.5575L6.50857 10.5629L6.51939 10.5683L6.53021 10.5737L6.69793 10.6493C6.80975 10.6997 6.94861 10.743 7.11452 10.779C7.28044 10.815 7.37962 10.8348 7.41208 10.8384L7.46078 10.8438H7.55816L7.55601 10.8406L7.55275 10.8384L7.5495 10.8362L7.54734 10.833L7.54519 10.8298L7.54193 10.8276L7.53868 10.8254L7.53652 10.8222L7.5257 10.8168L7.51488 10.8114L7.51272 10.8081L7.50947 10.806L7.50622 10.8038L7.50406 10.8006L7.49324 10.7952L7.48242 10.7898L7.48026 10.7865C7.4781 10.7851 7.44708 10.762 7.3872 10.7174C7.32804 10.672 7.26601 10.6133 7.20108 10.5412C7.13616 10.4692 7.07124 10.3936 7.00631 10.3143C6.94127 10.2349 6.88334 10.1499 6.83318 10.0604C6.78269 9.97036 6.72931 9.85581 6.67304 9.71678C6.6175 9.57847 6.5753 9.43908 6.54644 9.2986C6.51759 9.15813 6.50136 9.01946 6.49775 8.88259C6.49414 8.74571 6.49775 8.62866 6.50857 8.53141C6.51939 8.43416 6.54103 8.32429 6.57349 8.20183C6.60595 8.07937 6.65285 7.94971 6.71416 7.81283L6.80613 7.60753L6.81154 7.59132L6.81695 7.57511L6.82021 7.57295L6.82236 7.56971L6.82453 7.56647L6.82777 7.5643L6.83103 7.56647L6.83318 7.56971L6.83535 7.57295L6.83859 7.57511L6.84185 7.57727L6.844 7.58051L6.84617 7.58375L6.84941 7.58592L6.85482 7.59672L6.86023 7.60753L6.86349 7.60969L6.86564 7.61293L7.01172 7.77501C7.10911 7.88307 7.22453 8.00374 7.35798 8.137C7.49144 8.27027 7.56538 8.33942 7.5798 8.34447C7.59424 8.35023 7.61226 8.36679 7.6339 8.39417C7.65555 8.42083 7.72769 8.48459 7.85032 8.58543C7.97296 8.68628 8.13346 8.80335 8.33183 8.93662C8.53021 9.06988 8.75023 9.20135 8.99188 9.33102C9.23355 9.46069 9.49324 9.57774 9.77096 9.6822C10.0487 9.78666 10.2435 9.85509 10.3553 9.88751C10.4671 9.91993 10.6583 9.96134 10.9288 10.0118C11.1993 10.0622 11.4031 10.0946 11.5401 10.109C11.6772 10.1234 11.771 10.1317 11.8215 10.1339L11.8972 10.136L11.8951 10.1198L11.8918 10.1036L11.8702 9.96855C11.8557 9.87851 11.8485 9.75244 11.8485 9.59035C11.8485 9.42827 11.8611 9.2788 11.8864 9.14192C11.9116 9.00505 11.9495 8.86638 12 8.72591C12.0505 8.58543 12.0999 8.47269 12.1482 8.38769C12.1973 8.30341 12.2615 8.20724 12.3408 8.09918C12.4202 7.99113 12.523 7.87947 12.6492 7.76421C12.7755 7.64894 12.9197 7.54629 13.0821 7.45625C13.2444 7.36621 13.3941 7.29776 13.5311 7.25094C13.6682 7.20412 13.7836 7.1735 13.8774 7.15909C13.9711 7.14469 14.018 7.1364 14.018 7.13424Z" fill="white" />
                                                    </svg>
                                                </ListItemIcon>
                                                <ListItemText primary="Twitter" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect width="24" height="24" rx="8" fill="#E25F3C" />
                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 12C6 9.60324 6 8.40486 6.57113 7.5417C6.82616 7.15626 7.15626 6.82616 7.5417 6.57113C8.40486 6 9.60324 6 12 6C14.3968 6 15.5951 6 16.4583 6.57113C16.8437 6.82616 17.1738 7.15626 17.4289 7.5417C18 8.40486 18 9.60324 18 12C18 14.3968 18 15.5951 17.4289 16.4583C17.1738 16.8437 16.8437 17.1738 16.4583 17.4289C15.5951 18 14.3968 18 12 18C9.60324 18 8.40486 18 7.5417 17.4289C7.15626 17.1738 6.82616 16.8437 6.57113 16.4583C6 15.5951 6 14.3968 6 12ZM15.1062 12.0002C15.1062 13.7157 13.7154 15.1064 11.9999 15.1064C10.2843 15.1064 8.89362 13.7157 8.89362 12.0002C8.89362 10.2846 10.2843 8.89388 11.9999 8.89388C13.7154 8.89388 15.1062 10.2846 15.1062 12.0002ZM11.9999 14.0555C13.135 14.0555 14.0552 13.1353 14.0552 12.0002C14.0552 10.865 13.135 9.94482 11.9999 9.94482C10.8648 9.94482 9.94456 10.865 9.94456 12.0002C9.94456 13.1353 10.8648 14.0555 11.9999 14.0555ZM15.2289 9.4677C15.632 9.4677 15.9587 9.14092 15.9587 8.73782C15.9587 8.33471 15.632 8.00793 15.2289 8.00793C14.8257 8.00793 14.499 8.33471 14.499 8.73782C14.499 9.14092 14.8257 9.4677 15.2289 9.4677Z" fill="white" />
                                                    </svg>
                                                </ListItemIcon>
                                                <ListItemText primary="Instagram" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect width="24" height="24" rx="8" fill="#E25F3C" />
                                                        <path d="M6 7.61321C6 7.2284 6.13514 6.91094 6.40541 6.66082C6.67567 6.4107 7.02703 6.28564 7.45946 6.28564C7.88417 6.28564 8.2278 6.40877 8.49035 6.65505C8.76061 6.90902 8.89575 7.23994 8.89575 7.64784C8.89575 8.01725 8.76448 8.32508 8.50193 8.57136C8.23166 8.82533 7.87645 8.95231 7.43629 8.95231H7.42471C7 8.95231 6.65637 8.82533 6.39382 8.57136C6.13127 8.31739 6 7.998 6 7.61321ZM6.15058 17.7142V10.0028H8.72201V17.7142H6.15058ZM10.1467 17.7142H12.7181V13.4083C12.7181 13.1389 12.749 12.9311 12.8108 12.7849C12.9189 12.5233 13.083 12.302 13.3031 12.1211C13.5232 11.9403 13.7992 11.8499 14.1313 11.8499C14.9961 11.8499 15.4286 12.4309 15.4286 13.593V17.7142H18V13.2929C18 12.1538 17.7297 11.29 17.1892 10.7012C16.6486 10.1125 15.9344 9.81811 15.0463 9.81811C14.0502 9.81811 13.2741 10.2452 12.7181 11.0995V11.1226H12.7066L12.7181 11.0995V10.0028H10.1467C10.1622 10.2491 10.1699 11.0148 10.1699 12.3001C10.1699 13.5853 10.1622 15.39 10.1467 17.7142Z" fill="white" />
                                                    </svg>
                                                </ListItemIcon>
                                                <ListItemText primary="LinkedIn" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                        <rect width="24" height="24" rx="8" fill="#E25F3C" />
                                                        <path d="M12.2925 16.6533L9.58433 16.6027C8.7075 16.585 7.82849 16.6202 6.96885 16.4375C5.66114 16.1645 5.5685 14.8259 5.47156 13.7031C5.33798 12.1245 5.38969 10.5173 5.64176 8.95192C5.78407 8.07358 6.34409 7.54947 7.21014 7.49243C10.1337 7.28545 13.0767 7.30998 15.9938 7.40654C16.3019 7.4154 16.6121 7.46378 16.9159 7.51885C18.4154 7.78747 18.452 9.3044 18.5492 10.5814C18.6461 11.8715 18.6052 13.1683 18.4199 14.4497C18.2713 15.5106 17.9868 16.4003 16.7866 16.4862C15.2828 16.5985 13.8134 16.6889 12.3054 16.6601C12.3054 16.6533 12.2968 16.6533 12.2925 16.6533ZM10.7003 13.9673C11.8336 13.3024 12.9453 12.6485 14.072 11.988C12.9367 11.3231 11.8271 10.6692 10.7003 10.0087V13.9673Z" fill="white" />
                                                    </svg>
                                                </ListItemIcon>
                                                <ListItemText primary="YouTube" />
                                            </ListItemButton>
                                        </ListItem>
                                    </nav>
                                </Box>
                            </Box>
                                {/* <Box className='discover'>
                                    <Typography variant='h3' component='h3' className='menu-title'>
                                        Discover
                                    </Typography>
                                    <nav>
                                        <List>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Groups" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Calendar" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Topics" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Events" />
                                                </ListItemButton>
                                            </ListItem>
                                            <ListItem disablePadding>
                                                <ListItemButton>
                                                    <ListItemText primary="Make Friends" />
                                                </ListItemButton>
                                            </ListItem>
                                        </List>
                                    </nav>
                                </Box> */}
                            </Box>
                          
                        </Box>

                        <Box className='footer-bottom'>

                            <Box className='newsletter'>
                                <Box className='newsletter-text'>
                                    <Box className='envelope-img'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="65" viewBox="0 0 68 65" fill="none">
                                            <rect x="0.333984" y="0.0742188" width="67.3684" height="64" rx="4" fill="#FFEFF0" />
                                            <path d="M19.891 25.8339C18.7331 26.5672 18.0312 27.8425 18.0312 29.2131V43.4648C18.0312 43.8005 18.1716 44.1224 18.4215 44.3598C18.6713 44.5971 19.0102 44.7305 19.3635 44.7305H48.6727C49.026 44.7305 49.3649 44.5971 49.6147 44.3598C49.8646 44.1224 50.0049 43.8005 50.0049 43.4648V29.2131C50.0049 27.8425 49.3031 26.5672 48.1451 25.8339L36.1583 18.2422C34.8515 17.4146 33.1847 17.4146 31.8779 18.2422L19.891 25.8339Z" fill="#F8F8FB" stroke="#E25F3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M31.104 35.8711L18.4478 44.3666" stroke="#E25F3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M49.5884 44.3666L36.9321 35.8711" stroke="#E25F3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M50.0049 27.0117L37.9487 35.1823C37.2864 35.6312 36.5047 35.8711 35.7046 35.8711H32.3315C31.5315 35.8711 30.7498 35.6312 30.0875 35.1823L18.0312 27.0117" stroke="#E25F3C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </Box>
                                    <Box className='content'>
                                        <Typography variant='h4' component='h4' className='title'>
                                            Subscribe to our newsletter
                                        </Typography>
                                        <Typography variant='p' component='p' className='sub-title'>
                                            Join our community and never miss out on what's new and trending in the world of fitness with CoFit.
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box className='newsletter-form sub foot'>
                                    <Box>
                                        {/* <TextField id="outlined-basic" placeholder='Enter your email...' /> */}
                                        {/* <Button variant="contained" className='custom-buttn main'>Subscribe</Button> */}
                                        <Box className="ml-embedded news-ltr leftmargin" data-form="mOFbW7" sx={{ml: -2}}></Box>
                                    </Box>
                                </Box>
                            </Box>
                            <Box className='footer-copywrite'>
                                <Typography variant='span' component='span' className='copywrite-text'>
                                    © 2023 CoFit
                                </Typography>
                                <nav>
                                    <List>
                                        <ListItem disablePadding>
                                            <ListItemButton >
                                                <ListItemText primary="Terms of Service" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton >
                                                <ListItemText primary="Privacy Policy" />
                                            </ListItemButton>
                                        </ListItem>
                                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemText primary="Cookie Policy" />
                                            </ListItemButton>
                                        </ListItem>
                                    </List>
                                </nav>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </React.Fragment>
    )
}
