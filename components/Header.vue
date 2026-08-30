<template>
  <header>
    <div id="yemars-header-sticky" class="yemars-header-area" :class="{ 'header-sticky': isSticky }">
      <div class="container">
        <div class="header-inner">
          <!-- Logo -->
          <NuxtLink to="/" class="logo-link">
            <img 
              :src="isSticky ? '/logo2.png' : '/logo.png'" 
              :alt="isSticky ? 'Yemars Technology Logo Dark' : 'Yemars Technology Logo White'"
              class="logo-image"
            >
          </NuxtLink>

          <!-- Desktop Navigation -->
          <nav class="desktop-nav">
            <ul>
              <li>
                <NuxtLink to="/" :class="{ active: $route.path === '/' }">Home</NuxtLink>
              </li>
              <li class="has-dropdown mega-menu-parent">
                <a href="javascript:void(0)" class="dropdown-toggle">
                  Services <span class="dropdown-arrow"><i class="fa-solid fa-angle-down"></i></span>
                </a>
                
                <!-- Mega Menu -->
                <div class="mega-menu-wrapper">
                  <div class="mega-menu-container">
                    <ul class="sub-menu mega-menu">
                      <li class="mega-menu-column">
                        <span class="mega-menu-title">App & Web Development</span>
                        <ul class="mega-sub-menu">
                          <li><NuxtLink to="/services/corporate-app">Corporate Web App</NuxtLink></li>
                          <li><NuxtLink to="/services/ecommerce-systems">E-Commerce Systems</NuxtLink></li>
                          <li><NuxtLink to="/services/premium-web-apps">Premium Web Apps</NuxtLink></li>
                          <li><NuxtLink to="/services/mobile-applications">Mobile Applications</NuxtLink></li>
                          <li><NuxtLink to="/services/app-maintenance">App Maintenance</NuxtLink></li>
                          <li><NuxtLink to="/services/fintech-app">Fintech App</NuxtLink></li>
                        </ul>
                      </li>
                      
                      <li class="mega-menu-column">
                        <span class="mega-menu-title">Graphic Design</span>
                        <ul class="mega-sub-menu">
                          <li><NuxtLink to="/services/graphic-design">Logo Design</NuxtLink></li>
                          <li><NuxtLink to="/services/graphic-design">Business Cards</NuxtLink></li>
                          <li><NuxtLink to="/services/graphic-design">Brochures & Flyers</NuxtLink></li>
                          <li><NuxtLink to="/services/graphic-design">Banners & Posters</NuxtLink></li>
                          <li><NuxtLink to="/services/graphic-design">Music Cover Art</NuxtLink></li>
                          <li><NuxtLink to="/services/graphic-design">Branding & Identity</NuxtLink></li>
                        </ul>
                      </li>
                      
                      <li class="mega-menu-column">
                        <span class="mega-menu-title">Networking</span>
                        <ul class="mega-sub-menu">
                          <li><NuxtLink to="/services/networking">Office Networking</NuxtLink></li>
                          <li><NuxtLink to="/services/networking">Wireless Setup</NuxtLink></li>
                          <li><NuxtLink to="/services/networking">Workstation Installation</NuxtLink></li>
                          <li><NuxtLink to="/services/networking">Server Configuration</NuxtLink></li>
                          <li><NuxtLink to="/services/networking">CCTV Installation</NuxtLink></li>
                          <li><NuxtLink to="/services/networking">Network Security</NuxtLink></li>
                        </ul>
                      </li>
                      
                      <li class="mega-menu-column">
                        <span class="mega-menu-title">Printing</span>
                        <ul class="mega-sub-menu">
                          <li><NuxtLink to="/services/printing">Flyers & Handbills</NuxtLink></li>
                          <li><NuxtLink to="/services/printing">Flex Banners</NuxtLink></li>
                          <li><NuxtLink to="/services/printing">Roll-up Stands</NuxtLink></li>
                          <li><NuxtLink to="/services/printing">Business Cards</NuxtLink></li>
                          <li><NuxtLink to="/services/printing">Posters</NuxtLink></li>
                          <li><NuxtLink to="/services/printing">Promotional Items</NuxtLink></li>
                        </ul>
                      </li>
                      
                      <li class="mega-menu-column">
                        <span class="mega-menu-title">Social Media</span>
                        <ul class="mega-sub-menu">
                          <li><NuxtLink to="/services/social-media-management">Content Creation</NuxtLink></li>
                          <li><NuxtLink to="/services/social-media-management">SEO Optimization</NuxtLink></li>
                          <li><NuxtLink to="/services/social-media-management">Community Management</NuxtLink></li>
                          <li><NuxtLink to="/services/social-media-management">Ad Campaigns</NuxtLink></li>
                          <li><NuxtLink to="/services/social-media-management">Analytics & Reports</NuxtLink></li>
                          <li><NuxtLink to="/services/social-media-management">Strategy Planning</NuxtLink></li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              
              <li>
                <NuxtLink to="/pricing" :class="{ active: $route.path === '/pricing' }">Pricing</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" :class="{ active: $route.path === '/about' }">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" :class="{ active: $route.path === '/contact' }">Contact</NuxtLink>
              </li>
            </ul>
          </nav>

          <!-- Right side: Desktop CTA + Mobile CTA + Toggle -->
          <div class="header-actions">
            <!-- Desktop large CTA (hidden on mobile) -->
            <a href="/#domain-section" class="theme-btn13 desktop-cta">
              Get Started <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
              <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
            </a>

            <!-- Mobile small CTA (hidden on desktop) -->
            <a href="/#domain-section" class="mobile-cta-header">
              Get Started
            </a>

            <!-- Hamburger toggle (always visible on mobile) -->
            <button type="button" class="mobile-toggle" @click="toggleMobileMenu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (Offcanvas) -->
    <div class="yemars-offcanvas" :class="{ active: mobileMenuOpen }">
      <div class="yemars-offcanvas-wrapper">
        <div class="yemars-offcanvas-header d-flex justify-content-between align-items-center">
          <div class="yemars-offcanvas-logo">
            <NuxtLink to="/">
              <img src="/logo2.png" alt="Yemars Technology">
            </NuxtLink>
          </div>
          <div class="yemars-offcanvas-close">
            <button class="yemars-offcanvas-close-toggle" @click="toggleMobileMenu">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>

        <div class="yemars-offcanvas-menu d-lg-none">
          <nav>
            <ul>
              <li>
                <NuxtLink to="/" @click="toggleMobileMenu">Home</NuxtLink>
              </li>
              
              <li class="has-dropdown">
                <a href="javascript:void(0)" class="dropdown-toggle" @click="toggleDropdown($event)">
                  Services <span class="dropdown-arrow"><i class="fa-solid fa-angle-down"></i></span>
                </a>
                
                <ul class="sub-menu mobile-mega" style="display: none;">
                  <li class="mobile-mega-section">
                    <span class="mobile-mega-title">App & Web Development</span>
                    <ul class="mobile-mega-sub">
                      <li><NuxtLink to="/services/corporate-app" @click="toggleMobileMenu">Corporate Web App</NuxtLink></li>
                      <li><NuxtLink to="/services/ecommerce-systems" @click="toggleMobileMenu">E-Commerce Systems</NuxtLink></li>
                      <li><NuxtLink to="/services/premium-web-apps" @click="toggleMobileMenu">Premium Web Apps</NuxtLink></li>
                      <li><NuxtLink to="/services/mobile-applications" @click="toggleMobileMenu">Mobile Applications</NuxtLink></li>
                      <li><NuxtLink to="/services/app-maintenance" @click="toggleMobileMenu">App Maintenance</NuxtLink></li>
                      <li><NuxtLink to="/services/fintech-app" @click="toggleMobileMenu">Fintech App</NuxtLink></li>
                    </ul>
                  </li>
                  
                  <li class="mobile-mega-section">
                    <span class="mobile-mega-title">Graphic Design</span>
                    <ul class="mobile-mega-sub">
                      <li><NuxtLink to="/services/graphic-design" @click="toggleMobileMenu">Logo Design</NuxtLink></li>
                      <li><NuxtLink to="/services/graphic-design" @click="toggleMobileMenu">Business Cards</NuxtLink></li>
                      <li><NuxtLink to="/services/graphic-design" @click="toggleMobileMenu">Brochures & Flyers</NuxtLink></li>
                      <li><NuxtLink to="/services/graphic-design" @click="toggleMobileMenu">Banners & Posters</NuxtLink></li>
                      <li><NuxtLink to="/services/graphic-design" @click="toggleMobileMenu">Music Cover Art</NuxtLink></li>
                      <li><NuxtLink to="/services/graphic-design" @click="toggleMobileMenu">Branding</NuxtLink></li>
                    </ul>
                  </li>
                  
                  <li class="mobile-mega-section">
                    <span class="mobile-mega-title">Networking</span>
                    <ul class="mobile-mega-sub">
                      <li><NuxtLink to="/services/networking" @click="toggleMobileMenu">Office Networking</NuxtLink></li>
                      <li><NuxtLink to="/services/networking" @click="toggleMobileMenu">Wireless Setup</NuxtLink></li>
                      <li><NuxtLink to="/services/networking" @click="toggleMobileMenu">Workstation Installation</NuxtLink></li>
                      <li><NuxtLink to="/services/networking" @click="toggleMobileMenu">Server Configuration</NuxtLink></li>
                      <li><NuxtLink to="/services/networking" @click="toggleMobileMenu">CCTV Installation</NuxtLink></li>
                      <li><NuxtLink to="/services/networking" @click="toggleMobileMenu">Network Security</NuxtLink></li>
                    </ul>
                  </li>
                  
                  <li class="mobile-mega-section">
                    <span class="mobile-mega-title">Printing</span>
                    <ul class="mobile-mega-sub">
                      <li><NuxtLink to="/services/printing" @click="toggleMobileMenu">Flyers & Handbills</NuxtLink></li>
                      <li><NuxtLink to="/services/printing" @click="toggleMobileMenu">Flex Banners</NuxtLink></li>
                      <li><NuxtLink to="/services/printing" @click="toggleMobileMenu">Roll-up Stands</NuxtLink></li>
                      <li><NuxtLink to="/services/printing" @click="toggleMobileMenu">Business Cards</NuxtLink></li>
                      <li><NuxtLink to="/services/printing" @click="toggleMobileMenu">Posters</NuxtLink></li>
                      <li><NuxtLink to="/services/printing" @click="toggleMobileMenu">Promotional Items</NuxtLink></li>
                    </ul>
                  </li>
                  
                  <li class="mobile-mega-section">
                    <span class="mobile-mega-title">Social Media</span>
                    <ul class="mobile-mega-sub">
                      <li><NuxtLink to="/services/social-media-management" @click="toggleMobileMenu">Content Creation</NuxtLink></li>
                      <li><NuxtLink to="/services/social-media-management" @click="toggleMobileMenu">SEO Optimization</NuxtLink></li>
                      <li><NuxtLink to="/services/social-media-management" @click="toggleMobileMenu">Community Management</NuxtLink></li>
                      <li><NuxtLink to="/services/social-media-management" @click="toggleMobileMenu">Ad Campaigns</NuxtLink></li>
                      <li><NuxtLink to="/services/social-media-management" @click="toggleMobileMenu">Analytics</NuxtLink></li>
                      <li><NuxtLink to="/services/social-media-management" @click="toggleMobileMenu">Strategy</NuxtLink></li>
                    </ul>
                  </li>
                </ul>
              </li>
              
              <li>
                <NuxtLink to="/pricing" @click="toggleMobileMenu">Pricing</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/about" @click="toggleMobileMenu">About</NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" @click="toggleMobileMenu">Contact</NuxtLink>
              </li>
              <li>
                <a href="/#domain-section" class="mobile-cta" @click="toggleMobileMenu">Get Started</a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="yemars-offcanvas-info">
          <h4>Contact Us</h4>
          <div class="single-contact">
            <div class="text">
              <p>Shop E35 Murg Plaza, Area 10 UTC, Abuja</p>
            </div>
          </div>
          <div class="single-contact">
            <div class="text">
              <a href="mailto:info@yemars.ng">info@yemars.ng</a>
            </div>
          </div>
        </div>

        <div class="yemars-offcanvas-social">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
            <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="yemars-offcanvas-overlay" :class="{ active: mobileMenuOpen }" @click="toggleMobileMenu"></div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const mobileMenuOpen = ref(false)
const isSticky = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
  if (mobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'auto'
  }
}

const toggleDropdown = (event) => {
  event.preventDefault()
  const parent = event.currentTarget.closest('li')
  const submenu = parent.querySelector('.sub-menu')
  const arrow = parent.querySelector('.dropdown-arrow i')
  
  if (submenu.style.display === 'none' || !submenu.style.display) {
    submenu.style.display = 'block'
    if (arrow) arrow.style.transform = 'rotate(180deg)'
  } else {
    submenu.style.display = 'none'
    if (arrow) arrow.style.transform = 'rotate(0deg)'
  }
}

const handleScroll = () => {
  isSticky.value = window.scrollY > 100
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  window.scrollTo(0, 0)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.body.style.overflow = 'auto'
})
</script>

<style scoped>
/* ===== Header Container ===== */
.yemars-header-area {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: transparent;
  transition: all 0.3s ease;
  padding: 15px 0;
}

.yemars-header-area.header-sticky {
  background: white;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  padding: 10px 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* ===== Logo ===== */
.logo-link {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.logo-image {
  height: 32px;
  width: auto;
  object-fit: contain;
  transition: height 0.3s ease;
}

/* ===== Desktop Navigation ===== */
.desktop-nav {
  flex: 1;
  display: flex;
  justify-content: center;
}

.desktop-nav > ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
}

.desktop-nav > ul > li {
  position: static;
  margin: 0 15px;
}

.desktop-nav > ul > li > a {
  font-weight: 500;
  text-decoration: none;
  padding: 10px 0;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all 0.3s ease;
  font-size: 16px;
  white-space: nowrap;
  color: white;
}

.header-sticky .desktop-nav > ul > li > a {
  color: #333;
}

.desktop-nav ul li a:hover,
.desktop-nav ul li a.active {
  color: #0055FF !important;
}

/* ===== Mega Menu (Desktop) ===== */
.mega-menu-parent {
  position: relative !important;
}

.mega-menu-wrapper {
  position: absolute;
  top: 100%;
  left: 0;
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s ease;
  z-index: 1000;
  padding-top: 20px;
}

.mega-menu-parent:hover .mega-menu-wrapper {
  opacity: 1;
  visibility: visible;
}

.mega-menu-container {
  width: fit-content;
  background: white;
  box-shadow: 0 10px 30px rgba(0,0,0,0.15);
  border-radius: 15px;
  display: inline-block;
}

.sub-menu.mega-menu {
  display: flex;
  flex-wrap: nowrap;
  padding: 20px 15px;
  background: white;
  border-radius: 15px;
  box-shadow: none;
  position: relative;
  width: 100%;
  margin: 0;
}

.mega-menu-column {
  flex: 0 0 auto;
  padding: 0 12px;
  border-right: 1px solid #eef2f6;
}

.mega-menu-column:last-child {
  border-right: none;
}

.mega-menu-title {
  font-weight: 700;
  color: #0055FF;
  font-size: 13px;
  margin-bottom: 10px;
  display: block;
  padding-bottom: 5px;
  border-bottom: 2px solid #0055FF;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  white-space: nowrap;
}

.mega-sub-menu {
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}

.mega-sub-menu li {
  margin: 0 0 4px 0 !important;
  padding: 0 !important;
}

.mega-sub-menu li a {
  padding: 3px 0 !important;
  font-size: 12px !important;
  color: #666 !important;
  display: block !important;
  transition: all 0.3s ease;
  line-height: 1.4;
  white-space: nowrap;
}

.mega-sub-menu li a:hover {
  color: #0055FF !important;
  transform: translateX(5px);
  background: transparent !important;
}

/* ===== Header Actions ===== */
.header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

.theme-btn13 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  white-space: nowrap;
}

.theme-btn13:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,85,255,0.3);
}

.theme-btn13 .arrow1,
.theme-btn13 .arrow2 {
  transition: all 0.3s ease;
}

.theme-btn13 .arrow2 {
  position: absolute;
  right: 30px;
  opacity: 0;
}

.theme-btn13:hover .arrow1 {
  transform: translateX(-10px);
  opacity: 0;
}

.theme-btn13:hover .arrow2 {
  right: 25px;
  opacity: 1;
}

.mobile-cta-header {
  display: none; /* Hidden by default, shown on mobile */
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  white-space: nowrap;
}

.mobile-toggle {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: white;
  padding: 5px;
  display: none; /* Hidden on desktop, shown on mobile */
}

.header-sticky .mobile-toggle {
  color: #333;
}

/* ===== Offcanvas Menu ===== */
.yemars-offcanvas {
  position: fixed;
  top: 0;
  right: -350px;
  width: 300px;
  height: 100vh;
  background: white;
  z-index: 1001;
  transition: all 0.4s ease;
  box-shadow: -5px 0 30px rgba(0,0,0,0.1);
  overflow-y: auto;
}

.yemars-offcanvas.active {
  right: 0;
}

.yemars-offcanvas-wrapper {
  padding: 30px;
}

.yemars-offcanvas-header {
  margin-bottom: 30px;
}

.yemars-offcanvas-logo img {
  height: 32px;
  width: auto;
  object-fit: contain;
}

.yemars-offcanvas-close-toggle {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #333;
}

.yemars-offcanvas-menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.yemars-offcanvas-menu > nav > ul > li {
  margin-bottom: 15px;
  position: relative;
}

.yemars-offcanvas-menu ul li a {
  color: #333;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.yemars-offcanvas-menu ul li .dropdown-arrow {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.yemars-offcanvas-menu ul li .sub-menu {
  padding-left: 20px;
  margin-top: 10px;
  display: none;
}

.mobile-mega {
  padding-left: 0 !important;
  width: 100%;
  background: #f8f9ff;
  border-radius: 10px;
  padding: 15px !important;
}

.mobile-mega-section {
  margin-bottom: 20px !important;
  padding-bottom: 15px;
  border-bottom: 1px solid #eef2f6;
}

.mobile-mega-section:last-child {
  border-bottom: none;
  margin-bottom: 0 !important;
  padding-bottom: 0;
}

.mobile-mega-title {
  font-weight: 700 !important;
  color: #0055FF !important;
  font-size: 14px !important;
  margin-bottom: 10px;
  display: block !important;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.mobile-mega-sub {
  list-style: none;
  padding: 0 !important;
  margin: 0 !important;
}

.mobile-mega-sub li {
  margin-bottom: 8px !important;
}

.mobile-mega-sub li a {
  font-size: 13px !important;
  color: #666 !important;
  padding: 5px 0 !important;
  display: block !important;
}

.mobile-mega-sub li a:hover {
  color: #0055FF !important;
}

.mobile-cta {
  display: inline-block;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white !important;
  padding: 10px 20px !important;
  border-radius: 8px;
  font-weight: 600;
  margin-top: 10px;
  text-align: center;
  width: 100%;
  justify-content: center !important;
}

.yemars-offcanvas-info {
  margin-top: 40px;
}

.yemars-offcanvas-info h4 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #0055FF;
}

.yemars-offcanvas-info .single-contact {
  margin-bottom: 15px;
}

.yemars-offcanvas-info .single-contact a,
.yemars-offcanvas-info .single-contact p {
  color: #666;
  text-decoration: none;
  font-size: 14px;
}

.yemars-offcanvas-social {
  margin-top: 30px;
}

.yemars-offcanvas-social h4 {
  font-size: 18px;
  margin-bottom: 15px;
  color: #0055FF;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-links a {
  width: 40px;
  height: 40px;
  background: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: all 0.3s ease;
  text-decoration: none;
}

.social-links a:hover {
  background: #0055FF;
  color: white;
}

.yemars-offcanvas-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 1000;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.yemars-offcanvas-overlay.active {
  opacity: 1;
  visibility: visible;
}

/* ===== Icons ===== */
.fa-solid, .fa-regular, .fa-brands {
  font-family: "Font Awesome 6 Free";
  font-weight: 900;
}

.fa-regular {
  font-weight: 400;
}

.fa-brands {
  font-family: "Font Awesome 6 Brands";
  font-weight: 400;
}

/* ===== Responsive ===== */
@media (max-width: 991.98px) {
  .desktop-nav {
    display: none; /* Hide entire desktop nav on mobile/tablet */
  }
  .desktop-cta {
    display: none !important; /* Hide large desktop CTA */
  }
  .mobile-cta-header {
    display: inline-flex; /* Show small mobile CTA */
  }
  .mobile-toggle {
    display: block; /* Show hamburger */
  }
  .header-actions {
    justify-content: flex-end;
    gap: 8px;
  }
  .logo-image {
    height: 28px;
  }
}

@media (max-width: 575.98px) {
  .logo-image {
    height: 24px;
  }
  .yemars-header-area {
    padding: 12px 0;
  }
  .mobile-cta-header {
    padding: 6px 12px;
    font-size: 12px;
  }
  .mobile-toggle {
    font-size: 20px;
  }
  .yemars-offcanvas {
    width: 280px;
  }
}

@media (max-width: 360px) {
  .logo-image {
    height: 20px;
  }
  .mobile-cta-header {
    padding: 5px 10px;
    font-size: 11px;
  }
  .mobile-toggle {
    font-size: 18px;
  }
  .yemars-header-area {
    padding: 10px 0;
  }
  .container {
    padding: 0 10px;
  }
}
</style>