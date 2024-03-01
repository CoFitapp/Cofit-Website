
import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';

export default function AboutUs() {
    const [positiveExpanded, setPositiveExpanded] = useState(false);
    const [negativeExpanded1, setNegativeExpanded1] = useState(false);
    const [negativeExpanded2, setNegativeExpanded2] = useState(false);
    const [negativeExpanded3, setNegativeExpanded3] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
  
  const handlePositiveAccordionChange = () => {
    setPositiveExpanded(!positiveExpanded);
  };

  const handleNegativeAccordionChange1 = () => {
    setNegativeExpanded1(!negativeExpanded1);
  };

  const handleNegativeAccordionChange2 = () => {
    setNegativeExpanded2(!negativeExpanded2);
  };

  const handleNegativeAccordionChange3 = () => {
    setNegativeExpanded3(!negativeExpanded3);
  };
  
    return (
        <React.Fragment>

            <Box className='all-events-main'>
                <Container className='site-container'>
                    <Box className='all-events-inner aboutUs'>
                    <Box className='content-inner about-sec1'>
                            <Typography variant="span" component='span' className='about-head'>
                                ABOUT US
                            </Typography>
                            <Typography variant='h1' component='h1' className='abt-subhead'>
                               About our company
                            </Typography>
                            <Typography variant='p' component='p' className='abt-des'>
                                CoFit redefines fitness engagement by connecting enthusiasts and experts in an inspiring community. Driven by innovation and a commitment to quality, we bring you a transformative fitness experience. Join CoFit – where fitness meets community.                            
                            </Typography>
                            <Box className='buttns-box about-btn'>
                                <Button variant="contained" className='custom-buttn main'>Join CoFit</Button>
                                <Link to="/browse-events">
                                    <Button variant="contained" className='custom-buttn main w-bg'>Browse events</Button>
                                </Link>
                            </Box>
                        </Box>
                        <Box className="about-sec2">
                        <img src='images/abt.png' alt='' />
                        </Box>
                    </Box>
                    </Container>
                    <Box className='abt-second'>
                    <Container className='site-container'>
                    <Box className='first-block'>
                        <Typography variant='h2' component='h2' className='first-head-abt'>
                            OUR VALUES
                        </Typography>
                        <Typography variant='h2' component='h2' className='second-head-abt'>
                        The values that drive <br /> everything we do                           
                            </Typography>
                    </Box>
                    <Box className="Boxes-section">
                    <Box className="about-boxes">
                        <img className='abt-img' src='images/Group43955.svg' alt='' />
                        <Typography className='boxes-head'>Openness</Typography>
                        <Typography className='boxes-des'>Fostering a culture of transparency, where collaboration and ideas thrive.</Typography>

                    </Box>
                    <Box className="about-boxes">
                        <img className='abt-img' src='images/Group43954.svg' alt='' />
                        <Typography className='boxes-head'>Growth</Typography>
                        <Typography className='boxes-des'>LCommitted to constant improvement, evolving with our fitness community.</Typography>

                    </Box>
                    <Box className="about-boxes">
                        <img className='abt-img' src='images/Group4395.svg' alt='' />
                        <Typography className='boxes-head'>Quality</Typography>
                        <Typography className='boxes-des'>Prioritizing excellence in every service and experience we deliver.</Typography>

                    </Box>
                 
                    <Box className="about-boxes">
                        <img className='abt-img' src='images/Group435.svg' alt='' />
                        <Typography className='boxes-head'>User first</Typography>
                        <Typography className='boxes-des'>Centering our platform around user needs for exceptional experiences.</Typography>

                    </Box>
                    <Box className="about-boxes">
                        <img className='abt-img' src='images/Group955.svg' alt='' />
                        <Typography className='boxes-head'>Commitment</Typography>
                        <Typography className='boxes-des'>Passionate about fitness and wellness, dedicated to a healthier world.</Typography>

                    </Box>
                    <Box className="about-boxes">
                        <img className='abt-img' src='images/Group55.svg' alt='' />
                        <Typography className='boxes-head'>Ownership</Typography>
                        <Typography className='boxes-des'>Empowering decisive action aligned with our vision.</Typography>

                    </Box>
                    </Box>
                    
                    </Container>
                    </Box>
                    <Box className='freq-ques'>
                    <Container className='site-container'>
                        <Typography className='faq-head'>FAQS</Typography>
                            <Typography className='faq-des'>Frequently asked questions</Typography>
                            <Typography className='faqs-des'>Dive into our FAQ for quick, clear information on everything CoFit. From how to use our platform to tips on maximizing your fitness journey, we're here to help you every step of the way.</Typography>
                            <Box className="main-accordian">
                            <Accordion expanded={positiveExpanded} onChange={handlePositiveAccordionChange} className='accor1'>
                                <AccordionSummary expandIcon={positiveExpanded ?  <img src='images/Group1000003657.png' alt='' /> : <img src='images/Group1000003657.svg' alt='' />} aria-controls="negative-content" id="negative-content">
                                <Typography variant="h6">How do I submit a free event?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    Submitting your free event on CoFit is simple and straightforward. Follow our quick guide to get your event in front of fitness enthusiasts in no time. Start sharing your passion with the community today!
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={negativeExpanded1} onChange={handleNegativeAccordionChange1} className='accor1'>
                                <AccordionSummary expandIcon={negativeExpanded1 ? <img src='images/Group1000003657.png' alt='' /> : <img src='images/Group1000003657.svg' alt='' />} aria-controls="positive-content" id="positive-content">
                                <Typography variant="h6">What types of events can I submit?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    This is the positive content that you want to display when the accordion is expanded.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={negativeExpanded2} onChange={handleNegativeAccordionChange2} className='accor1'>
                                <AccordionSummary expandIcon={negativeExpanded2 ? <img src='images/Group1000003657.png' alt='' /> : <img src='images/Group1000003657.svg' alt='' />} aria-controls="negative-content" id="negative-content">
                                <Typography variant="h6">How do I remove an event?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    This is the negative content that you want to display when the accordion is expanded.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            <Accordion expanded={negativeExpanded3} onChange={handleNegativeAccordionChange3} className='accor1'>
                                <AccordionSummary expandIcon={negativeExpanded3 ?  <img src='images/Group1000003657.png' alt='' /> : <img src='images/Group1000003657.svg' alt='' />} aria-controls="negative-content" id="negative-content">
                                <Typography variant="h6">How does the matching process work?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                <Typography>
                                    This is the negative content that you want to display when the accordion is expanded.
                                </Typography>
                                </AccordionDetails>
                            </Accordion>
                            </Box>
                    </Container>
                    </Box>
             
            </Box>

        </React.Fragment>
    )
}
