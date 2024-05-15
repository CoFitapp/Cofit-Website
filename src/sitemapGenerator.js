import React from 'react';
import { BrowserRouter } from 'react-router-dom'; // Update import
import App from './App';
import ReactDOMServer from 'react-dom/server';

function generateSitemap() {
    console.log("sitemap Generated");
  const context = {};
  const app = (
    <BrowserRouter location="/" context={context}>
      <App />
    </BrowserRouter>
  );
  // Render the app to string to extract URLs
  const appString = ReactDOMServer.renderToString(app);

  // Extract URLs from appString and generate sitemap XML
  const urls = [
    '/',
    '/browse-events',
    '/about-us',
    '/news-articles',
    '/term-conditions',
    '/privacy-policy',
    '/subscribe-page',
    '/all-events',
    // Add more static routes here as needed
  ];

  // Assuming you have a function to fetch dynamic IDs, replace this with your actual implementation
  const dynamicIds = [
    'yoga-meditation-for-holistic-health',
    'yoga-for-healthy-health',
    'yoga-with-a-focus-on-health',
    'chandigarh-7km-marathon',
    'punjab-12km-marathon'
  ]; // Fetch your dynamic IDs here

  // Generate dynamic URLs
  dynamicIds.forEach(id => {
    urls.push(`/single-event/${id}`);
  });

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.map(url => `<url><loc>${url}</loc></url>`).join('\n')}
</urlset>`;

  // Create a Blob with the sitemap content
  const blob = new Blob([sitemap], { type: 'application/xml' });

  // Create a URL for the Blob
  const url = URL.createObjectURL(blob);

  // Create a link element to trigger the download
  const link = document.createElement('a');
  link.href = url;
  link.download = 'sitemap.xml';

  // Append the link to the document body and trigger the download
  document.body.appendChild(link);
  link.click();

  // Clean up by revoking the URL object
  URL.revokeObjectURL(url);

  return sitemap;
}

export default generateSitemap;
