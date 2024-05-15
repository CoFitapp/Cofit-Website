// Sitemap.js
import React from 'react';
import generateSitemap from './sitemapGenerator';

const Sitemap = () => {
  const sitemap = generateSitemap();
  
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
};

export default Sitemap;
