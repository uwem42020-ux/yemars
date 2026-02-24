<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero fintech-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Financial Technology</span>
                <h1>Fintech <span class="hero-gradient">Applications</span></h1>
                <p class="hero-description">Secure, scalable financial applications with Nigerian payment integrations, KYC/AML compliance, and robust security features for the modern financial landscape.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=fintech" class="theme-btn13">
                    Build Your Fintech App <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-credit-card"></i>
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
              <h2 class="section-title">Financial Technology <span class="gradient-text">Solutions</span></h2>
              <p class="section-description">We build secure, compliant fintech applications that handle payments, transfers, investments, and more for the Nigerian market.</p>
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
  
      <!-- Nigerian Payment Integration -->
      <section class="payment-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="payment-content">
                <span class="subtitle">Local Payments</span>
                <h2>Nigerian Payment <span class="gradient-text">Integrations</span></h2>
                <p>We integrate with all major Nigerian payment gateways and banks for seamless transactions.</p>
                
                <div class="payment-grid-large">
                  <div class="payment-category">
                    <h4><i class="fa-solid fa-bolt"></i> Payment Gateways</h4>
                    <div class="payment-items">
                      <span class="payment-item" v-for="gateway in paymentGateways" :key="gateway">{{ gateway }}</span>
                    </div>
                  </div>
                  <div class="payment-category">
                    <h4><i class="fa-solid fa-building-columns"></i> Bank Integrations</h4>
                    <div class="payment-items">
                      <span class="payment-item" v-for="bank in bankIntegrations" :key="bank">{{ bank }}</span>
                    </div>
                  </div>
                  <div class="payment-category">
                    <h4><i class="fa-solid fa-mobile"></i> Mobile Money</h4>
                    <div class="payment-items">
                      <span class="payment-item" v-for="mobile in mobileMoney" :key="mobile">{{ mobile }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="payment-image-large">
                <div class="stars-container payment-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-money-bill-transfer"></i>
                  <i class="fa-solid fa-building-columns"></i>
                  <i class="fa-solid fa-mobile-screen-button"></i>
                  <i class="fa-solid fa-lock"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Security Features -->
      <section class="security-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Bank-Grade <span class="gradient-text">Security</span></h2>
              <p class="section-description">Your users' financial data is protected with enterprise-level security measures.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-6 col-lg-3" v-for="(security, index) in securityFeatures" :key="index">
              <div class="security-card">
                <div class="security-icon">
                  <i :class="security.icon"></i>
                </div>
                <h4>{{ security.title }}</h4>
                <p>{{ security.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Fintech Features -->
      <section class="features-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Powerful <span class="gradient-text">Fintech Features</span></h2>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-6" v-for="(feature, index) in fintechFeatures" :key="index">
              <div class="fintech-feature-card">
                <div class="fintech-feature-icon">
                  <i :class="feature.icon"></i>
                </div>
                <div class="fintech-feature-content">
                  <h4>{{ feature.title }}</h4>
                  <p>{{ feature.description }}</p>
                  <ul>
                    <li v-for="item in feature.items" :key="item">{{ item }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Compliance Section -->
      <section class="compliance-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="compliance-content">
                <span class="subtitle">Regulatory Compliance</span>
                <h2>Built for <span class="gradient-text">Compliance</span></h2>
                <p>Our fintech solutions are designed with Nigerian financial regulations in mind, making it easier to meet compliance requirements.</p>
                
                <div class="compliance-grid">
                  <div class="compliance-item" v-for="(item, index) in complianceItems" :key="index">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="compliance-image">
                <div class="stars-container compliance-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-scale-balanced"></i>
                  <i class="fa-solid fa-file-shield"></i>
                  <i class="fa-solid fa-building-columns"></i>
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
              <h2 class="section-title">Fintech <span class="gradient-text">Use Cases</span></h2>
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
  
      <!-- Pricing Section -->
      <section id="pricing" class="pricing-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Fintech <span class="gradient-text">Investment</span></h2>
              <p class="section-description">Custom pricing based on your specific requirements and features.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-lg-8 m-auto">
              <div class="pricing-card fintech-pricing">
                <div class="pricing-badge">Starting At</div>
                <div class="pricing-header">
                  <h3>Custom Fintech Solution</h3>
                  <div class="price">
                    <span class="currency">₦</span>
                    <span class="amount">Contact Us</span>
                  </div>
                  <p class="price-note">Final price based on features, complexity, and compliance requirements</p>
                </div>
                <div class="pricing-body">
                  <div class="pricing-features-grid">
                    <div class="feature-category">
                      <h5>Core Features</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> User accounts & profiles</li>
                        <li><i class="fa-solid fa-check"></i> Wallet system</li>
                        <li><i class="fa-solid fa-check"></i> Payment processing</li>
                        <li><i class="fa-solid fa-check"></i> Transaction history</li>
                      </ul>
                    </div>
                    <div class="feature-category">
                      <h5>Security</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> End-to-end encryption</li>
                        <li><i class="fa-solid fa-check"></i> 2FA & biometric auth</li>
                        <li><i class="fa-solid fa-check"></i> Fraud detection</li>
                        <li><i class="fa-solid fa-check"></i> Audit logging</li>
                      </ul>
                    </div>
                    <div class="feature-category">
                      <h5>Compliance</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> KYC/AML ready</li>
                        <li><i class="fa-solid fa-check"></i> Data protection</li>
                        <li><i class="fa-solid fa-check"></i> Regulatory reporting</li>
                        <li><i class="fa-solid fa-check"></i> Audit trails</li>
                      </ul>
                    </div>
                    <div class="feature-category">
                      <h5>Integrations</h5>
                      <ul>
                        <li><i class="fa-solid fa-check"></i> Multiple payment gateways</li>
                        <li><i class="fa-solid fa-check"></i> Bank APIs</li>
                        <li><i class="fa-solid fa-check"></i> Accounting software</li>
                        <li><i class="fa-solid fa-check"></i> SMS/email notifications</li>
                      </ul>
                    </div>
                  </div>
                  <div class="pricing-cta">
                    <NuxtLink to="/contact?service=fintech" class="theme-btn13 full-width">
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
            <h2>Ready to Build Your Fintech Solution?</h2>
            <p>Let's create a secure, scalable financial application for your business.</p>
            <NuxtLink to="/contact?service=fintech" class="theme-btn13">
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
  title: 'Fintech App Development Nigeria | Payment Solutions Abuja - Yemars Technology',
  description: 'Custom fintech application development for Nigerian businesses. Payment processing, wallet systems, KYC/AML compliance, and bank-grade security. Tailored solutions for the Nigerian financial market.',
  ogTitle: 'Fintech Application Development for Nigerian Businesses',
  ogDescription: 'Build secure, scalable financial applications with Nigerian payment integrations, KYC compliance, and advanced security.',
  ogImage: '/og-image-fintech-app.jpg',
  ogUrl: 'https://yemars.ng/services/fintech-app',
  twitterTitle: 'Fintech App Development Nigeria',
  twitterDescription: 'Secure financial applications with Paystack, Flutterwave, and bank integrations.',
  twitterImage: '/twitter-image-fintech-app.jpg',
  keywords: 'fintech app development Nigeria, payment gateway integration, wallet system development, KYC/AML compliance Nigeria, mobile money app development, neobank development, loan app Nigeria, investment platform development, financial software Abuja, bank API integration, microfinance software, digital wallet Nigeria'
})

// Service Schema Data
const serviceSchema = {
  name: 'Fintech Application Development',
  description: 'Secure, scalable financial applications with Nigerian payment integrations, KYC/AML compliance, and bank-grade security.',
  offers: [
    { name: 'Fintech App - Basic', price: 'Contact Us' },
    { name: 'Fintech App - Professional', price: 'Contact Us' },
    { name: 'Fintech App - Enterprise', price: 'Contact Us' }
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
    icon: 'fa-solid fa-shield-halved',
    title: 'Bank-Grade Security',
    description: 'End-to-end encryption, fraud detection, and secure authentication.'
  },
  {
    icon: 'fa-solid fa-arrow-right-arrow-left',
    title: 'Payment Processing',
    description: 'Handle transfers, payments, and settlements with multiple gateways.'
  },
  {
    icon: 'fa-solid fa-wallet',
    title: 'Digital Wallets',
    description: 'User wallets with balances, transaction history, and funding options.'
  },
  {
    icon: 'fa-solid fa-scale-balanced',
    title: 'Regulatory Compliance',
    description: 'Built with KYC, AML, and Nigerian financial regulations in mind.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Analytics & Reporting',
    description: 'Detailed transaction reports, user analytics, and financial insights.'
  },
  {
    icon: 'fa-solid fa-arrows-spin',
    title: 'Real-Time Processing',
    description: 'Instant transaction processing with real-time balance updates.'
  }
]

const paymentGateways = [
  'Paystack', 'Flutterwave', 'Interswitch', 'Remita', 'Monnify', 'Quickteller'
]

const bankIntegrations = [
  'GTBank', 'Access Bank', 'UBA', 'First Bank', 'Zenith Bank', 'FCMB'
]

const mobileMoney = [
  'OPay', 'PalmPay', 'Moniepoint', 'Kuda', 'FairMoney', 'Branch'
]

const securityFeatures = [
  {
    icon: 'fa-solid fa-lock',
    title: 'Encryption',
    description: '256-bit SSL encryption for all data in transit and at rest.'
  },
  {
    icon: 'fa-solid fa-fingerprint',
    title: 'Multi-Factor Auth',
    description: 'Biometric, OTP, and authenticator app support.'
  },
  {
    icon: 'fa-solid fa-robot',
    title: 'Fraud Detection',
    description: 'AI-powered fraud detection and prevention systems.'
  },
  {
    icon: 'fa-solid fa-clipboard-list',
    title: 'Audit Trails',
    description: 'Complete logs of all financial transactions and admin actions.'
  }
]

const fintechFeatures = [
  {
    icon: 'fa-solid fa-user-check',
    title: 'KYC Verification',
    description: 'Automated identity verification with BVN, NIN, and document uploads.',
    items: ['BVN verification', 'NIN validation', 'Document upload', 'Liveness detection']
  },
  {
    icon: 'fa-solid fa-arrows-spin',
    title: 'Money Transfers',
    description: 'Send and receive money between users and bank accounts.',
    items: ['User-to-user transfers', 'Bank transfers', 'Scheduled payments', 'Batch processing']
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: 'Investment Platform',
    description: 'Create investment products and allow users to invest.',
    items: ['Fixed deposits', 'Mutual funds', 'Stocks', 'ROI tracking']
  },
  {
    icon: 'fa-solid fa-hand-holding-usd',
    title: 'Lending & Credit',
    description: 'Loan origination, credit scoring, and repayment tracking.',
    items: ['Loan applications', 'Credit scoring', 'Repayment schedules', 'Interest calculation']
  },
  {
    icon: 'fa-solid fa-receipt',
    title: 'Bills Payment',
    description: 'Pay utility bills, airtime, and subscriptions.',
    items: ['Electricity bills', 'TV subscriptions', 'Airtime/data', 'Internet bills']
  },
  {
    icon: 'fa-solid fa-chart-gantt',
    title: 'Admin Dashboard',
    description: 'Comprehensive admin panel for managing users, transactions, and reports.',
    items: ['User management', 'Transaction monitoring', 'Reports generation', 'System settings']
  }
]

const complianceItems = [
  'CBN Regulatory Guidelines',
  'NDPR Data Protection',
  'PCI DSS Compliance',
  'KYC/AML Procedures',
  'Anti-Money Laundering',
  'Data Localization',
  'Consumer Protection',
  'Dispute Resolution'
]

const useCases = [
  {
    icon: 'fa-solid fa-wallet',
    title: 'Digital Wallets',
    description: 'Mobile money wallets, prepaid cards, and payment apps.'
  },
  {
    icon: 'fa-solid fa-hand-holding-heart',
    title: 'Microfinance',
    description: 'Loan management, savings groups, and micro-investment platforms.'
  },
  {
    icon: 'fa-solid fa-arrow-trend-up',
    title: 'Investment Apps',
    description: 'Stock trading, fixed deposits, and mutual fund platforms.'
  },
  {
    icon: 'fa-solid fa-building-columns',
    title: 'Banking Solutions',
    description: 'Neobanks, agency banking, and core banking systems.'
  },
  {
    icon: 'fa-solid fa-coins',
    title: 'Lending Platforms',
    description: 'Peer-to-peer lending, payday loans, and BNPL solutions.'
  },
  {
    icon: 'fa-solid fa-sack-dollar',
    title: 'Remittance',
    description: 'International money transfer and currency exchange.'
  }
]

const faqs = [
  {
    question: 'How long does it take to build a fintech app?',
    answer: 'Timeline varies based on complexity, typically 3-6 months for a minimum viable product, 6-12 months for a full-featured platform.'
  },
  {
    question: 'What compliance requirements do you handle?',
    answer: 'We build with CBN guidelines, NDPR, KYC/AML requirements, and industry best practices in mind. However, final compliance certification may require third-party audits.'
  },
  {
    question: 'Can you integrate with any payment gateway?',
    answer: 'Yes, we integrate with all major Nigerian payment gateways and can work with international providers as needed.'
  },
  {
    question: 'How do you handle security?',
    answer: 'We implement bank-grade security including encryption, secure authentication, fraud detection, and regular security audits.'
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer: 'Yes, we offer comprehensive maintenance packages including security updates, compliance updates, and feature enhancements.'
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

.fintech-hero {
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
.compliance-stars .star,
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

.payment-grid-large {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.payment-category h4 {
  font-size: 18px;
  font-weight: 600;
  color: #0A1F44;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.payment-category h4 i {
  color: #0055FF;
}

.payment-items {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.payment-item {
  background: white;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  color: #0055FF;
  border: 1px solid #eef2f6;
  font-weight: 500;
}

.payment-image-large {
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
  animation: bounce 3s ease-in-out infinite;
}

.icon-wrapper-large i:nth-child(1) { animation-delay: 0s; }
.icon-wrapper-large i:nth-child(2) { animation-delay: 0.2s; }
.icon-wrapper-large i:nth-child(3) { animation-delay: 0.4s; }
.icon-wrapper-large i:nth-child(4) { animation-delay: 0.6s; }

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Security Section */
.security-section {
  padding: 80px 0;
  background: white;
}

.security-card {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9ff;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
  transition: all 0.3s ease;
  height: 100%;
}

.security-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.security-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.security-icon i {
  font-size: 30px;
  color: white;
}

.security-card h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.security-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

/* Fintech Features */
.features-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.fintech-feature-card {
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

.fintech-feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.fintech-feature-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.fintech-feature-icon i {
  font-size: 24px;
  color: white;
}

.fintech-feature-content {
  flex: 1;
}

.fintech-feature-content h4 {
  font-size: 20px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.fintech-feature-content p {
  color: #666;
  font-size: 14px;
  margin-bottom: 10px;
}

.fintech-feature-content ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.fintech-feature-content ul li {
  background: #f0f2f5;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 12px;
  color: #0055FF;
}

/* Compliance Section */
.compliance-section {
  padding: 80px 0;
  background: white;
}

.compliance-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.compliance-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.compliance-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.compliance-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.compliance-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #4a5568;
}

.compliance-item i {
  color: #10b981;
  font-size: 16px;
}

/* Use Cases Section */
.usecases-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.usecase-card {
  text-align: center;
  padding: 30px 20px;
  background: white;
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

/* Pricing Section */
.pricing-section {
  padding: 80px 0;
  background: white;
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

.fintech-pricing {
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
  
  .compliance-grid {
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
  
  .payment-image-large .icon-wrapper-large {
    width: 220px;
    height: 220px;
  }
  
  .payment-image-large .icon-wrapper-large i {
    font-size: 40px;
  }
  
  .compliance-image .icon-wrapper-large {
    width: 200px;
    height: 200px;
  }
  
  .compliance-image .icon-wrapper-large i {
    font-size: 40px;
  }
  
  .fintech-feature-card {
    flex-direction: column;
    text-align: center;
  }
  
  .fintech-feature-icon {
    margin: 0 auto;
  }
  
  .pricing-card {
    padding: 30px 20px;
  }
  
  .price .amount {
    font-size: 36px;
  }
  
  .payment-items {
    justify-content: center;
  }
  
  .payment-category {
    text-align: center;
  }
  
  .payment-category h4 {
    justify-content: center;
  }
}
</style>