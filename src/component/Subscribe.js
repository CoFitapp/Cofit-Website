import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const SubscribePage = () => {
  // useEffect(() => {
  //   // Create a script element
  //   const script = document.createElement('script');
    
  //   // Set the attributes for the MailerLite script
  //   script.src = 'https://assets.mailerlite.com/js/universal.js';
  //   script.async = true;

  //   // Append the script to the head of the document
  //   document.head.appendChild(script);

  //   // Define the MailerLite function
  //   window.ml = window.ml || function () { (window.ml.q = window.ml.q || []).push(arguments); };

  //   // Initialize MailerLite
  //   window.ml('account', '766520');

  //   // Clean up function to remove the script when the component is unmounted
  //   return () => {
  //     document.head.removeChild(script);
  //   };
  // }, []);

  return (
    <React.Fragment>
      <Box className='banner-main coming' sx={{ backgroundImage: 'url("images/ComingSoon2.png")' }}>
      <Container className='site-container' sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box className='banner-content coming' sx={{ width: '50%' }}>
          <Box className='content-inner'>
            <Typography variant="span" component='span'>
              COMING SOON
            </Typography>
            <Typography variant='h1' component='h1'>
              We’re preparing <br /> something great!
            </Typography>
            <Typography variant='p' component='p'>
              Our team is working hard behind the scenes to bring you <br /> an enhanced fitness experience. Get ready for <br /> innovative features, enriched community connections, <br /> and more! Stay tuned for the big reveal.
            </Typography>
            <Box className='newsletter-form sub'>
              <Box className="ml-embedded news-ltr leftmargin" data-form="mOFbW7" sx={{ ml: -2 }}></Box>
            </Box>
          </Box>
        </Box>
      </Container>
      </Box>
    </React.Fragment>
  );
};

export default SubscribePage;
