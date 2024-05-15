
import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import { Helmet } from "react-helmet";

export default function TermsConditions() {
    const location = useLocation();

  const canonicalUrl = `${window.location.origin}${location.pathname}`;
  
    return (
        <React.Fragment>
            <Helmet>
                <link rel="canonical" id="canonicalLink" href={canonicalUrl} />

            </Helmet>
            <Box className='all-events-main'>
                <Container className='site-container'>
                    <Box className='all-events-inner aboutUs terms'>
                    <Box className='content-inner conditions'>
                            <Typography variant="h4" component='span' className='about-head'>
                                Privacy & POLICY
                            </Typography>
                            {/* <Typography variant='h1' component='h1' className='abt-subhead'>
                               About our company
                            </Typography> */}
                            <Typography variant='body1' component='p' className='abt-des term'>
                                CoFit Privacy Policy <br /> <br />
                                Last Updated: 1/22/2024 <br /> <br />
                                Welcome to CoFit! Protecting your privacy is critically important to us. This Privacy Policy
                                explains how CoFit, Inc. (“CoFit”, “we”, “us”, “our”) collects, uses, shares, and safeguards your
                                personal information when you use our website, services, and mobile application (collectively,
                                “Services”).
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                1. Information Collection
                                </Typography>
                                    ● 1.1 Personal Information: We collect information you provide directly to us, such as when
                                    you create an account, register for an event, or contact us. This may include your name,
                                    email address, phone number, and payment information.<br />
                                    ● 1.2 Usage Data: We automatically collect information about your interactions with our
                                    Services, like your IP address, browser type, device information, and pages visited.<br />
                                    ● 1.3 Cookies and Tracking Technologies: We use cookies and similar technologies to
                                    track your activities on our Services and to store certain information.<br />
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                2. Use of Information
                                </Typography>
                                    ● 2.1 Providing Services: We use your information to operate, maintain, and provide the
                                    features of our Services.<br />
                                    ● 2.2 Communication: We may use your information to communicate with you, such as to
                                    send updates about events or respond to inquiries.<br />
                                    ● 2.3 Improvements: We use the information to understand how our Services are used and
                                    to improve them.<br />
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                3. Sharing of Information
                                </Typography>
                                    ● 3.1 Service Providers: We may share your information with third-party vendors who
                                    assist us in operating our Services, such as payment processors or hosting services.<br />
                                    ● 3.2 Compliance and Protection: We may disclose your information if required by law or if
                                    we believe that such action is necessary to comply with legal processes or to protect the
                                    rights, property, or safety of CoFit, our users, or others.<br />
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                4. Data Security
                                </Typography>
                                We implement appropriate security measures to protect your personal information from
                                unauthorized access, alteration, disclosure, or destruction.
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                5. Your Choices
                                </Typography>
                                    ● 5.1 Account Information: You may update, correct, or delete your account information at
                                    any time.<br />
                                    ● 5.2 Cookies: You can set your browser to not accept cookies, but this may limit your
                                ability to use certain features of our Services.<br />
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                6. Children’s Privacy
                                </Typography>
                                Our Services are not intended for individuals under the age of 13. We do not knowingly collect
                                personal information from children under 13.
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                7. Changes to This Privacy Policy
                                </Typography>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by
                                posting the new Privacy Policy on this page.
                                <br /> <br />
                                <Typography variant='h5' component='h1'>
                                8. Contact Us
                                </Typography>
                                If you have any questions about this Privacy Policy, please contact us at [CoFit contact us page
                                link].
                                <br /> <br />
                               
                            </Typography>
                          
                        </Box>
                        
                    </Box>
                    </Container>
                   
             
            </Box>

        </React.Fragment>
    )
}
