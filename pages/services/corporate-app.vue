<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero corporate-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Corporate Solutions</span>
                <h1>Corporate Web <span class="hero-gradient">App</span></h1>
                <p class="hero-description">Custom business applications designed to streamline your operations, enhance productivity, and drive growth in the Nigerian market.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=corporate-app" class="theme-btn13">
                    Start Your Project <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                  <NuxtLink to="#pricing" class="theme-btn14">
                    View Pricing <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="hero-image">
                <div class="stars-container hero-stars">
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
                <div class="shape-bg"></div>
                <div class="icon-wrapper">
                  <i class="fa-solid fa-building"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Overview Section -->
      <section class="overview-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Streamline Your <span class="gradient-text">Business Operations</span></h2>
              <p class="section-description">Our corporate web applications are built to handle the unique challenges of Nigerian businesses, from inventory management to employee portals and everything in between.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-4" v-for="(feature, index) in overviewFeatures" :key="index">
              <div class="feature-card">
                <div class="feature-icon">
                  <i :class="feature.icon"></i>
                </div>
                <h3>{{ feature.title }}</h3>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="features-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="features-content">
                <span class="subtitle">What You Get</span>
                <h2>Powerful Features for <span class="gradient-text">Modern Businesses</span></h2>
                <ul class="features-list">
                  <li v-for="(feature, index) in featuresList" :key="index">
                    <span class="check"><i class="fa-solid fa-check"></i></span>
                    <div>
                      <h4>{{ feature.title }}</h4>
                      <p>{{ feature.description }}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="features-image">
                <div class="stars-container features-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-chart-line"></i>
                  <i class="fa-solid fa-users"></i>
                  <i class="fa-solid fa-boxes"></i>
                  <i class="fa-solid fa-shield"></i>
                  <i class="fa-solid fa-mobile-screen"></i>
                  <i class="fa-solid fa-cloud"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Pricing Section -->
      <section id="pricing" class="pricing-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Transparent <span class="gradient-text">Naira Pricing</span></h2>
              <p class="section-description">No hidden fees. Pay in Nigerian Naira.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-lg-8 m-auto">
              <div class="pricing-card">
                <div class="pricing-header">
                  <h3>Corporate Web App</h3>
                  <div class="price">
                    <span class="currency">₦</span>
                    <span class="amount">550,000</span>
                    <span class="period">/one-time</span>
                  </div>
                </div>
                <div class="pricing-body">
                  <ul class="pricing-features">
                    <li><i class="fa-solid fa-check-circle"></i> Custom dashboard design</li>
                    <li><i class="fa-solid fa-check-circle"></i> Employee management system</li>
                    <li><i class="fa-solid fa-check-circle"></i> Inventory tracking</li>
                    <li><i class="fa-solid fa-check-circle"></i> Report generation</li>
                    <li><i class="fa-solid fa-check-circle"></i> User role management</li>
                    <li><i class="fa-solid fa-check-circle"></i> 3 months free maintenance</li>
                    <li><i class="fa-solid fa-check-circle"></i> Nigerian hosting included</li>
                    <li><i class="fa-solid fa-check-circle"></i> SSL certificate</li>
                    <li><i class="fa-solid fa-check-circle"></i> 24/7 support</li>
                  </ul>
                  <div class="pricing-cta">
                    <NuxtLink to="/contact?service=corporate-app" class="theme-btn13 full-width">
                      Get Started Now <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                      <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- FAQ Section -->
      <section class="faq-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Frequently Asked <span class="gradient-text">Questions</span></h2>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-lg-8 m-auto">
              <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
                <div class="faq-question" @click="toggleFaq(index)">
                  <h4>{{ faq.question }}</h4>
                  <i class="fa-solid" :class="activeFaq === index ? 'fa-minus' : 'fa-plus'"></i>
                </div>
                <div class="faq-answer" v-show="activeFaq === index">
                  <p>{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="cta-section">
        <div class="container">
          <div class="cta-box">
            <div class="stars-container cta-stars">
              <div class="star star-1"></div>
              <div class="star star-2"></div>
              <div class="star star-3"></div>
              <div class="star star-4"></div>
              <div class="star star-5"></div>
            </div>
            <h2>Ready to Transform Your Business?</h2>
            <p>Let's discuss your requirements and build a custom corporate web app tailored to your needs.</p>
            <NuxtLink to="/contact?service=corporate-app" class="theme-btn13">
              Start Your Project <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
              <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServiceSchema from '~/components/SEO/ServiceSchema.vue'

// Enhanced SEO Meta Tags
useSeoMeta({
  title: 'Corporate Web App Development Nigeria | Business Software Solutions Abuja - Yemars Technology',
  description: 'Custom corporate web applications for Nigerian businesses. Streamline operations with employee portals, inventory management, and business intelligence tools. Starting from ₦550,000 with transparent Naira pricing.',
  ogTitle: 'Corporate Web App Development for Nigerian Businesses',
  ogDescription: 'Build powerful business applications tailored to your needs with employee portals, inventory management, and real-time reporting.',
  ogImage: '/og-image-corporate-app.jpg',
  ogUrl: 'https://yemars.ng/services/corporate-app',
  twitterTitle: 'Corporate Web App Development Nigeria',
  twitterDescription: 'Custom business applications with employee portals, inventory management, and more. Starting ₦550,000.',
  twitterImage: '/twitter-image-corporate-app.jpg',
  keywords: 'corporate web application Nigeria, business software development Abuja, enterprise web solutions Nigeria, custom business apps, employee portal development Nigeria, inventory management software Abuja, business intelligence tools Nigeria, company management software, HR management system Nigeria, workflow automation Abuja'
})

// Service Schema Data
const serviceSchema = {
  name: 'Corporate Web Application Development',
  description: 'Custom business applications with employee portals, inventory management, and business intelligence tools for Nigerian companies.',
  offers: [
    { name: 'Starter Corporate App', price: '550000' },
    { name: 'Professional Corporate App', price: '850000' },
    { name: 'Enterprise Corporate App', price: '1200000' }
  ]
}

const activeFaq = ref(0)

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null
  } else {
    activeFaq.value = index
  }
}

const overviewFeatures = [
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Performance Tracking',
    description: 'Real-time analytics and reporting to monitor your business KPIs.'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Employee Management',
    description: 'Complete HR tools for staff records, attendance, and payroll.'
  },
  {
    icon: 'fa-solid fa-boxes',
    title: 'Inventory Control',
    description: 'Track stock levels, orders, and suppliers in one place.'
  },
  {
    icon: 'fa-solid fa-shield',
    title: 'Data Security',
    description: 'Enterprise-grade security to protect your business data.'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Mobile Responsive',
    description: 'Access your corporate app on any device, anywhere.'
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Cloud Hosting',
    description: 'Reliable Nigerian cloud hosting with 99.9% uptime.'
  }
]

const featuresList = [
  {
    title: 'Custom Dashboard',
    description: 'Personalized dashboard showing your most important business metrics.'
  },
  {
    title: 'User Role Management',
    description: 'Set permissions for different staff levels - admin, manager, employee.'
  },
  {
    title: 'Document Management',
    description: 'Upload, store, and share company documents securely.'
  },
  {
    title: 'Task Management',
    description: 'Assign and track tasks across your team with deadlines.'
  },
  {
    title: 'Communication Portal',
    description: 'Internal messaging and announcement system for your team.'
  },
  {
    title: 'Report Generation',
    description: 'Generate custom reports for sales, inventory, and employee performance.'
  }
]

const faqs = [
  {
    question: 'How long does it take to build a corporate web app?',
    answer: 'Typically 4-6 weeks depending on the complexity of your requirements. We follow an agile development process with regular updates.'
  },
  {
    question: 'Can I integrate my existing systems?',
    answer: 'Yes, we can integrate with your existing software, databases, and third-party APIs to ensure seamless data flow.'
  },
  {
    question: 'Do you provide training for my staff?',
    answer: 'Absolutely! We provide comprehensive training sessions for your team and detailed documentation for the system.'
  },
  {
    question: 'What about maintenance after launch?',
    answer: 'We include 3 months of free maintenance and support. After that, you can choose our affordable maintenance packages.'
  },
  {
    question: 'Is the app mobile-friendly?',
    answer: 'Yes, all our corporate web apps are fully responsive and work seamlessly on desktops, tablets, and smartphones.'
  }
]
</script>

<style scoped>
.service-detail-page {
  overflow-x: hidden;
}

/* Hero Section */
.service-hero {
  padding: 150px 0 80px;
  position: relative;
  overflow: hidden;
}

.corporate-hero {
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
}

.service-badge {
  display: inline-block;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 8px 20px;
  border-radius: 30px;
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 25px;
  border: 1px solid rgba(255,255,255,0.2);
}

.hero-content h1 {
  font-size: 55px;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-gradient {
  background: linear-gradient(45deg, #fff, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.gradient-text {
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  color: rgba(255,255,255,0.8);
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 500px;
}

.hero-cta {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.theme-btn13 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 15px 35px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: none;
  cursor: pointer;
  font-size: 16px;
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
  right: 35px;
  opacity: 0;
}

.theme-btn13:hover .arrow1 {
  transform: translateX(-10px);
  opacity: 0;
}

.theme-btn13:hover .arrow2 {
  right: 30px;
  opacity: 1;
}

.theme-btn14 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: white;
  padding: 15px 35px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid rgba(255,255,255,0.3);
}

.theme-btn14:hover {
  border-color: white;
  transform: translateY(-2px);
}

.theme-btn14 .arrow1,
.theme-btn14 .arrow2 {
  transition: all 0.3s ease;
}

.theme-btn14 .arrow2 {
  position: absolute;
  right: 35px;
  opacity: 0;
}

.theme-btn14:hover .arrow1 {
  transform: translateX(-10px);
  opacity: 0;
}

.theme-btn14:hover .arrow2 {
  right: 30px;
  opacity: 1;
}

.hero-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.hero-image .shape-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  filter: blur(50px);
  z-index: 1;
}

.hero-image .icon-wrapper {
  width: 200px;
  height: 200px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid rgba(255,255,255,0.2);
  animation: float 3s ease-in-out infinite;
  z-index: 2;
}

.hero-image .icon-wrapper i {
  font-size: 100px;
  color: white;
}

/* Stars Animation */
.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.hero-stars .star {
  background: white;
  box-shadow: 0 0 10px rgba(255,255,255,0.8);
}

.features-stars .star,
.cta-stars .star {
  background: #0055FF;
  box-shadow: 0 0 10px rgba(0,85,255,0.8);
}

.star {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  opacity: 0.7;
  animation: twinkle 4s ease-in-out infinite;
}

.star-1 { top: 15%; left: 10%; animation-delay: 0s; }
.star-2 { top: 25%; left: 25%; animation-delay: 0.5s; width: 5px; height: 5px; }
.star-3 { top: 35%; left: 40%; animation-delay: 1s; }
.star-4 { top: 45%; left: 55%; animation-delay: 1.5s; width: 6px; height: 6px; }
.star-5 { top: 55%; left: 70%; animation-delay: 2s; }
.star-6 { top: 65%; left: 85%; animation-delay: 2.5s; }
.star-7 { top: 75%; left: 15%; animation-delay: 3s; width: 5px; height: 5px; }
.star-8 { top: 85%; left: 30%; animation-delay: 3.5s; }
.star-9 { top: 20%; left: 75%; animation-delay: 4s; width: 6px; height: 6px; }
.star-10 { top: 40%; left: 90%; animation-delay: 4.5s; }

@keyframes twinkle {
  0% { opacity: 0.3; transform: scale(1) translateY(0); }
  50% { opacity: 1; transform: scale(1.5) translateY(-5px); }
  100% { opacity: 0.3; transform: scale(1) translateY(0); }
}

/* Overview Section */
.overview-section {
  padding: 80px 0;
  background: white;
}

.section-title {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.section-description {
  color: #666;
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto;
}

.mt-50 {
  margin-top: 50px;
}

.feature-card {
  text-align: center;
  padding: 30px 20px;
  border-radius: 15px;
  background: #f8f9ff;
  transition: all 0.3s ease;
  height: 100%;
}

.feature-card:hover {
  transform: translateY(-10px);
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
  font-size: 30px;
  color: white;
}

.feature-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.feature-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

/* Features Section */
.features-section {
  padding: 80px 0;
  background: #f8f9ff;
  position: relative;
  overflow: hidden;
}

.features-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.features-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 30px;
}

.features-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.features-list li {
  display: flex;
  gap: 15px;
  margin-bottom: 25px;
}

.features-list li .check {
  width: 30px;
  height: 30px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  flex-shrink: 0;
}

.features-list li h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 5px;
}

.features-list li p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.features-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.icon-wrapper-large {
  width: 280px;
  height: 280px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  animation: float 3s ease-in-out infinite;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,85,255,0.3);
  padding: 20px;
}

.icon-wrapper-large i {
  font-size: 50px;
  color: white;
  animation: bounce 3s ease-in-out infinite;
}

.icon-wrapper-large i:nth-child(1) { animation-delay: 0s; }
.icon-wrapper-large i:nth-child(2) { animation-delay: 0.2s; }
.icon-wrapper-large i:nth-child(3) { animation-delay: 0.4s; }
.icon-wrapper-large i:nth-child(4) { animation-delay: 0.6s; }
.icon-wrapper-large i:nth-child(5) { animation-delay: 0.8s; }
.icon-wrapper-large i:nth-child(6) { animation-delay: 1s; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Pricing Section */
.pricing-section {
  padding: 80px 0;
  background: white;
}

.pricing-card {
  background: linear-gradient(135deg, #f8f9ff, #ffffff);
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  border: 1px solid #eef2f6;
  position: relative;
  overflow: hidden;
}

.pricing-card::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  opacity: 0.05;
  border-radius: 50%;
  transform: translate(50%, -50%);
}

.pricing-header {
  text-align: center;
  margin-bottom: 30px;
}

.pricing-header h3 {
  font-size: 28px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 15px;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
}

.price .currency {
  font-size: 24px;
  font-weight: 600;
  color: #0055FF;
}

.price .amount {
  font-size: 48px;
  font-weight: 800;
  color: #0055FF;
  line-height: 1;
}

.price .period {
  font-size: 16px;
  color: #999;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.pricing-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4a5568;
  font-size: 15px;
}

.pricing-features li i {
  color: #10b981;
  font-size: 18px;
}

.full-width {
  width: 100%;
  text-align: center;
  justify-content: center;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.faq-item {
  background: white;
  border-radius: 15px;
  margin-bottom: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
}

.faq-question {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question:hover {
  background: #f0f2f5;
}

.faq-question h4 {
  font-size: 18px;
  font-weight: 600;
  color: #0A1F44;
  margin: 0;
}

.faq-question i {
  color: #0055FF;
  font-size: 16px;
}

.faq-answer {
  padding: 0 25px 20px;
  color: #666;
  line-height: 1.8;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: white;
}

.cta-box {
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-box h2 {
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.cta-box p {
  color: rgba(255,255,255,0.8);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 30px;
  position: relative;
  z-index: 2;
}

.cta-box .theme-btn13 {
  position: relative;
  z-index: 2;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Responsive */
@media (max-width: 991px) {
  .hero-content h1 {
    font-size: 40px;
  }
  
  .hero-image {
    margin-top: 50px;
  }
  
  .section-title {
    font-size: 32px;
  }
  
  .features-content h2 {
    font-size: 32px;
  }
  
  .features-image {
    margin-top: 50px;
  }
  
  .pricing-features {
    grid-template-columns: 1fr;
  }
  
  .cta-box h2 {
    font-size: 32px;
  }
}

@media (max-width: 767px) {
  .service-hero {
    padding: 130px 0 60px;
  }
  
  .hero-content h1 {
    font-size: 32px;
  }
  
  .hero-cta {
    flex-direction: column;
  }
  
  .hero-cta a {
    width: 100%;
    text-align: center;
    justify-content: center;
  }
  
  .hero-image .icon-wrapper {
    width: 150px;
    height: 150px;
  }
  
  .hero-image .icon-wrapper i {
    font-size: 70px;
  }
  
  .features-image .icon-wrapper-large {
    width: 250px;
    height: 250px;
  }
  
  .features-image .icon-wrapper-large i {
    font-size: 40px;
  }
  
  .pricing-card {
    padding: 30px 20px;
  }
  
  .price .amount {
    font-size: 36px;
  }
}
</style>