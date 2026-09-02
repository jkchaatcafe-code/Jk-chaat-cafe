// const express = require('express');
// const Blog = require('../models/Blog');

// const router = express.Router();

// // Sitemap XML generate karein
// router.get('/sitemap.xml', async (req, res) => {
//   try {
//     // Saare published blogs fetch karein
//     const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });

//     const baseUrl = 'https://jkchaatcafe.com';
//     const today = new Date().toISOString().split('T')[0];

//     // Static pages
//     const staticPages = [
//       { url: '/', priority: '1.0', changefreq: 'weekly' },
//       { url: '/about', priority: '0.8', changefreq: 'monthly' },
//       { url: '/franchise', priority: '1.0', changefreq: 'daily' },
//       { url: '/products', priority: '0.9', changefreq: 'daily' },
//       { url: '/gallery', priority: '0.7', changefreq: 'monthly' },
//       { url: '/blogs', priority: '0.8', changefreq: 'daily' },
//       { url: '/contact', priority: '0.8', changefreq: 'monthly' },
//     ];

//     // XML generate karein
//     let xml = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
// `;

//     // Static pages add karein
//     staticPages.forEach(page => {
//       xml += `  <url>
//     <loc>${baseUrl}${page.url}</loc>
//     <lastmod>${today}</lastmod>
//     <changefreq>${page.changefreq}</changefreq>
//     <priority>${page.priority}</priority>
//   </url>
// `;
//     });

//     // Blog posts add karein
//     blogs.forEach(blog => {
//       const blogDate = new Date(blog.updatedAt || blog.createdAt).toISOString().split('T')[0];
//       xml += `  <url>
//     <loc>${baseUrl}/blogs/${blog.slug}</loc>
//     <lastmod>${blogDate}</lastmod>
//     <changefreq>weekly</changefreq>
//     <priority>0.6</priority>
//   </url>
// `;
//     });

//     xml += `</urlset>`;

//     // XML response bhejein
//     res.header('Content-Type', 'application/xml');
//     res.send(xml);
//   } catch (error) {
//     console.error('Sitemap generation error:', error);
//     res.status(500).send('Error generating sitemap');
//   }
// });

// module.exports = router;

const express = require('express');
const Blog = require('../models/Blog');

const router = express.Router();

router.get('/sitemap.xml', async (req, res) => {
  try {
    const blogs = await Blog.find({ published: true }).sort({ createdAt: -1 });
    const baseUrl = 'https://jkchaatcafe.com';
    const today = new Date().toISOString().split('T')[0];

    const staticPages = [
      { url: '/', priority: '1.0', changefreq: 'weekly' },
      { url: '/about', priority: '0.8', changefreq: 'monthly' },
      { url: '/franchise', priority: '1.0', changefreq: 'daily' },
      { url: '/products', priority: '0.9', changefreq: 'daily' },
      { url: '/gallery', priority: '0.7', changefreq: 'monthly' },
      { url: '/blogs', priority: '0.8', changefreq: 'daily' },
      { url: '/contact', priority: '0.8', changefreq: 'monthly' },
    ];

    let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`;

    staticPages.forEach(page => {
      xml += `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>
`;
    });

    blogs.forEach(blog => {
      const blogDate = new Date(blog.updatedAt || blog.createdAt).toISOString().split('T')[0];
      xml += `  <url>
    <loc>${baseUrl}/blogs/${blog.slug}</loc>
    <lastmod>${blogDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>
`;
    });

    xml += `</urlset>`;

    res.header('Content-Type', 'application/xml');
    res.send(xml);
  } catch (error) {
    console.error('Sitemap generation error:', error);
    res.status(500).send('Error generating sitemap');
  }
});

module.exports = router;