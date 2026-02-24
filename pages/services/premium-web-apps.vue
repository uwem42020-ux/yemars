<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero premium-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Enterprise Grade</span>
                <h1>Premium Web <span class="hero-gradient">Apps</span></h1>
                <p class="hero-description">Enterprise-grade web applications with advanced features, scalability, and performance for businesses with complex requirements.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=premium-app" class="theme-btn13">
                    Discuss Your Project <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-crown"></i>
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
              <h2 class="section-title">Enterprise-Grade <span class="gradient-text">Solutions</span></h2>
              <p class="section-description">Premium web applications built for scale, security, and complex business logic. Perfect for large organizations with specific requirements.</p>
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
  
      <!-- Architecture Section -->
      <section class="architecture-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="architecture-content">
                <span class="subtitle">Scalable Architecture</span>
                <h2>Built for <span class="gradient-text">Growth</span></h2>
                <p>Our premium web apps are built with modern, scalable architecture that can handle thousands of concurrent users and millions of data points.</p>
                
                <div class="tech-stack">
                  <h4>Technology Stack</h4>
                  <div class="tech-tags">
                    <span v-for="tech in techStack" :key="tech">{{ tech }}</span>
                  </div>
                </div>
                
                <ul class="architecture-features">
                  <li><i class="fa-solid fa-check-circle"></i> Microservices architecture</li>
                  <li><i class="fa-solid fa-check-circle"></i> Cloud-native deployment</li>
                  <li><i class="fa-solid fa-check-circle"></i> Auto-scaling capabilities</li>
                  <li><i class="fa-solid fa-check-circle"></i> Distributed databases</li>
                  <li><i class="fa-solid fa-check-circle"></i> CDN integration</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="architecture-image">
                <div class="stars-container architecture-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
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
              <h2 class="section-title">Premium <span class="gradient-text">Features</span></h2>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-6" v-for="(feature, index) in premiumFeatures" :key="index">
              <div class="premium-feature-card">
                <div class="premium-feature-icon">
                  <i :class="feature.icon"></i>
                </div>
                <div class="premium-feature-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                  <ul v-if="feature.subFeatures">
                    <li v-for="sub in feature.subFeatures" :key="sub">{{ sub }}</li>
                  </ul>
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
              <h2 class="section-title">Premium <span class="gradient-text">Investment</span></h2>
              <p class="section-description">Custom pricing based on your specific requirements.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-lg-8 m-auto">
              <div class="pricing-card premium-pricing">
                <div class="pricing-badge">Enterprise Solution</div>
                <div class="pricing-header">
                  <h3>Premium Web App</h3>
                  <div class="price">
                    <span class="currency">₦</span>
                    <span class="amount">2,000,000</span>
                    <span class="period">/one-time</span>
                  </div>
                  <p class="price-note">Starting price - final quote based on requirements</p>
                </div>
                <div class="pricing-body">
                  <div class="pricing-features-grid">
                    <div class="feature-category">
                      <h5>Architecture</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> Microservices</li>
                        <li><i class="fa-solid fa-check"></i> Load balancing</li>
                        <li><i class="fa-solid fa-check"></i> Auto-scaling</li>
                        <li><i class="fa-solid fa-check"></i> Multi-region deployment</li>
                      </ul>
                    </div>
                    <div class="feature-category">
                      <h5>Security</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> End-to-end encryption</li>
                        <li><i class="fa-solid fa-check"></i> DDoS protection</li>
                        <li><i class="fa-solid fa-check"></i> Regular security audits</li>
                        <li><i class="fa-solid fa-check"></i> Compliance ready</li>
                      </ul>
                    </div>
                    <div class="feature-category">
                      <h5>Development</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> 6 months maintenance</li>
                        <li><i class="fa-solid fa-check"></i> Priority support</li>
                        <li><i class="fa-solid fa-check"></i> Custom integrations</li>
                        <li><i class="fa-solid fa-check"></i> API development</li>
                      </ul>
                    </div>
                    <div class="feature-category">
                      <h5>Infrastructure</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> Cloud hosting</li>
                        <li><i class="fa-solid fa-check"></i> CDN included</li>
                        <li><i class="fa-solid fa-check"></i> Daily backups</li>
                        <li><i class="fa-solid fa-check"></i> 99.99% uptime SLA</li>
                      </ul>
                    </div>
                  </div>
                  <div class="pricing-cta">
                    <NuxtLink to="/contact?service=premium-app" class="theme-btn13 full-width">
                      Get Custom Quote <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                      <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Use Cases -->
      <section class="usecases-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Perfect <span class="gradient-text">For</span></h2>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-4" v-for="(useCase, index) in useCases" :key="index">
              <div class="usecase-card">
                <div class="usecase-icon">
                  <i :class="useCase.icon"></i>
                </div>
                <h4>{{ useCase.title }}</h4>
                <p>{{ useCase.description }}</p>
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
            <h2>Ready to Build Something Extraordinary?</h2>
            <p>Let's discuss your vision and create a premium web application that sets new standards.</p>
            <NuxtLink to="/contact?service=premium-app" class="theme-btn13">
              Start the Conversation <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
  title: 'Premium Web App Development Nigeria | Enterprise Solutions Abuja - Yemars Technology',
  description: 'Enterprise-grade web applications for Nigerian businesses with advanced features, scalability, and enterprise-level security. Starting from ₦2,000,000 with 6 months free maintenance.',
  ogTitle: 'Premium Web Application Development for Nigerian Enterprises',
  ogDescription: 'Build scalable, secure enterprise applications with microservices architecture, cloud deployment, and 99.99% uptime guarantee.',
  ogImage: '/og-image-premium-apps.jpg',
  ogUrl: 'https://yemars.ng/services/premium-web-apps',
  twitterTitle: 'Premium Web App Development Nigeria',
  twitterDescription: 'Enterprise-grade web applications with advanced security and scalability.',
  twitterImage: '/twitter-image-premium-apps.jpg',
  keywords: 'premium web application Nigeria, enterprise software development Abuja, scalable web apps Nigeria, microservices architecture, cloud-native applications, high-performance web apps, enterprise security Nigeria, custom enterprise software, large-scale web applications, API development Nigeria, enterprise integration solutions, business automation Nigeria'
})

// Service Schema Data
const serviceSchema = {
  name: 'Premium Web Application Development',
  description: 'Enterprise-grade web applications with advanced features, scalability, and enterprise-level security for Nigerian businesses.',
  offers: [
    { name: 'Premium Web App - Basic', price: '2000000' },
    { name: 'Premium Web App - Professional', price: '3500000' },
    { name: 'Premium Web App - Enterprise', price: '5000000' }
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
    title: 'High Performance',
    description: 'Optimized for speed and efficiency, handling thousands of concurrent users.'
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Enterprise Security',
    description: 'Bank-level encryption, regular security audits, and compliance ready.'
  },
  {
    icon: 'fa-solid fa-cloud',
    title: 'Cloud Native',
    description: 'Built for the cloud with auto-scaling and high availability.'
  },
  {
    icon: 'fa-solid fa-code-branch',
    title: 'Microservices',
    description: 'Modular architecture for easy maintenance and updates.'
  },
  {
    icon: 'fa-solid fa-database',
    title: 'Big Data Ready',
    description: 'Handle millions of records with optimized database queries.'
  },
  {
    icon: 'fa-solid fa-arrow-right-arrow-left',
    title: 'API First',
    description: 'Built with API-first approach for easy integrations.'
  }
]

const techStack = [
  'Vue.js', 'Nuxt.js', 'Node.js', 'Python', 'Go',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes',
  'AWS', 'Google Cloud', 'Azure'
]

const premiumFeatures = [
  {
    icon: 'fa-solid fa-rocket',
    title: 'Advanced Performance',
    description: 'Optimized for lightning-fast load times and response rates.',
    subFeatures: ['Lazy loading', 'Code splitting', 'Database indexing', 'Caching strategies']
  },
  {
    icon: 'fa-solid fa-lock',
    title: 'Enterprise Security',
    description: 'Comprehensive security features to protect your data.',
    subFeatures: ['2FA integration', 'Role-based access', 'Audit logs', 'Data encryption']
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: 'Advanced Analytics',
    description: 'Deep insights into system performance and user behavior.',
    subFeatures: ['Real-time monitoring', 'Custom dashboards', 'Predictive analytics', 'Report scheduling']
  },
  {
    icon: 'fa-solid fa-puzzle-piece',
    title: 'Integration Ready',
    description: 'Seamless integration with third-party services and APIs.',
    subFeatures: ['REST APIs', 'Webhooks', 'Message queues', 'Third-party connectors']
  }
]

const useCases = [
  {
    icon: 'fa-solid fa-bank',
    title: 'Financial Services',
    description: 'Banking portals, investment platforms, and financial dashboards.'
  },
  {
    icon: 'fa-solid fa-truck',
    title: 'Logistics',
    description: 'Fleet management, tracking systems, and supply chain optimization.'
  },
  {
    icon: 'fa-solid fa-hospital',
    title: 'Healthcare',
    description: 'Patient management, EHR systems, and telemedicine platforms.'
  }
]

const faqs = [
  {
    question: 'How long does it take to build a premium web app?',
    answer: 'Typically 3-6 months depending on complexity. We follow an agile methodology with regular milestones and demos.'
  },
  {
    question: 'What makes it "premium" compared to regular apps?',
    answer: 'Premium apps feature enterprise-grade architecture, advanced security, scalability, and are built to handle complex business logic and high user loads.'
  },
  {
    question: 'Do you provide ongoing support?',
    answer: 'Yes, we include 6 months of priority maintenance and support. Extended support packages are also available.'
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely. We specialize in integrating with existing ERP, CRM, and legacy systems through custom APIs.'
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

.premium-hero {
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

.architecture-stars .star,
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

/* Architecture Section */
.architecture-section {
  padding: 80px 0;
  background: white;
}

.architecture-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.architecture-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.architecture-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.tech-stack {
  margin-bottom: 30px;
}

.tech-stack h4 {
  font-size: 18px;
  font-weight: 600;
  color: #0A1F44;
  margin-bottom: 15px;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tags span {
  background: #f0f2f5;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  color: #0055FF;
}

.architecture-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.architecture-features li {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
}

.architecture-features li i {
  color: #10b981;
  font-size: 16px;
}

.architecture-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.icon-wrapper-large {
  width: 250px;
  height: 250px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,85,255,0.3);
}

.icon-wrapper-large i {
  font-size: 120px;
  color: white;
}

/* Premium Features */
.premium-feature-card {
  display: flex;
  gap: 20px;
  background: white;
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 30px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  height: 100%;
}

.premium-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.premium-feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.premium-feature-icon i {
  font-size: 24px;
  color: white;
}

.premium-feature-content {
  flex: 1;
}

.premium-feature-content h4 {
  font-size: 20px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.premium-feature-content p {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.premium-feature-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.premium-feature-content ul li {
  background: #f0f2f5;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #0055FF;
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

.premium-pricing {
  border: 2px solid #6A0DAD;
  position: relative;
}

.pricing-badge {
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

.price-note {
  color: #999;
  font-size: 14px;
  margin-top: 5px;
}

.pricing-features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-bottom: 30px;
}

.feature-category h5 {
  font-size: 16px;
  font-weight: 600;
  color: #0A1F44;
  margin-bottom: 15px;
}

.feature-category ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.feature-category ul li {
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #4a5568;
  font-size: 14px;
}

.feature-category ul li i {
  color: #10b981;
  font-size: 14px;
}

.full-width {
  width: 100%;
  text-align: center;
  justify-content: center;
}

/* Use Cases Section */
.usecases-section {
  padding: 80px 0;
  background: white;
}

.usecase-card {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9ff;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  height: 100%;
}

.usecase-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.usecase-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.usecase-icon i {
  font-size: 30px;
  color: white;
}

.usecase-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.usecase-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
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
  
  .pricing-features-grid {
    grid-template-columns: 1fr;
    gap: 20px;
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
  
  .architecture-image .icon-wrapper-large {
    width: 180px;
    height: 180px;
  }
  
  .architecture-image .icon-wrapper-large i {
    font-size: 80px;
  }
  
  .pricing-card {
    padding: 30px 20px;
  }
  
  .price .amount {
    font-size: 36px;
  }
  
  .premium-feature-card {
    flex-direction: column;
    text-align: center;
  }
  
  .premium-feature-icon {
    margin: 0 auto;
  }
}
</style>