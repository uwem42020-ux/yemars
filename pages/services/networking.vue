<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero networking-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">IT Infrastructure</span>
                <h1>Networking <span class="hero-gradient">Services</span></h1>
                <p class="hero-description">Professional networking solutions for businesses in Abuja. From office setup to complete IT infrastructure, we keep you connected. Packages starting from ₦150,000.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=networking" class="theme-btn13">
                    Get a Quote <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-network-wired"></i>
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
              <h2 class="section-title">Reliable <span class="gradient-text">Network Infrastructure</span></h2>
              <p class="section-description">Keep your business connected with professional networking solutions tailored to your specific needs.</p>
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

      <!-- Networking Services Grid -->
      <section class="services-grid-section">
        <div class="container">
          <div class="section-header">
            <h2>Our <span class="gradient-text">Networking Solutions</span></h2>
            <p>Comprehensive networking services for businesses of all sizes</p>
          </div>

          <div class="services-grid">
            <div v-for="(service, index) in networkingServices" :key="index" class="service-card">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Office Networking Section -->
      <section class="office-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="office-content">
                <span class="subtitle">Office Setup</span>
                <h2>Complete Office <span class="gradient-text">Networking</span></h2>
                <p>Get your office connected with professional LAN and wireless solutions.</p>
                
                <div class="office-grid">
                  <div class="office-item" v-for="item in officeServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="office-image">
                <div class="stars-container office-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-building"></i>
                  <i class="fa-solid fa-wifi"></i>
                  <i class="fa-solid fa-server"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Security Section -->
      <section class="security-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="security-content">
                <span class="subtitle">Security Solutions</span>
                <h2>Network Security & <span class="gradient-text">Surveillance</span></h2>
                <p>Protect your business with advanced security systems and monitoring.</p>
                
                <div class="security-grid">
                  <div class="security-item" v-for="item in securityServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="security-image">
                <div class="stars-container security-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-shield-halved"></i>
                  <i class="fa-solid fa-video"></i>
                  <i class="fa-solid fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Infrastructure Section -->
      <section class="infrastructure-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="infrastructure-content">
                <span class="subtitle">IT Infrastructure</span>
                <h2>Complete IT <span class="gradient-text">Infrastructure</span></h2>
                <p>End-to-end IT solutions including servers, workstations, and maintenance.</p>
                
                <div class="infrastructure-grid">
                  <div class="infrastructure-item" v-for="item in infrastructureServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="infrastructure-image">
                <div class="stars-container infrastructure-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-computer"></i>
                  <i class="fa-solid fa-database"></i>
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
              <h2 class="section-title">Networking <span class="gradient-text">Packages</span></h2>
              <p class="section-description">Custom solutions tailored to your business size</p>
            </div>
          </div>

          <div class="row mt-50">
            <div class="col-lg-10 m-auto">
              <div class="pricing-grid">
                <!-- Small Office -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Small Office</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">150,000</span>
                      <span class="period">/setup</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Up to 10 Workstations</li>
                      <li><i class="fa-solid fa-check"></i> WiFi Router Setup</li>
                      <li><i class="fa-solid fa-check"></i> Network Cabling</li>
                      <li><i class="fa-solid fa-check"></i> Basic Firewall</li>
                      <li><i class="fa-solid fa-check"></i> 3 Months Support</li>
                    </ul>
                    <NuxtLink to="/contact?service=networking-small" class="theme-btn13 full-width">
                      Choose Package
                    </NuxtLink>
                  </div>
                </div>

                <!-- Medium Office -->
                <div class="pricing-card popular">
                  <div class="popular-badge">Most Popular</div>
                  <div class="pricing-header">
                    <h3>Medium Office</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">350,000</span>
                      <span class="period">/setup</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Up to 25 Workstations</li>
                      <li><i class="fa-solid fa-check"></i> Server Setup</li>
                      <li><i class="fa-solid fa-check"></i> CCTV Installation (4 Cameras)</li>
                      <li><i class="fa-solid fa-check"></i> Advanced Firewall</li>
                      <li><i class="fa-solid fa-check"></i> 6 Months Support</li>
                    </ul>
                    <NuxtLink to="/contact?service=networking-medium" class="theme-btn13 full-width">
                      Choose Package
                    </NuxtLink>
                  </div>
                </div>

                <!-- Enterprise -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Enterprise</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">750,000+</span>
                      <span class="period">/setup</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> 50+ Workstations</li>
                      <li><i class="fa-solid fa-check"></i> Complete Server Room</li>
                      <li><i class="fa-solid fa-check"></i> Full CCTV System</li>
                      <li><i class="fa-solid fa-check"></i> VPN Setup</li>
                      <li><i class="fa-solid fa-check"></i> 12 Months Support</li>
                    </ul>
                    <NuxtLink to="/contact?service=networking-enterprise" class="theme-btn13 full-width">
                      Contact Sales
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
            <h2>Need a Custom Networking Solution?</h2>
            <p>Let's discuss your specific requirements and design the perfect network for your business.</p>
            <NuxtLink to="/contact?service=networking" class="theme-btn13">
              Get a Free Consultation
              <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
  title: 'Networking Services Abuja | Office Network Setup & CCTV Installation - Yemars Technology',
  description: 'Professional networking services in Abuja. Office networking, CCTV installation, server setup, and IT infrastructure solutions. Packages starting from ₦150,000 with 3-12 months support.',
  ogTitle: 'Professional Networking Services for Abuja Businesses',
  ogDescription: 'Complete office network setup, CCTV installation, server configuration, and IT infrastructure solutions.',
  ogImage: '/og-image-networking.jpg',
  ogUrl: 'https://yemars.ng/services/networking',
  twitterTitle: 'Networking Services Nigeria',
  twitterDescription: 'Office networking, CCTV, server setup, and IT infrastructure solutions.',
  twitterImage: '/twitter-image-networking.jpg',
  keywords: 'networking services Abuja, office network setup Abuja, CCTV installation Abuja, server configuration Nigeria, IT infrastructure Abuja, LAN setup Abuja, wireless network installation, network security Abuja, firewall configuration, VPN setup Abuja, structured cabling Nigeria, workstation installation Abuja'
})

// Service Schema Data
const serviceSchema = {
  name: 'Networking Services',
  description: 'Professional networking solutions including office setup, CCTV installation, server configuration, and IT infrastructure.',
  offers: [
    { name: 'Small Office Networking', price: '150000' },
    { name: 'Medium Office Networking', price: '350000' },
    { name: 'Enterprise Networking', price: '750000' }
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
    icon: 'fa-solid fa-bolt',
    title: 'Fast Installation',
    description: 'Quick and efficient setup with minimal disruption to your business.'
  },
  {
    icon: 'fa-solid fa-shield',
    title: 'Secure Networks',
    description: 'Enterprise-grade security to protect your business data.'
  },
  {
    icon: 'fa-solid fa-wifi',
    title: 'Reliable Connectivity',
    description: 'Stable and high-speed connections for all your devices.'
  },
  {
    icon: 'fa-solid fa-headset',
    title: '24/7 Support',
    description: 'Round-the-clock technical support for critical issues.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Scalable Solutions',
    description: 'Networks that grow with your business needs.'
  },
  {
    icon: 'fa-solid fa-toolbox',
    title: 'Maintenance',
    description: 'Regular maintenance to prevent downtime and issues.'
  }
]

const networkingServices = [
  {
    icon: 'fa-solid fa-wifi',
    title: 'Wireless Networking',
    description: 'High-speed WiFi setup with optimal coverage for your office.'
  },
  {
    icon: 'fa-solid fa-network-wired',
    title: 'LAN Setup',
    description: 'Structured cabling and wired network installation.'
  },
  {
    icon: 'fa-solid fa-server',
    title: 'Server Configuration',
    description: 'Setup and configuration of file and application servers.'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Network Security',
    description: 'Firewalls, VPNs, and security protocols implementation.'
  },
  {
    icon: 'fa-solid fa-video',
    title: 'CCTV Installation',
    description: 'Surveillance systems for business security.'
  },
  {
    icon: 'fa-solid fa-computer',
    title: 'Workstation Setup',
    description: 'Installation and configuration of office workstations.'
  }
]

const officeServices = [
  'Office Network Design',
  'LAN (Wired) Installation',
  'Wireless Network Setup',
  'Network Cabling',
  'Switch & Router Configuration',
  'Network Optimization',
  'Workstation Connection',
  'Printer/Scanner Networking',
  'Network Documentation',
  'WiFi Coverage Analysis'
]

const securityServices = [
  'CCTV Camera Installation',
  'Firewall Configuration',
  'VPN Setup',
  'Network Monitoring',
  'Access Control Systems',
  'Intrusion Detection',
  'Security Audits',
  'Data Backup Solutions',
  'Anti-virus Deployment',
  'Security Policies'
]

const infrastructureServices = [
  'Server Installation',
  'Workstation Deployment',
  'NAS Setup',
  'Cloud Integration',
  'Email Server Setup',
  'Database Configuration',
  'IT Asset Management',
  'Hardware Maintenance',
  'Software Installation',
  'System Updates'
]

const faqs = [
  {
    question: 'How long does office network installation take?',
    answer: 'Typical office network installation takes 2-5 days depending on office size and complexity. We work after hours to minimize disruption.'
  },
  {
    question: 'Do you provide maintenance after installation?',
    answer: 'Yes! All our installations come with a warranty period. We also offer ongoing maintenance packages to keep your network running smoothly.'
  },
  {
    question: 'Can you integrate with existing equipment?',
    answer: 'Absolutely! We work with your existing hardware and can recommend upgrades where needed.'
  },
  {
    question: 'Do you offer remote support?',
    answer: 'Yes, we provide remote support for network issues and can connect to your systems securely to resolve problems quickly.'
  },
  {
    question: 'What about backup power solutions?',
    answer: 'We can recommend and install UPS systems to protect your network equipment during power outages.'
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

.networking-hero {
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

.office-stars .star,
.security-stars .star,
.infrastructure-stars .star,
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

/* Services Grid Section */
.services-grid-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-header p {
  color: #666;
  font-size: 18px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto;
}

.service-card {
  background: white;
  border-radius: 20px;
  padding: 30px 25px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.1);
}

.service-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.service-icon i {
  font-size: 28px;
  color: white;
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
  margin: 0;
}

/* Office Section */
.office-section {
  padding: 80px 0;
  background: white;
}

.office-content .subtitle,
.security-content .subtitle,
.infrastructure-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.office-content h2,
.security-content h2,
.infrastructure-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.office-content p,
.security-content p,
.infrastructure-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.office-grid,
.security-grid,
.infrastructure-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.office-item,
.security-item,
.infrastructure-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: #f8f9ff;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.office-item:hover,
.security-item:hover,
.infrastructure-item:hover {
  background: #0055FF;
  transform: translateX(5px);
}

.office-item:hover i,
.office-item:hover span,
.security-item:hover i,
.security-item:hover span,
.infrastructure-item:hover i,
.infrastructure-item:hover span {
  color: white;
}

.office-item i,
.security-item i,
.infrastructure-item i {
  color: #10b981;
  font-size: 14px;
}

.office-item span,
.security-item span,
.infrastructure-item span {
  color: #4a5568;
  font-size: 14px;
}

.office-image,
.security-image,
.infrastructure-image {
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

/* Security Section */
.security-section {
  padding: 80px 0;
  background: #f8f9ff;
}

/* Infrastructure Section */
.infrastructure-section {
  padding: 80px 0;
  background: white;
}

/* Pricing Section */
.pricing-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.pricing-grid {
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
  font-size: 12px;
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
  
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .pricing-card.popular {
    transform: scale(1);
  }
  
  .office-content h2,
  .security-content h2,
  .infrastructure-content h2 {
    font-size: 32px;
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
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .office-grid,
  .security-grid,
  .infrastructure-grid {
    grid-template-columns: 1fr;
  }
  
  .icon-wrapper-large {
    width: 220px;
    height: 220px;
  }
  
  .icon-wrapper-large i {
    font-size: 40px;
  }
  
  .pricing-card {
    padding: 25px 20px;
  }
  
  .price .amount {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .hero-content h1 {
    font-size: 28px;
  }
  
  .service-badge {
    font-size: 12px;
    padding: 6px 15px;
  }
  
  .hero-description {
    font-size: 15px;
  }
  
  .section-title {
    font-size: 28px;
  }
  
  .feature-card h3 {
    font-size: 18px;
  }
  
  .service-card {
    padding: 25px 15px;
  }
  
  .service-icon {
    width: 60px;
    height: 60px;
  }
  
  .service-icon i {
    font-size: 24px;
  }
  
  .service-card h3 {
    font-size: 16px;
  }
  
  .service-card p {
    font-size: 13px;
  }
  
  .faq-question h4 {
    font-size: 15px;
  }
  
  .cta-box {
    padding: 40px 20px;
  }
  
  .cta-box h2 {
    font-size: 24px;
  }
}
</style>