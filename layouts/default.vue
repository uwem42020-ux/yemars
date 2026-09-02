<template>
  <div class="yemars-app">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    
    <!-- SEO Components -->
    <WebSite />
    <LocalBusiness :page-type="getPageType()" />
    <Breadcrumbs v-if="breadcrumbItems.length" :items="breadcrumbItems" />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import WebSite from '~/components/SEO/WebSite.vue'
import LocalBusiness from '~/components/SEO/LocalBusiness.vue'
import Breadcrumbs from '~/components/SEO/Breadcrumbs.vue'

const route = useRoute()

// Generate breadcrumbs based on route
const breadcrumbItems = computed(() => {
  const items = [{ 
    name: 'Home', 
    url: '/' 
  }]
  
  const pathParts = route.path.split('/').filter(p => p)
  
  let currentPath = ''
  pathParts.forEach((part, index) => {
    currentPath += `/${part}`
    let name = part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    
    // Special handling for service pages
    if (part === 'services') {
      if (pathParts.length === 1) {
        name = 'All Services'
      } else {
        name = 'Services'
      }
    } else if (pathParts[0] === 'services' && index === 1) {
      name = name
        .replace('App', 'App')
        .replace('Ecommerce', 'E-Commerce')
        .replace('Fintech', 'Fintech')
        .replace('Graphic Design', 'Graphic Design')
        .replace('Social Media', 'Social Media')
    } else if (pathParts[0] === 'locations' && index === 1) {
      name = 'Locations'
    }
    
    items.push({
      name,
      url: currentPath + '/' // Add trailing slash
    })
  })
  
  return items
})

// Determine page type for schema markup
const getPageType = () => {
  const path = route.path
  if (path === '/') return 'home'
  if (path === '/about') return 'about'
  if (path === '/contact') return 'contact'
  if (path === '/pricing') return 'pricing'
  if (path.startsWith('/services')) return 'service'
  if (path.startsWith('/locations')) return 'localbusiness'
  return 'website'
}

// Set canonical URL
useHead({
  link: [
    { 
      rel: 'canonical', 
      href: `https://yemars.ng${route.path.endsWith('/') ? route.path : route.path + '/'}`
    }
  ]
})
</script>

<style>
/* Global styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

html, body {
  overflow-x: hidden;
  width: 100%;
}

body {
  font-family: 'Inter', sans-serif;
  color: #333;
  line-height: 1.6;
  background: white;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
  width: 100%;
}

/* Grid System */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

[class*="col-"] {
  padding: 0 15px;
  box-sizing: border-box;
}

.col-lg-1 { width: 8.333%; }
.col-lg-2 { width: 16.666%; }
.col-lg-3 { width: 25%; }
.col-lg-4 { width: 33.333%; }
.col-lg-5 { width: 41.666%; }
.col-lg-6 { width: 50%; }
.col-lg-7 { width: 58.333%; }
.col-lg-8 { width: 66.666%; }
.col-lg-9 { width: 75%; }
.col-lg-10 { width: 83.333%; }
.col-lg-11 { width: 91.666%; }
.col-lg-12 { width: 100%; }

@media (max-width: 991px) {
  .col-md-1 { width: 8.333%; }
  .col-md-2 { width: 16.666%; }
  .col-md-3 { width: 25%; }
  .col-md-4 { width: 33.333%; }
  .col-md-5 { width: 41.666%; }
  .col-md-6 { width: 50%; }
  .col-md-7 { width: 58.333%; }
  .col-md-8 { width: 66.666%; }
  .col-md-9 { width: 75%; }
  .col-md-10 { width: 83.333%; }
  .col-md-11 { width: 91.666%; }
  .col-md-12 { width: 100%; }
}

@media (max-width: 767px) {
  .col-sm-1 { width: 8.333%; }
  .col-sm-2 { width: 16.666%; }
  .col-sm-3 { width: 25%; }
  .col-sm-4 { width: 33.333%; }
  .col-sm-5 { width: 41.666%; }
  .col-sm-6 { width: 50%; }
  .col-sm-7 { width: 58.333%; }
  .col-sm-8 { width: 66.666%; }
  .col-sm-9 { width: 75%; }
  .col-sm-10 { width: 83.333%; }
  .col-sm-11 { width: 91.666%; }
  .col-sm-12 { width: 100%; }
}

/* Utility Classes */
.text-end { text-align: right; }
.text-center { text-align: center; }
.text-start { text-align: left; }

.d-none { display: none; }
.d-block { display: block; }
.d-flex { display: flex; }
.d-inline-flex { display: inline-flex; }
.flex-wrap { flex-wrap: wrap; }
.align-items-center { align-items: center; }
.justify-content-center { justify-content: center; }
.justify-content-between { justify-content: space-between; }

@media (min-width: 992px) {
  .d-lg-none { display: none; }
  .d-lg-block { display: block; }
  .d-lg-flex { display: flex; }
}

@media (max-width: 991px) {
  .d-md-none { display: none; }
  .d-md-block { display: block; }
}

/* Spacing */
.mt-16 { margin-top: 16px; }
.mt-20 { margin-top: 20px; }
.mt-30 { margin-top: 30px; }
.mt-40 { margin-top: 40px; }
.mt-50 { margin-top: 50px; }
.mb-16 { margin-bottom: 16px; }
.mb-20 { margin-bottom: 20px; }
.mb-30 { margin-bottom: 30px; }
.mb-40 { margin-bottom: 40px; }
.mb-50 { margin-bottom: 50px; }
.ml-20 { margin-left: 20px; }
.mr-20 { margin-right: 20px; }

/* Focus Styles for Accessibility */
:focus {
  outline: 2px solid #0055FF;
  outline-offset: 2px;
}

:focus:not(:focus-visible) {
  outline: none;
}

:focus-visible {
  outline: 2px solid #0055FF;
  outline-offset: 2px;
}

/* Selection Styles */
::selection {
  background: #0055FF;
  color: white;
}

::-moz-selection {
  background: #0055FF;
  color: white;
}

/* Scrollbar Styles */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(45deg, #0044cc, #550a8a);
}
</style>