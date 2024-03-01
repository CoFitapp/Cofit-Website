import React, { useState, useEffect } from 'react';
import './App.css';
import "@fontsource/inter";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from './pages/AuthLayout'
import Home from "./pages/Home";
import SingleEvent from "./component/singleEvent";
import BrowseEvents from "./component/BrowseEvents";
import AboutUs from "./component/AboutUs";
import NewsArticlePage from "./component/NewsArticlePage";
import TermsConditions from "./component/TermsConditions";
import PrivacyPolicy from "./component/PrivacyPolicy";
import SubscribePage from "./component/Subscribe";
import AllEvents from "./component/AllEvents";

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    
    script.src = 'https://assets.mailerlite.com/js/universal.js';
    script.async = true;

    document.head.appendChild(script);

    window.ml = window.ml || function () { (window.ml.q = window.ml.q || []).push(arguments); };

    window.ml('account', '766520');

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [paginateState, setPaginateState] = useState("next")

  const handlePage = (action) => {
    if (action === "previous") {
        setCurrentPage(currentPage - 1);
    setPaginateState("previous")
        } else if (action === "next") {
            setCurrentPage(currentPage + 1);

    setPaginateState("next")
        }
    };

  const pagination = (page) => {
    setCurrentPage(page);
    console.log("current Page", page);
  }

  const SetTotalPages = (pages)=>{
    setTotalPages(pages)
    console.log("Total pages here...",pages)
  }
  return (
    <BrowserRouter>
      <AuthLayout>
        <Routes>
          {/* <Route path="/home" element={<Home handlePage={handlePage} currentPage={currentPage} pagination={pagination} SetTotalPages={SetTotalPages} totalPages={totalPages}/>}></Route> 
          <Route index element={<SubscribePage />}></Route> */}
          <Route index element={<Home handlePage={handlePage} currentPage={currentPage} pagination={pagination} SetTotalPages={SetTotalPages} totalPages={totalPages} />}></Route>
          <Route path="/single-event/:id" element={<SingleEvent handlePage={handlePage} currentPage={currentPage} pagination={pagination} SetTotalPages={SetTotalPages} totalPages={totalPages} />} />
          <Route path="/browse-events" element={<BrowseEvents handlePage={handlePage} currentPage={currentPage} pagination={pagination} SetTotalPages={SetTotalPages} totalPages={totalPages} paginateState={paginateState} />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/news-articles" element={<NewsArticlePage />} />
          <Route path="/term-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/subscribe-page" element={<SubscribePage />} />
          <Route path="/all-events" element={<AllEvents />} />
        </Routes>
      </AuthLayout>
    </BrowserRouter>
  );
}

export default App;
