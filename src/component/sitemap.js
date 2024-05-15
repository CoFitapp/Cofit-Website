// Sitemap.js
import React from 'react';
import generateSitemap from './SitemapGenerator';

const Sitemap = () => {
  const sitemap = generateSitemap();
  
  return (
    <div>
      <pre>{sitemap}</pre>
    </div>
  );
};

export default Sitemap;
