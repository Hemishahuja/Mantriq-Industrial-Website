import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://mantriqindustrial.ca'; // Using the active .ca domain

const routes = [
    '/',
    '/about',
    '/industries',
    '/capabilities',
    '/quality',
    '/materials',
    '/contact',
    '/equipment',
    '/case-studies',
    '/cost-advantage',
    '/faq',
    '/blog',
    '/quote',
];

const generateSitemap = () => {
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
            .map((route) => {
                return `  <url>
    <loc>${BASE_URL}${route === '/' ? '' : route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`;
            })
            .join('\n')}
</urlset>`;

    const outputPath = path.join(process.cwd(), 'public', 'sitemap.xml');
    fs.writeFileSync(outputPath, sitemap);
    console.log(`Sitemap generated at: ${outputPath}`);
};

generateSitemap();
