// nuxt.config.ts
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // Enable Netlify Functions (no custom output dir – use default .output)
  nitro: {
    preset: 'netlify'
  },
  
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/supabase',
    'nuxt-schema-org'
  ],

  compatibilityDate: '2026-02-07',
  
  css: ['~/assets/css/main.css'],
  
  // Site configuration (requires nuxt-schema-org module - now installed)
  site: {
    url: 'https://yemars.ng',
    name: 'Yemars Technology Nigeria',
    description: 'Yemars Technology is a leading technology company in Abuja, Nigeria providing web development, mobile app development, graphic design, networking, printing, and digital marketing services.',
    defaultLocale: 'en_NG'
  },
  
  // Supabase configuration
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirect: false
  },
  
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

  // App configuration - UPDATED FOR AGGRESSIVE SEO
  app: {
    head: {
      htmlAttrs: { 
        lang: 'en-NG',
        prefix: 'og: http://ogp.me/ns#'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Yemars Technology is a leading technology company in Abuja, Nigeria. We provide web development, mobile app development, graphic design, networking, printing, and digital marketing services for businesses across Nigeria.' 
        },
        { 
          name: 'keywords', 
          content: 'technology company in Abuja, technology company in Nigeria, technology company in Lagos, web development Abuja, app development Nigeria, software company Abuja, IT company Nigeria, digital marketing agency Abuja, graphic design Abuja, networking services Nigeria' 
        },
        { name: 'author', content: 'Yemars Technology Nigeria' },
        { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
        { name: 'googlebot', content: 'index, follow, max-image-preview:large' },
        { name: 'bingbot', content: 'index, follow' },
        
        // Geo tags for local SEO
        { name: 'geo.region', content: 'NG-FC' },
        { name: 'geo.placename', content: 'Abuja' },
        { name: 'geo.position', content: '9.064478;7.495388' },
        { name: 'ICBM', content: '9.064478, 7.495388' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Yemars Technology Nigeria' },
        { property: 'og:title', content: 'Technology Company in Abuja, Nigeria | Yemars Technology' },
        { property: 'og:description', content: 'Leading technology company in Abuja offering web development, mobile apps, graphic design, networking, and digital marketing for Nigerian businesses.' },
        { property: 'og:image', content: 'https://yemars.ng/og-image.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_NG' },
        { property: 'og:url', content: 'https://yemars.ng' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@yemarstech' },
        { name: 'twitter:creator', content: '@yemarstech' },
        { name: 'twitter:title', content: 'Technology Company in Abuja | Yemars Technology Nigeria' },
        { name: 'twitter:description', content: 'Your complete technology partner in Abuja. Web development, mobile apps, graphic design, networking & digital marketing.' },
        { name: 'twitter:image', content: 'https://yemars.ng/twitter-image.jpg' },
        
        // Verification
        { name: 'google-site-verification', content: '3Bw8t4zXqwqdjnJruuI14OzFQvaAgVVV3tmE1mBAwU0' },
        { name: 'theme-color', content: '#0055FF' },
        
        // Mobile web app
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css' },
        // Preconnect for performance
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'dns-prefetch', href: 'https://cdnjs.cloudflare.com' },
        { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' }
      ],
      script: [
        {
          type: 'application/ld+json',
          innerHTML: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            '@id': 'https://yemars.ng/#organization',
            name: 'Yemars Technology Nigeria',
            url: 'https://yemars.ng',
            logo: {
              '@type': 'ImageObject',
              url: 'https://yemars.ng/logo.png',
              width: 274,
              height: 32
            },
            sameAs: [
              'https://www.facebook.com/yemarstech',
              'https://www.instagram.com/yemarstech',
              'https://www.linkedin.com/company/yemars-technology',
              'https://twitter.com/yemarstech'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              telephone: '+2349014488190',
              contactType: 'customer service',
              areaServed: 'NG',
              availableLanguage: ['English']
            }
          })
        }
      ]
    }
  },

  // Runtime config
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.FROM_EMAIL || 'Yemars Technology <info@yemars.ng>',
    toEmail: process.env.TO_EMAIL || 'uwem42020@gmail.com',
    
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
      siteUrl: 'https://yemars.ng',
      siteName: 'Yemars Technology Nigeria',
      contactEmail: 'info@yemars.ng',
      contactPhone: '+2349014488190',
      whatsappPhone: '+2348038887589'
    }
  },

  // Route rules for SEO
  routeRules: {
    '/': { 
      prerender: true,
      swr: 3600,
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=3600'
      }
    },
    '/about': { 
      prerender: true,
      swr: 86400 
    },
    '/contact': { 
      prerender: true,
      swr: 86400 
    },
    '/services/**': { 
      prerender: true,
      swr: 86400 
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