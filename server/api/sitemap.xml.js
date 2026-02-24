// server/api/sitemap.xml.js
import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const baseUrl = 'https://yemars.ng'
  
  const staticPages = [
    '',
    '/about',
    '/contact',
    '/pricing',
    '/services',
    '/services/corporate-app',
    '/services/ecommerce-systems',
    '/services/premium-web-apps',
    '/services/mobile-applications',
    '/services/app-maintenance',
    '/services/fintech-app',
    '/services/graphic-design',
    '/services/networking',
    '/services/printing',
    '/services/social-media-management'
  ]
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
  ${staticPages.map(page => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>
  `).join('')}
</urlset>`
  
  event.node.res.setHeader('Content-Type', 'application/xml')
  return sitemap
})