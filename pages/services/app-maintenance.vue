<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero maintenance-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Ongoing Support</span>
                <h1>App <span class="hero-gradient">Maintenance</span></h1>
                <p class="hero-description">Keep your web applications secure, up-to-date, and performing at their best with our comprehensive maintenance packages starting from ₦50,000/month.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=maintenance" class="theme-btn13">
                    Get Support <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                  <NuxtLink to="#pricing" class="theme-btn14">
                    View Packages <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-gear"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Why Maintenance Matters -->
      <section class="why-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Why Ongoing <span class="gradient-text">Maintenance Matters</span></h2>
              <p class="section-description">Your website or application is a living system that needs regular care to remain secure, fast, and effective.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-4" v-for="(reason, index) in whyMaintain" :key="index">
              <div class="reason-card">
                <div class="reason-icon">
                  <i :class="reason.icon"></i>
                </div>
                <h3>{{ reason.title }}</h3>
                <p>{{ reason.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Maintenance Packages -->
      <section id="pricing" class="pricing-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Maintenance <span class="gradient-text">Packages</span></h2>
              <p class="section-description">Choose the level of support that fits your needs.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-lg-10 m-auto">
              <div class="maintenance-pricing-grid">
                <!-- Basic Package -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Basic Care</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">50,000</span>
                      <span class="period">/month</span>
                    </div>
                    <p class="price-note">Perfect for small business websites</p>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Monthly security updates</li>
                      <li><i class="fa-solid fa-check"></i> Weekly backups</li>
                      <li><i class="fa-solid fa-check"></i> Uptime monitoring</li>
                      <li><i class="fa-solid fa-check"></i> 2 hours content updates</li>
                      <li><i class="fa-solid fa-check"></i> Email support (48h response)</li>
                      <li><i class="fa-solid fa-check"></i> Performance checkups</li>
                    </ul>
                    <NuxtLink to="/contact?service=maintenance-basic" class="theme-btn13 full-width">
                      Choose Basic
                    </NuxtLink>
                  </div>
                </div>
  
                <!-- Professional Package -->
                <div class="pricing-card popular">
                  <div class="popular-badge">Most Popular</div>
                  <div class="pricing-header">
                    <h3>Professional Care</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">120,000</span>
                      <span class="period">/month</span>
                    </div>
                    <p class="price-note">Ideal for growing businesses</p>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Weekly security updates</li>
                      <li><i class="fa-solid fa-check"></i> Daily backups</li>
                      <li><i class="fa-solid fa-check"></i> Advanced monitoring</li>
                      <li><i class="fa-solid fa-check"></i> 8 hours content updates</li>
                      <li><i class="fa-solid fa-check"></i> Priority support (24h response)</li>
                      <li><i class="fa-solid fa-check"></i> Monthly performance reports</li>
                      <li><i class="fa-solid fa-check"></i> SEO health checks</li>
                      <li><i class="fa-solid fa-check"></i> Plugin/extension updates</li>
                    </ul>
                    <NuxtLink to="/contact?service=maintenance-pro" class="theme-btn13 full-width">
                      Choose Professional
                    </NuxtLink>
                  </div>
                </div>
  
                <!-- Enterprise Package -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Enterprise Care</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">250,000</span>
                      <span class="period">/month</span>
                    </div>
                    <p class="price-note">For critical business applications</p>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Daily security patches</li>
                      <li><i class="fa-solid fa-check"></i> Hourly backups</li>
                      <li><i class="fa-solid fa-check"></i> 24/7 monitoring</li>
                      <li><i class="fa-solid fa-check"></i> 20 hours content updates</li>
                      <li><i class="fa-solid fa-check"></i> Emergency support (4h response)</li>
                      <li><i class="fa-solid fa-check"></i> Weekly performance reports</li>
                      <li><i class="fa-solid fa-check"></i> Security audits</li>
                      <li><i class="fa-solid fa-check"></i> Load testing</li>
                      <li><i class="fa-solid fa-check"></i> Dedicated account manager</li>
                    </ul>
                    <NuxtLink to="/contact?service=maintenance-enterprise" class="theme-btn13 full-width">
                      Choose Enterprise
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Services Included -->
      <section class="included-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">What's <span class="gradient-text">Included</span></h2>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-6" v-for="(service, index) in includedServices" :key="index">
              <div class="included-card">
                <div class="included-icon">
                  <i :class="service.icon"></i>
                </div>
                <div class="included-content">
                  <h4>{{ service.title }}</h4>
                  <p>{{ service.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Response Time -->
      <section class="response-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="response-content">
                <span class="subtitle">We're Here When You Need Us</span>
                <h2>Fast Response <span class="gradient-text">Guarantee</span></h2>
                <p>Your website downtime costs you money. That's why we guarantee rapid response times for all maintenance packages.</p>
                
                <div class="response-grid">
                  <div class="response-item" v-for="(item, index) in responseTimes" :key="index">
                    <div class="response-time">{{ item.time }}</div>
                    <div class="response-label">{{ item.label }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="response-image">
                <div class="stars-container response-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-headset"></i>
                  <i class="fa-solid fa-clock"></i>
                  <i class="fa-solid fa-message"></i>
                  <i class="fa-solid fa-bolt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Emergency Support -->
      <section class="emergency-section">
        <div class="container">
          <div class="emergency-box">
            <div class="stars-container emergency-stars">
              <div class="star star-1"></div>
              <div class="star star-2"></div>
              <div class="star star-3"></div>
              <div class="star star-4"></div>
              <div class="star star-5"></div>
            </div>
            <h2>Need Emergency Support?</h2>
            <p>If your site is down or experiencing critical issues, we offer emergency support services for all clients.</p>
            <div class="emergency-contact">
              <a href="tel:+2348123456789" class="emergency-phone">
                <i class="fa-solid fa-phone"></i> +234 812 345 6789
              </a>
              <span class="emergency-separator">or</span>
              <NuxtLink to="/contact?service=emergency" class="theme-btn13">
                Contact Us Now
              </NuxtLink>
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
            <h2>Protect Your Investment</h2>
            <p>Don't let your website become vulnerable or outdated. Get professional maintenance today.</p>
            <NuxtLink to="/contact?service=maintenance" class="theme-btn13">
              Get Started <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
  title: 'Website Maintenance Services Nigeria | App Support Abuja - Yemars Technology',
  description: 'Professional website and application maintenance services for Nigerian businesses. Security updates, backups, content updates, and 24/7 support starting from ₦50,000/month.',
  ogTitle: 'Website Maintenance Services for Nigerian Businesses',
  ogDescription: 'Keep your website secure and up-to-date with daily backups, security patches, and priority support.',
  ogImage: '/og-image-app-maintenance.jpg',
  ogUrl: 'https://yemars.ng/services/app-maintenance',
  twitterTitle: 'App Maintenance Services Nigeria',
  twitterDescription: 'Regular security updates, daily backups, and 24/7 support starting ₦50,000/month.',
  twitterImage: '/twitter-image-app-maintenance.jpg',
  keywords: 'website maintenance Nigeria, app support Abuja, website security updates Nigeria, website backup services, content updates Nigeria, website monitoring Nigeria, emergency website support, website maintenance packages, website care plans Nigeria, technical support Abuja, website uptime monitoring, website performance optimization'
})

// Service Schema Data
const serviceSchema = {
  name: 'Website & App Maintenance Services',
  description: 'Professional maintenance services including security updates, daily backups, content updates, and 24/7 monitoring.',
  offers: [
    { name: 'Basic Care Package', price: '50000' },
    { name: 'Professional Care Package', price: '120000' },
    { name: 'Enterprise Care Package', price: '250000' }
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

const whyMaintain = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Security',
    description: 'Regular security patches protect your site from hackers and malware.'
  },
  {
    icon: 'fa-solid fa-gauge-high',
    title: 'Performance',
    description: 'Optimized code and databases ensure fast loading times.'
  },
  {
    icon: 'fa-solid fa-rotate',
    title: 'Updates',
    description: 'Keep your platform, plugins, and features up-to-date.'
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Backups',
    description: 'Regular backups mean you never lose your data.'
  },
  {
    icon: 'fa-solid fa-wrench',
    title: 'Fixes',
    description: 'Quick resolution of bugs and technical issues.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Growth',
    description: 'Continuous improvements to support your business growth.'
  }
]

const includedServices = [
  {
    icon: 'fa-solid fa-shield',
    title: 'Security Monitoring',
    description: '24/7 monitoring for security threats, malware, and unauthorized access attempts.'
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Regular Backups',
    description: 'Automated backups of your entire site and database, stored securely.'
  },
  {
    icon: 'fa-solid fa-code',
    title: 'Core Updates',
    description: 'Updates to your CMS, frameworks, and core platform components.'
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Plugin Management',
    description: 'Updates and compatibility checks for all plugins and extensions.'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'Performance Optimization',
    description: 'Regular speed tests and optimizations for fast loading.'
  },
  {
    icon: 'fa-solid fa-pencil',
    title: 'Content Updates',
    description: 'Make changes to text, images, and content as needed.'
  },
  {
    icon: 'fa-solid fa-chart-simple',
    title: 'Analytics Review',
    description: 'Monthly review of traffic, user behavior, and performance metrics.'
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Technical Support',
    description: 'Expert help when you need it, with guaranteed response times.'
  }
]

const responseTimes = [
  { time: '24/7', label: 'Monitoring' },
  { time: '4h', label: 'Emergency Response' },
  { time: '24h', label: 'Standard Response' },
  { time: '48h', label: 'Content Updates' }
]

const faqs = [
  {
    question: 'Do I need maintenance if my site is working fine?',
    answer: 'Yes! Even if your site appears fine, security vulnerabilities are discovered daily. Regular maintenance prevents issues before they happen and keeps your site secure.'
  },
  {
    question: 'What happens if I don\'t maintain my website?',
    answer: 'Unmaintained sites become vulnerable to hacking, load slowly, break on new browsers, and can lose search engine rankings. Eventually, they may stop working entirely.'
  },
  {
    question: 'Can I switch packages later?',
    answer: 'Absolutely! You can upgrade or downgrade your maintenance package at any time based on your needs.'
  },
  {
    question: 'Do you maintain sites you didn\'t build?',
    answer: 'Yes, we provide maintenance services for websites built by other developers, though we may recommend a security audit first.'
  },
  {
    question: 'What counts as a content update?',
    answer: 'Content updates include text changes, image replacements, adding new pages, blog posts, and minor layout adjustments. Major redesigns are billed separately.'
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

.maintenance-hero {
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

.response-stars .star,
.emergency-stars .star,
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

/* Why Section */
.why-section {
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

.reason-card {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9ff;
  border-radius: 15px;
  transition: all 0.3s ease;
  height: 100%;
}

.reason-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.reason-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.reason-icon i {
  font-size: 30px;
  color: white;
}

.reason-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.reason-card p {
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

.maintenance-pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.pricing-card {
  background: white;
  border-radius: 20px;
  padding: 30px 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  position: relative;
  border: 2px solid transparent;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.pricing-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.1);
}

.pricing-card.popular {
  border-color: #6A0DAD;
  transform: scale(1.05);
  z-index: 2;
}

.popular-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 5px 20px;
  border-radius: 25px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
}

.pricing-header {
  text-align: center;
  margin-bottom: 25px;
}

.pricing-header h3 {
  font-size: 22px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 15px;
}

.price {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  margin-bottom: 5px;
}

.price .currency {
  font-size: 18px;
  font-weight: 600;
  color: #0055FF;
}

.price .amount {
  font-size: 32px;
  font-weight: 800;
  color: #0055FF;
  line-height: 1;
}

.price .period {
  font-size: 14px;
  color: #999;
}

.price-note {
  color: #999;
  font-size: 13px;
  margin-top: 5px;
}

.pricing-features {
  list-style: none;
  padding: 0;
  margin: 0 0 25px;
  flex-grow: 1;
}

.pricing-features li {
  margin-bottom: 10px;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.pricing-features li i {
  color: #10b981;
  font-size: 14px;
}

.full-width {
  width: 100%;
  text-align: center;
  justify-content: center;
}

/* Included Section */
.included-section {
  padding: 80px 0;
  background: white;
}

.included-card {
  display: flex;
  gap: 20px;
  background: #f8f9ff;
  border-radius: 15px;
  padding: 25px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  height: 100%;
}

.included-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.included-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.included-icon i {
  font-size: 20px;
  color: white;
}

.included-content h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 5px;
}

.included-content p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

/* Response Section */
.response-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.response-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.response-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.response-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.response-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.response-item {
  background: white;
  border-radius: 15px;
  padding: 20px;
  text-align: center;
  border: 1px solid #eef2f6;
}

.response-time {
  font-size: 32px;
  font-weight: 800;
  color: #0055FF;
  margin-bottom: 5px;
}

.response-label {
  color: #666;
  font-size: 14px;
}

.response-image {
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
  gap: 20px;
  flex-wrap: wrap;
  animation: float 3s ease-in-out infinite;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,85,255,0.3);
  padding: 20px;
}

.icon-wrapper-large i {
  font-size: 60px;
  color: white;
  animation: pulse 2s ease-in-out infinite;
}

.icon-wrapper-large i:nth-child(1) { animation-delay: 0s; }
.icon-wrapper-large i:nth-child(2) { animation-delay: 0.3s; }
.icon-wrapper-large i:nth-child(3) { animation-delay: 0.6s; }
.icon-wrapper-large i:nth-child(4) { animation-delay: 0.9s; }

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

/* Emergency Section */
.emergency-section {
  padding: 80px 0;
  background: white;
}

.emergency-box {
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.emergency-box h2 {
  font-size: 40px;
  font-weight: 700;
  color: white;
  margin-bottom: 20px;
  position: relative;
  z-index: 2;
}

.emergency-box p {
  color: rgba(255,255,255,0.8);
  font-size: 18px;
  max-width: 600px;
  margin: 0 auto 30px;
  position: relative;
  z-index: 2;
}

.emergency-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  position: relative;
  z-index: 2;
  flex-wrap: wrap;
}

.emergency-phone {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(255,255,255,0.1);
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid rgba(255,255,255,0.3);
  transition: all 0.3s ease;
}

.emergency-phone:hover {
  background: rgba(255,255,255,0.2);
  transform: translateY(-2px);
}

.emergency-separator {
  color: rgba(255,255,255,0.5);
  font-weight: 600;
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
  
  .maintenance-pricing-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .pricing-card.popular {
    transform: scale(1);
  }
  
  .response-grid {
    grid-template-columns: 1fr;
  }
  
  .emergency-contact {
    flex-direction: column;
  }
  
  .emergency-separator {
    display: none;
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
  
  .emergency-box {
    padding: 40px 20px;
  }
  
  .emergency-box h2 {
    font-size: 28px;
  }
  
  .included-card {
    flex-direction: column;
    text-align: center;
  }
  
  .included-icon {
    margin: 0 auto;
  }
}
</style>