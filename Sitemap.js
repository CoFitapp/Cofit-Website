import React from 'react';
import { Link } from 'react-router-dom';

const Sitemap = () => {
  // Define your routes
  const routes = [
    { path: '/', name: 'Home' },
    { path: '/single-event/:id', name: 'Single Event' },
    { path: '/browse-events', name: 'Browse Events' },
    { path: '/about-us', name: 'About Us' },
    { path: '/news-articles', name: 'News Articles' },
    { path: '/term-conditions', name: 'Terms & Conditions' },
    { path: '/privacy-policy', name: 'Privacy Policy' },
    { path: '/subscribe-page', name: 'Subscribe Page' },
    { path: '/all-events', name: 'All Events' },
  ];

  return (
    <div>
      <h1>Sitemap</h1>
      <ul>
        {/* Map over routes and generate sitemap */}
        {routes.map(route => (
          <li key={route.path}>
            <Link to={route.path}>{route.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sitemap;
