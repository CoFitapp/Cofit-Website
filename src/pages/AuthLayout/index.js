import React from 'react';
import Header from '../../component/Header';
import Footer from '../../component/Footer';
import SubscribePageFooter from '../../component/SubscribePageFooter';
import { useLocation } from 'react-router-dom';
import ComingSoonHeader from '../../component/ComingSoonHeader';
import Subscribe from '../../component/Subscribe'

export default function Index({ children }) {
    
    const { pathname } = useLocation();
    return (
        <React.Fragment>
            {/* <Header /> */}
            {pathname == '/subscribe-page' ? <ComingSoonHeader /> : <Header />}
                {children}
            {pathname == '/subscribe-page' ? <SubscribePageFooter /> : <Footer />}

        </React.Fragment>
    );
}
