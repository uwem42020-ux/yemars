<template>
  <div class="yemars-app">
    <Loader ref="loader" />
    <Header />
    <main>
      <NuxtPage />
    </main>
    <Footer />
    
    <!-- SEO Components -->
    <LocalBusiness :page-type="getPageType()" />
    <Breadcrumbs v-if="breadcrumbItems.length" :items="breadcrumbItems" />
    
    <!-- Progress Bar -->
    <div class="paginacontainer" v-show="showProgress">
      <div class="progress-wrap" :class="{ active: showProgress }" @click="scrollToTop">
        <svg class="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stop-color="#0055FF" />
              <stop offset="100%" stop-color="#6A0DAD" />
            </linearGradient>
          </defs>
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" 
                :style="{ strokeDashoffset: progressOffset }" 
                ref="progressPath"
                stroke="url(#gradient)"
                stroke-width="2"
                fill="none"/>
        </svg>
        <div class="progress-arrow">
          <i class="fa-solid fa-arrow-up"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Loader from '~/components/Loader.vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import LocalBusiness from '~/components/SEO/LocalBusiness.vue'
import Breadcrumbs from '~/components/SEO/Breadcrumbs.vue'

const route = useRoute()
const router = useRouter()
const loader = ref(null)
const showProgress = ref(false)
const progressOffset = ref(307.919)
const progressPath = ref(null)

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
      // Format service names nicely
      name = name
        .replace('App', 'App')
        .replace('Ecommerce', 'E-Commerce')
        .replace('Fintech', 'Fintech')
        .replace('Graphic Design', 'Graphic Design')
        .replace('Social Media', 'Social Media')
    }
    
    items.push({
      name,
      url: currentPath
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
  return 'website'
}

// Scroll to top function
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// Handle scroll for progress bar
const handleScroll = () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const scrolled = (winScroll / height) * 100
  
  const circumference = 2 * Math.PI * 49
  const offset = circumference - (scrolled / 100) * circumference
  progressOffset.value = offset
  
  showProgress.value = winScroll > 300
}

// Handle route changes for SEO
const handleRouteChange = () => {
  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink) {
    canonicalLink.setAttribute('href', `https://yemars.ng${route.path}`)
  }
  
  // Scroll to top on route change
  window.scrollTo(0, 0)
  
  // Update page title in case it wasn't set in the page
  if (!document.title || document.title === 'Yemars Technology Nigeria') {
    const pageTitles = {
      '/': 'Yemars Technology Nigeria - Web Development & Digital Solutions',
      '/about': 'About Us - Yemars Technology Nigeria | Digital Solutions Partner in Abuja',
      '/contact': 'Contact Yemars Technology Nigeria | Get in Touch for Digital Solutions',
      '/pricing': 'Website Development Pricing Nigeria | Transparent Naira Pricing',
      '/services': 'Our Services - Web Development, Graphic Design & Digital Marketing Nigeria',
      '/services/corporate-app': 'Corporate Web App Development Nigeria | Business Solutions Abuja',
      '/services/ecommerce-systems': 'E-Commerce Systems Nigeria | Online Store Development Abuja',
      '/services/premium-web-apps': 'Premium Web Apps Nigeria | Enterprise Web Development',
      '/services/mobile-applications': 'Mobile App Development Nigeria | Android & iOS Apps Abuja',
      '/services/app-maintenance': 'App Maintenance Services Nigeria | Website Support Abuja',
      '/services/fintech-app': 'Fintech App Development Nigeria | Financial Technology Solutions',
      '/services/graphic-design': 'Graphic Design Services Nigeria | Logo Design Abuja',
      '/services/networking': 'Networking Services Abuja | Office Network Setup & CCTV Installation',
      '/services/printing': 'Printing Services Abuja | Business Cards, Flyers & Banners',
      '/services/social-media-management': 'Social Media Management Nigeria | Digital Marketing Abuja'
    }
    
    if (pageTitles[route.path]) {
      document.title = pageTitles[route.path]
    }
  }
}

onMounted(() => {
  // Hide loader when page is fully loaded
  window.addEventListener('load', () => {
    setTimeout(() => {
      if (loader.value) {
        loader.value.loading = false
      }
    }, 500) // Small delay for smooth transition
  })

  // Fallback: hide loader after 3 seconds max
  setTimeout(() => {
    if (loader.value) {
      loader.value.loading = false
    }
  }, 3000)

  // Progress bar scroll listener
  window.addEventListener('scroll', handleScroll)
  
  // Route change listener
  router.afterEach(() => {
    handleRouteChange()
  })
  
  // Initial route handling
  handleRouteChange()
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const href = this.getAttribute('href')
      if (href === '#') return
      
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  // Remove router hook
  router.afterEach(() => {})
})
</script>

<style>
/* Import Google Fonts - already handled by @nuxtjs/google-fonts module */
/* Font Awesome is already imported in nuxt.config.ts */

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

.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

[class*="col-"] {
  padding: 0 15px;
  box-sizing: border-box;
}

/* Grid System */
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

/* Progress Bar */
.paginacontainer {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;
}

.progress-wrap {
  position: relative;
  width: 50px;
  height: 50px;
  background: white;
  border-radius: 50%;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  cursor: pointer;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: all 0.3s ease;
}

.progress-wrap.active {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.progress-wrap:hover {
  box-shadow: 0 8px 25px rgba(0,85,255,0.2);
  transform: translateY(-3px);
}

.progress-circle {
  transform: rotate(-90deg);
  width: 100%;
  height: 100%;
}

.progress-arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #0055FF;
  font-size: 18px;
  transition: all 0.3s ease;
}

.progress-wrap:hover .progress-arrow {
  transform: translate(-50%, -50%) translateY(-3px);
  color: #6A0DAD;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeInUp {
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.fadeIn {
  animation: fadeIn 0.5s ease forwards;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slideInRight {
  animation: slideInRight 0.6s ease forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.slideInLeft {
  animation: slideInLeft 0.6s ease forwards;
}

/* Loading States */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

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