<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero ecommerce-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">E-Commerce Solutions</span>
                <h1>E-Commerce <span class="hero-gradient">Systems</span></h1>
                <p class="hero-description">Complete online store solutions with Nigerian payment integrations (Paystack, Flutterwave), inventory management, and everything you need to sell online.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=ecommerce" class="theme-btn13">
                    Start Your Store <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-cart-shopping"></i>
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
              <h2 class="section-title">Sell Online with <span class="gradient-text">Confidence</span></h2>
              <p class="section-description">Our e-commerce systems are built for the Nigerian market with local payment gateways, delivery integrations, and mobile-first design.</p>
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
  
      <!-- Payment Gateways -->
      <section class="payment-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="payment-content">
                <span class="subtitle">Nigerian Payments</span>
                <h2>Local Payment <span class="gradient-text">Integrations</span></h2>
                <p>We integrate all major Nigerian payment gateways so your customers can pay easily.</p>
                
                <div class="payment-grid">
                  <div class="payment-item" v-for="gateway in paymentGateways" :key="gateway.name">
                    <i :class="gateway.icon"></i>
                    <span>{{ gateway.name }}</span>
                  </div>
                </div>
                
                <ul class="payment-features">
                  <li><i class="fa-solid fa-check-circle"></i> Paystack integration</li>
                  <li><i class="fa-solid fa-check-circle"></i> Flutterwave support</li>
                  <li><i class="fa-solid fa-check-circle"></i> Bank transfer options</li>
                  <li><i class="fa-solid fa-check-circle"></i> USSD payments</li>
                  <li><i class="fa-solid fa-check-circle"></i> Installment plans</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="payment-image">
                <div class="stars-container payment-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-credit-card"></i>
                  <i class="fa-solid fa-building-columns"></i>
                  <i class="fa-solid fa-mobile"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Features Section -->
      <section class="features-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Complete <span class="gradient-text">E-Commerce Features</span></h2>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-6 col-lg-4" v-for="(feature, index) in featuresList" :key="index">
              <div class="ecommerce-feature-card">
                <div class="feature-icon-small">
                  <i :class="feature.icon"></i>
                </div>
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
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
              <p class="section-description">Complete e-commerce solution with everything included.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-lg-8 m-auto">
              <div class="pricing-card">
                <div class="pricing-header">
                  <h3>E-Commerce System</h3>
                  <div class="price">
                    <span class="currency">₦</span>
                    <span class="amount">1,200,000</span>
                    <span class="period">/one-time</span>
                  </div>
                </div>
                <div class="pricing-body">
                  <ul class="pricing-features">
                    <li><i class="fa-solid fa-check-circle"></i> Unlimited products</li>
                    <li><i class="fa-solid fa-check-circle"></i> Multiple payment gateways</li>
                    <li><i class="fa-solid fa-check-circle"></i> Inventory management</li>
                    <li><i class="fa-solid fa-check-circle"></i> Order tracking system</li>
                    <li><i class="fa-solid fa-check-circle"></i> Customer accounts</li>
                    <li><i class="fa-solid fa-check-circle"></i> Discount & coupon system</li>
                    <li><i class="fa-solid fa-check-circle"></i> Shipping integration</li>
                    <li><i class="fa-solid fa-check-circle"></i> Sales reports & analytics</li>
                    <li><i class="fa-solid fa-check-circle"></i> 3 months free maintenance</li>
                    <li><i class="fa-solid fa-check-circle"></i> SSL certificate included</li>
                    <li><i class="fa-solid fa-check-circle"></i> Nigerian hosting</li>
                    <li><i class="fa-solid fa-check-circle"></i> 24/7 support</li>
                  </ul>
                  <div class="pricing-cta">
                    <NuxtLink to="/contact?service=ecommerce" class="theme-btn13 full-width">
                      Start Your Store <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
            <h2>Ready to Launch Your Online Store?</h2>
            <p>Let's build a powerful e-commerce platform that drives sales and grows your business.</p>
            <NuxtLink to="/contact?service=ecommerce" class="theme-btn13">
              Start Your Store <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
  title: 'E-Commerce Systems Nigeria | Online Store Development Abuja - Yemars Technology',
  description: 'Complete e-commerce solutions for Nigerian businesses. Sell online with local payment integrations (Paystack, Flutterwave), inventory management, and mobile-friendly design. Starting from ₦1,200,000.',
  ogTitle: 'E-Commerce Website Development for Nigerian Businesses',
  ogDescription: 'Build your online store with Nigerian payment gateways. Unlimited products, inventory management, and mobile-optimized checkout.',
  ogImage: '/og-image-ecommerce.jpg',
  ogUrl: 'https://yemars.ng/services/ecommerce-systems',
  twitterTitle: 'E-Commerce Development Nigeria',
  twitterDescription: 'Complete online store solutions with Paystack, Flutterwave, and local delivery integration.',
  twitterImage: '/twitter-image-ecommerce.jpg',
  keywords: 'ecommerce website design Nigeria, online store development Abuja, payment gateway integration Nigeria, ecommerce solutions, online shop builder Nigeria, Paystack integration, Flutterwave ecommerce, online store cost Nigeria, ecommerce platform Nigeria, online shopping cart development, product catalog management, Nigerian online store'
})

// Service Schema Data
const serviceSchema = {
  name: 'E-Commerce System Development',
  description: 'Complete online store solutions with Nigerian payment integrations (Paystack, Flutterwave), inventory management, and mobile-optimized checkout.',
  offers: [
    { name: 'Basic E-Commerce', price: '1200000' },
    { name: 'Professional E-Commerce', price: '1800000' },
    { name: 'Enterprise E-Commerce', price: '2500000' }
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
    icon: 'fa-solid fa-credit-card',
    title: 'Local Payments',
    description: 'Paystack, Flutterwave, bank transfers, and USSD payments.'
  },
  {
    icon: 'fa-solid fa-truck',
    title: 'Delivery Integration',
    description: 'Connect with GIG Logistics, DHL, and local couriers.'
  },
  {
    icon: 'fa-solid fa-chart-simple',
    title: 'Sales Analytics',
    description: 'Track sales, revenue, and customer behavior in real-time.'
  },
  {
    icon: 'fa-solid fa-boxes-packing',
    title: 'Inventory Management',
    description: 'Track stock levels, low stock alerts, and bulk updates.'
  },
  {
    icon: 'fa-solid fa-mobile-screen-button',
    title: 'Mobile Optimized',
    description: 'Perfect shopping experience on phones and tablets.'
  },
  {
    icon: 'fa-solid fa-tag',
    title: 'Discount System',
    description: 'Create coupons, flash sales, and promotional offers.'
  }
]

const paymentGateways = [
  { name: 'Paystack', icon: 'fa-solid fa-bolt' },
  { name: 'Flutterwave', icon: 'fa-solid fa-water' },
  { name: 'Interswitch', icon: 'fa-solid fa-arrow-right-arrow-left' },
  { name: 'Remita', icon: 'fa-solid fa-building-columns' }
]

const featuresList = [
  {
    icon: 'fa-solid fa-store',
    title: 'Beautiful Storefront',
    description: 'Custom design that reflects your brand and showcases your products.'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Advanced Search',
    description: 'Customers can find products by category, price, or keywords.'
  },
  {
    icon: 'fa-solid fa-star',
    title: 'Product Reviews',
    description: 'Let customers rate and review products to build trust.'
  },
  {
    icon: 'fa-solid fa-heart',
    title: 'Wishlist',
    description: 'Customers can save products for later purchase.'
  },
  {
    icon: 'fa-solid fa-truck-fast',
    title: 'Shipping Calculator',
    description: 'Automatic shipping cost calculation based on location.'
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Email Notifications',
    description: 'Order confirmations, shipping updates, and promotions.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Sales Reports',
    description: 'Detailed reports on sales, popular products, and customers.'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Customer Management',
    description: 'View customer history, addresses, and order patterns.'
  },
  {
    icon: 'fa-solid fa-shield',
    title: 'Secure Checkout',
    description: 'SSL encrypted checkout for customer safety.'
  }
]

const faqs = [
  {
    question: 'How long does it take to build an e-commerce site?',
    answer: 'Typically 6-8 weeks for a complete e-commerce system with all features. This includes design, development, payment integration, and testing.'
  },
  {
    question: 'Which payment gateways do you integrate?',
    answer: 'We integrate all major Nigerian payment gateways including Paystack, Flutterwave, Interswitch, and bank transfer options.'
  },
  {
    question: 'Can I manage my store on mobile?',
    answer: 'Yes, your store will have a mobile-optimized admin panel so you can manage products, orders, and customers from your phone.'
  },
  {
    question: 'Do you provide training?',
    answer: 'Absolutely! We provide comprehensive training on how to manage your store, add products, process orders, and generate reports.'
  },
  {
    question: 'What about shipping integration?',
    answer: 'We can integrate with Nigerian courier services like GIG Logistics, DHL, and others for automatic shipping calculation.'
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

.ecommerce-hero {
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

.payment-stars .star,
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

/* Payment Section */
.payment-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.payment-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.payment-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.payment-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.payment-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 30px;
}

.payment-item {
  background: white;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  border: 1px solid #eef2f6;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.payment-item i {
  font-size: 30px;
  color: #0055FF;
}

.payment-item span {
  font-weight: 600;
  color: #0A1F44;
}

.payment-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.payment-features li {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
}

.payment-features li i {
  color: #10b981;
  font-size: 16px;
}

.payment-image {
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
  animation: float 3s ease-in-out infinite;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,85,255,0.3);
}

.icon-wrapper-large i {
  font-size: 60px;
  color: white;
  animation: bounce 2s ease-in-out infinite;
}

.icon-wrapper-large i:nth-child(1) { animation-delay: 0s; }
.icon-wrapper-large i:nth-child(2) { animation-delay: 0.3s; }
.icon-wrapper-large i:nth-child(3) { animation-delay: 0.6s; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Features Section */
.features-section {
  padding: 80px 0;
  background: white;
}

.ecommerce-feature-card {
  background: #f8f9ff;
  border-radius: 15px;
  padding: 30px 20px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  height: 100%;
  text-align: center;
}

.ecommerce-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.feature-icon-small {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.feature-icon-small i {
  font-size: 24px;
  color: white;
}

.ecommerce-feature-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.ecommerce-feature-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

/* Pricing Section */
.pricing-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.pricing-card {
  background: white;
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
  background: white;
}

.faq-item {
  background: #f8f9ff;
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
  background: #f8f9ff;
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
  
  .payment-grid {
    grid-template-columns: 1fr;
  }
  
  .payment-features {
    grid-template-columns: 1fr;
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
  
  .icon-wrapper-large {
    width: 220px;
    height: 220px;
  }
  
  .icon-wrapper-large i {
    font-size: 40px;
  }
  
  .pricing-card {
    padding: 30px 20px;
  }
  
  .price .amount {
    font-size: 36px;
  }
  
  .payment-content h2 {
    font-size: 32px;
  }
}
</style>