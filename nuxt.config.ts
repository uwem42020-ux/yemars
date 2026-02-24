// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/robots',
    '@nuxtjs/sitemap',
    '@nuxtjs/google-fonts',
    'nuxt-gtag',
    '@nuxt/image',
    'nuxt-site-config'
  ],

  compatibilityDate: '2026-02-07',
  
  css: ['~/assets/css/main.css'],
  
  // Google Fonts configuration
  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800],
      'Plus+Jakarta+Sans': [400, 500, 600, 700, 800]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true,
    useStylesheet: true,
    download: true,
    base64: false
  },

  // Google Analytics configuration
  gtag: {
    id: 'G-XXXXXXXXXX', // Replace with your actual GA4 measurement ID
    config: {
      send_page_view: true,
      anonymize_ip: true
    }
  },

  // Image optimization
  image: {
    domains: ['yemars.ng'],
    alias: {
      images: '/img'
    },
    format: ['webp', 'jpg', 'png'],
    quality: 80,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },

  // App configuration
  app: {
    head: {
      title: 'Yemars Technology Nigeria - Web Development & Digital Solutions',
      htmlAttrs: { 
        lang: 'en-NG',
        prefix: 'og: http://ogp.me/ns#'
      },
      meta: [
        // Basic meta tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Professional web development, app development, graphic design, and digital marketing services in Abuja, Nigeria. Custom solutions for Nigerian businesses with transparent Naira pricing.' 
        },
        { 
          name: 'keywords', 
          content: 'web development Nigeria, app development Abuja, graphic design services, digital marketing Nigeria, ecommerce website, corporate web app, fintech app Nigeria, school management system, networking services Abuja, printing services Nigeria, social media management' 
        },
        { name: 'author', content: 'Yemars Technology Nigeria' },
        { name: 'geo.region', content: 'NG-FC' },
        { name: 'geo.placename', content: 'Abuja' },
        { name: 'geo.position', content: '9.064478;7.495388' },
        { name: 'ICBM', content: '9.064478, 7.495388' },
        
        // Robots
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large' },
        { name: 'bingbot', content: 'index, follow, max-image-preview:large' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Yemars Technology Nigeria' },
        { property: 'og:title', content: 'Yemars Technology Nigeria - Web Development & Digital Solutions' },
        { property: 'og:description', content: 'Professional web development, app development, graphic design, and digital marketing services in Abuja, Nigeria. Custom solutions for Nigerian businesses.' },
        { property: 'og:image', content: '/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Yemars Technology Nigeria - Digital Solutions Provider' },
        { property: 'og:locale', content: 'en_NG' },
        { property: 'og:url', content: 'https://yemars.ng' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@yemarstech' },
        { name: 'twitter:title', content: 'Yemars Technology Nigeria' },
        { name: 'twitter:description', content: 'Your complete technology partner in Abuja - Web Development, Apps, Design & Marketing' },
        { name: 'twitter:image', content: '/twitter-image.jpg' },
        { name: 'twitter:image:alt', content: 'Yemars Technology Nigeria' },
        
        // Verification
        { name: 'google-site-verification', content: '3Bw8t4zXqwqdjnJruuI14OzFQvaAgVVV3tmE1mBAwU0' },
        { name: 'msvalidate.01', content: 'YOUR_BING_VERIFICATION_CODE' },
        
        // Additional SEO tags
        { name: 'rating', content: 'general' },
        { name: 'revisit-after', content: '7 days' },
        { name: 'language', content: 'English' },
        { name: 'distribution', content: 'global' },
        { name: 'target', content: 'all' },
        { name: 'audience', content: 'all' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'theme-color', content: '#0055FF' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        { rel: 'canonical', href: 'https://yemars.ng' }
      ]
    }
  },

  // Sitemap configuration - COMPLETELY REMOVED

  // Robots.txt configuration
  robots: {
    groups: [
      {
        userAgent: '*',
        allow: ['/'],
        disallow: ['/api/', '/admin/']
      }
    ],
    sitemap: 'https://yemars.ng/sitemap.xml'
  },

  // Site config for robots module
  site: {
    url: 'https://yemars.ng',
    name: 'Yemars Technology Nigeria',
    description: 'Professional web development, app development, graphic design, and digital marketing services in Abuja, Nigeria.',
    defaultLocale: 'en-NG',
    indexable: true
  },

  // Runtime config
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.FROM_EMAIL,
    toEmail: process.env.TO_EMAIL,
    appName: process.env.APP_NAME || 'yemars tech',
    rateLimitMax: process.env.RATE_LIMIT_MAX || '15',
    rateLimitWindow: process.env.RATE_LIMIT_WINDOW || '3600',
    
    public: {
      siteUrl: process.env.APP_URL || 'https://yemars.ng',
      siteName: 'Yemars Technology Nigeria',
      siteDescription: 'Professional web development, app development, graphic design, and digital marketing services in Abuja, Nigeria.',
      siteKeywords: 'web development Nigeria, app development Abuja, graphic design services, digital marketing Nigeria',
      siteImage: '/og-image.jpg',
      siteLocale: 'en_NG',
      twitterHandle: '@yemarstech',
      googleAnalyticsId: 'G-XXXXXXXXXX',
      contactEmail: 'info@yemars.ng',
      contactPhone: '+2348038887589'
    }
  },

  // Route rules
  routeRules: {
    '/services': {
      redirect: {
        to: '/services-index',
        statusCode: 301
      }
    },
    '/**': { 
      headers: {
        'X-Robots-Tag': 'index, follow'
      }
    },
    '/api/**': { 
      headers: {
        'X-Robots-Tag': 'noindex, nofollow'
      }
    }
  },

  // Build optimization
  build: {
    transpile: ['@headlessui/vue']
  },

  // Nitro server configuration
  nitro: {
    compressPublicAssets: true,
    minify: true,
    prerender: {
      routes: [
        '/',
        '/about',
        '/contact',
        '/pricing',
        '/services-index',
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
      ],
      crawlLinks: true
    }
  },

  // TypeScript
  typescript: {
    strict: true,
    shim: false
  },

  // PostCSS
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  }
})