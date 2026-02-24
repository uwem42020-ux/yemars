<template>
  <div class="services-page">
    <!-- Hero Section -->
    <section class="services-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <h1 class="hero-title">
              <span class="gradient-text">Our Comprehensive</span>
              <br>Digital Solutions
            </h1>
            <p class="hero-description">
              From concept to completion, we offer end-to-end services to take your business to the next level.
            </p>
          </div>
        </div>
      </div>
      
      <!-- Animated background elements -->
      <div class="hero-stars">
        <div class="star star-1"></div>
        <div class="star star-2"></div>
        <div class="star star-3"></div>
        <div class="star star-4"></div>
        <div class="star star-5"></div>
        <div class="star star-6"></div>
        <div class="star star-7"></div>
        <div class="star star-8"></div>
        <div class="star star-9"></div>
        <div class="star star-10"></div>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="services-section">
      <div class="container">
        <!-- App & Web Development -->
        <div class="service-category" id="app-web">
          <div class="category-header">
            <div class="category-icon">
              <i class="fa-solid fa-code" aria-hidden="true"></i>
            </div>
            <h2>App & Web Development</h2>
            <NuxtLink to="/services#app-web" class="view-all-link">
              View All <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
          
          <div class="services-grid">
            <NuxtLink v-for="service in webServices" :key="service.title" 
                     :to="service.link" 
                     class="service-card"
                     :aria-label="`Learn more about ${service.title}`">
              <div class="service-icon" :class="service.iconClass">
                <i :class="service.icon" aria-hidden="true"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
              <span class="learn-more">
                Learn More <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </span>
            </NuxtLink>
          </div>
        </div>

        <!-- Graphic Design -->
        <div class="service-category" id="graphic-design">
          <div class="category-header">
            <div class="category-icon">
              <i class="fa-solid fa-paint-brush" aria-hidden="true"></i>
            </div>
            <h2>Graphic Design</h2>
            <NuxtLink to="/services/graphic-design" class="view-all-link">
              View Details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
          
          <div class="services-subgrid">
            <div v-for="item in graphicDesignServices" :key="item" class="sub-service-item">
              <i class="fa-solid fa-check-circle" aria-hidden="true"></i>
              <span>{{ item }}</span>
            </div>
          </div>
          <div class="category-cta">
            <NuxtLink to="/services/graphic-design" class="category-btn">
              Explore Graphic Design Services
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
        </div>

        <!-- Networking Services -->
        <div class="service-category" id="networking">
          <div class="category-header">
            <div class="category-icon">
              <i class="fa-solid fa-network-wired" aria-hidden="true"></i>
            </div>
            <h2>Networking Services</h2>
            <NuxtLink to="/services/networking" class="view-all-link">
              View Details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
          
          <div class="services-subgrid">
            <div v-for="item in networkingServices" :key="item" class="sub-service-item">
              <i class="fa-solid fa-check-circle" aria-hidden="true"></i>
              <span>{{ item }}</span>
            </div>
          </div>
          <div class="category-cta">
            <NuxtLink to="/services/networking" class="category-btn">
              Explore Networking Services
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
        </div>

        <!-- Printing Services -->
        <div class="service-category" id="printing">
          <div class="category-header">
            <div class="category-icon">
              <i class="fa-solid fa-print" aria-hidden="true"></i>
            </div>
            <h2>Printing Services</h2>
            <NuxtLink to="/services/printing" class="view-all-link">
              View Details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
          
          <div class="services-subgrid">
            <div v-for="item in printingServices" :key="item" class="sub-service-item">
              <i class="fa-solid fa-check-circle" aria-hidden="true"></i>
              <span>{{ item }}</span>
            </div>
          </div>
          <div class="category-cta">
            <NuxtLink to="/services/printing" class="category-btn">
              Explore Printing Services
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
        </div>

        <!-- Social Media Management -->
        <div class="service-category" id="social-media">
          <div class="category-header">
            <div class="category-icon">
              <i class="fa-solid fa-hashtag" aria-hidden="true"></i>
            </div>
            <h2>Social Media Management</h2>
            <NuxtLink to="/services/social-media-management" class="view-all-link">
              View Details <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
          
          <div class="services-subgrid">
            <div v-for="item in socialMediaServices" :key="item" class="sub-service-item">
              <i class="fa-solid fa-check-circle" aria-hidden="true"></i>
              <span>{{ item }}</span>
            </div>
          </div>
          <div class="category-cta">
            <NuxtLink to="/services/social-media-management" class="category-btn">
              Explore Social Media Services
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-choose-section">
      <div class="container">
        <div class="section-header">
          <h2>Why Choose <span class="gradient-text">Yemars Technology</span></h2>
          <p>One company, endless possibilities for your business</p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-layer-group" aria-hidden="true"></i>
            </div>
            <h3>Full-Service Agency</h3>
            <p>From design to development, networking to printing - we handle it all under one roof.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-naira-sign" aria-hidden="true"></i>
            </div>
            <h3>Local Expertise</h3>
            <p>We understand the Nigerian market and deliver solutions that work for local businesses.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-clock" aria-hidden="true"></i>
            </div>
            <h3>Fast Turnaround</h3>
            <p>Quick delivery without compromising on quality. We respect your deadlines.</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fa-solid fa-headset" aria-hidden="true"></i>
            </div>
            <h3>24/7 Support</h3>
            <p>We're always here when you need us, with dedicated support for all our services.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Need a Combination of Services?</h2>
          <p>We offer discounted packages when you bundle multiple services together.</p>
          <NuxtLink to="/contact" class="cta-btn">
            Get a Custom Quote
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeoMeta({
  title: 'Our Services - Web Development, Graphic Design & Digital Marketing Nigeria | Yemars Technology',
  description: 'Explore Yemars Technology\'s comprehensive services: Web development, mobile apps, graphic design, networking, printing, and social media management. One company, endless digital solutions for Nigerian businesses.',
  ogTitle: 'Complete Digital Solutions for Nigerian Businesses - Yemars Technology Services',
  ogDescription: 'From web development to printing, we handle all your digital needs under one roof in Abuja. Custom solutions with transparent Naira pricing.',
  ogImage: '/og-image-services.jpg',
  ogUrl: 'https://yemars.ng/services',
  twitterTitle: 'Yemars Technology Services - Web Development, Graphic Design & More',
  twitterDescription: 'Discover our full range of digital services: Corporate web apps, e-commerce, mobile apps, graphic design, networking, printing, and social media management.',
  twitterImage: '/twitter-image-services.jpg',
  keywords: 'web development services Nigeria, app development company Abuja, graphic design services Nigeria, digital marketing agency Abuja, ecommerce website design Nigeria, mobile app developers Nigeria, networking services Abuja, printing services Nigeria, social media management Nigeria, corporate web application development, fintech app development Nigeria, website maintenance services Abuja, logo design prices Nigeria, CCTV installation Abuja, business card printing Nigeria'
})

// Web Development Services Data
const webServices = [
  {
    icon: 'fa-solid fa-building',
    iconClass: 'corporate-icon',
    title: 'Corporate Web App',
    description: 'Custom business applications with employee portals, inventory management, and business intelligence tools for Nigerian companies.',
    link: '/services/corporate-app'
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    iconClass: 'ecommerce-icon',
    title: 'E-Commerce Systems',
    description: 'Complete online stores with Nigerian payment integrations (Paystack, Flutterwave), inventory management, and mobile-optimized checkout.',
    link: '/services/ecommerce-systems'
  },
  {
    icon: 'fa-solid fa-crown',
    iconClass: 'premium-icon',
    title: 'Premium Web Apps',
    description: 'Enterprise-grade applications with advanced security, scalability, and custom features for large organizations.',
    link: '/services/premium-web-apps'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    iconClass: 'mobile-icon',
    title: 'Mobile Applications',
    description: 'Native Android & iOS apps for your business. Cross-platform solutions available for faster development.',
    link: '/services/mobile-applications'
  },
  {
    icon: 'fa-solid fa-gear',
    iconClass: 'maintenance-icon',
    title: 'App Maintenance',
    description: 'Ongoing support, security updates, bug fixes, and performance optimization for your web applications.',
    link: '/services/app-maintenance'
  },
  {
    icon: 'fa-solid fa-credit-card',
    iconClass: 'fintech-icon',
    title: 'Fintech App',
    description: 'Secure financial applications with payment processing, wallet systems, KYC/AML compliance, and bank integrations.',
    link: '/services/fintech-app'
  }
]

// Graphic Design Services Data
const graphicDesignServices = [
  'Business Cards',
  'Brochures',
  'Flyers',
  'Banners',
  'Logo Design',
  'Books & Magazines',
  'Music Cover Art',
  'Posters',
  'Roll-up Banners',
  'Company Branding',
  'Social Media Graphics',
  'Package Design'
]

// Networking Services Data
const networkingServices = [
  'Office Network Setup (LAN/Wireless)',
  'Workstation Installation',
  'Server Configuration',
  'Network Security',
  'CCTV Installation',
  'WiFi Coverage Optimization',
  'Structured Cabling',
  'Network Maintenance',
  'VPN Setup',
  'Firewall Configuration',
  'Network Troubleshooting',
  'IT Infrastructure Consulting'
]

// Printing Services Data
const printingServices = [
  'Flyers & Handbills',
  'Flex Banners',
  'Roll-up Stands',
  'Business Cards',
  'Brochures',
  'Posters',
  'Stickers',
  'T-shirts Printing',
  'Mugs & Merchandise',
  'Calendars',
  'Letterheads',
  'Complimentary Cards'
]

// Social Media Services Data
const socialMediaServices = [
  'Social Media Account Setup',
  'Content Creation',
  'Post Scheduling',
  'Community Management',
  'SEO Optimization',
  'Brand Voice Development',
  'Hashtag Strategy',
  'Analytics & Reporting',
  'Ad Campaign Management',
  'Influencer Outreach',
  'Competitor Analysis',
  'Social Media Strategy'
]
</script>

<style scoped>
.services-page {
  overflow-x: hidden;
  background: #f8f9ff;
}

/* Hero Section */
.services-hero {
  padding: 150px 0 80px;
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  position: relative;
  overflow: hidden;
}

.hero-title {
  font-size: 55px;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;
}

.gradient-text {
  background: linear-gradient(45deg, #fff, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  color: rgba(255,255,255,0.9);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto;
}

/* Hero Stars */
.hero-stars {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.hero-stars .star {
  position: absolute;
  width: 4px;
  height: 4px;
  background: white;
  border-radius: 50%;
  opacity: 0.7;
  animation: twinkle 4s ease-in-out infinite;
}

.hero-stars .star-1 { top: 15%; left: 10%; animation-delay: 0s; }
.hero-stars .star-2 { top: 25%; left: 25%; animation-delay: 0.5s; width: 5px; height: 5px; }
.hero-stars .star-3 { top: 35%; left: 40%; animation-delay: 1s; }
.hero-stars .star-4 { top: 45%; left: 55%; animation-delay: 1.5s; width: 6px; height: 6px; }
.hero-stars .star-5 { top: 55%; left: 70%; animation-delay: 2s; }
.hero-stars .star-6 { top: 65%; left: 85%; animation-delay: 2.5s; }
.hero-stars .star-7 { top: 75%; left: 15%; animation-delay: 3s; width: 5px; height: 5px; }
.hero-stars .star-8 { top: 85%; left: 30%; animation-delay: 3.5s; }
.hero-stars .star-9 { top: 20%; left: 75%; animation-delay: 4s; width: 6px; height: 6px; }
.hero-stars .star-10 { top: 40%; left: 90%; animation-delay: 4.5s; }

@keyframes twinkle {
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
  100% { opacity: 0.3; transform: scale(1); }
}

/* Services Section */
.services-section {
  padding: 80px 0;
}

.service-category {
  background: white;
  border-radius: 30px;
  padding: 40px;
  margin-bottom: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.category-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.category-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category-icon i {
  font-size: 24px;
  color: white;
}

.category-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #0A1F44;
  margin: 0;
  flex: 1;
}

.view-all-link {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #0055FF;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.view-all-link:hover {
  color: #6A0DAD;
  transform: translateX(5px);
}

/* Services Grid for Web Development */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.service-card {
  background: #f8f9ff;
  border-radius: 20px;
  padding: 30px 25px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-5px);
  border-color: #0055FF;
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.service-icon {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
}

.corporate-icon {
  background: linear-gradient(135deg, #0055FF20, #0055FF);
  color: #0055FF;
}

.ecommerce-icon {
  background: linear-gradient(135deg, #6A0DAD20, #6A0DAD);
  color: #6A0DAD;
}

.premium-icon {
  background: linear-gradient(135deg, #0A1F4420, #0A1F44);
  color: #0A1F44;
}

.mobile-icon {
  background: linear-gradient(135deg, #10b98120, #10b981);
  color: #10b981;
}

.maintenance-icon {
  background: linear-gradient(135deg, #f59e0b20, #f59e0b);
  color: #f59e0b;
}

.fintech-icon {
  background: linear-gradient(135deg, #ef444420, #ef4444);
  color: #ef4444;
}

.service-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.service-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
}

.learn-more {
  color: #0055FF;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 5px;
}

.learn-more i {
  transition: transform 0.3s ease;
}

.service-card:hover .learn-more i {
  transform: translateX(5px);
}

/* Services Subgrid for other categories */
.services-subgrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 30px 0;
}

.sub-service-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 15px;
  background: #f8f9ff;
  border-radius: 10px;
  transition: all 0.3s ease;
}

.sub-service-item:hover {
  background: #0055FF;
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,85,255,0.2);
}

.sub-service-item:hover i,
.sub-service-item:hover span {
  color: white;
}

.sub-service-item i {
  color: #10b981;
  font-size: 14px;
}

.sub-service-item span {
  color: #4a5568;
  font-size: 13px;
  font-weight: 500;
}

.category-cta {
  text-align: center;
  margin-top: 30px;
}

.category-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 12px 30px;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.category-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,85,255,0.3);
}

.category-btn i {
  transition: transform 0.3s ease;
}

.category-btn:hover i {
  transform: translateX(5px);
}

/* Why Choose Section */
.why-choose-section {
  padding: 80px 0;
  background: white;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 15px;
}

.section-header p {
  color: #666;
  font-size: 18px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
  max-width: 1200px;
  margin: 0 auto;
}

.feature-card {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9ff;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.feature-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-icon i {
  font-size: 28px;
  color: white;
}

.feature-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.feature-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* CTA Section */
.cta-section {
  padding: 0 0 80px;
}

.cta-card {
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-card h2 {
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}

.cta-card p {
  color: rgba(255,255,255,0.9);
  font-size: 18px;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0055FF;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255,255,255,0.3);
}

.cta-btn i {
  transition: transform 0.3s ease;
}

.cta-btn:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 991px) {
  .hero-title {
    font-size: 40px;
  }
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .services-subgrid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .features-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .section-header h2 {
    font-size: 32px;
  }
}

@media (max-width: 767px) {
  .services-hero {
    padding: 130px 0 60px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .service-category {
    padding: 30px 20px;
  }
  
  .category-header {
    flex-direction: column;
    text-align: center;
  }
  
  .category-header h2 {
    font-size: 24px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .services-subgrid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .features-grid {
    grid-template-columns: 1fr;
  }
  
  .cta-card {
    padding: 40px 20px;
  }
  
  .cta-card h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  
  .services-subgrid {
    grid-template-columns: 1fr;
  }
  
  .sub-service-item {
    padding: 8px 12px;
  }
  
  .sub-service-item span {
    font-size: 12px;
  }
  
  .category-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>