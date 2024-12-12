/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.linkwinnovation.com', // Your website URL
    generateRobotsTxt: true, // This will generate a robots.txt file automatically
    exclude: ['/privacy'], // Exclude any pages you don’t want to include in the sitemap
    changefreq: 'daily', // How often pages are updated
    priority: 0.7, // Priority of pages (higher means more important)
  };
  