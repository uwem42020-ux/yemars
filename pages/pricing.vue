<template>
  <div class="pricing-page">
    <!-- Hero Section -->
    <section class="pricing-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <h1 class="hero-title">
              <span class="gradient-text">Simple, Transparent</span>
              <br>Naira Pricing
            </h1>
            <p class="hero-description">
              No hidden fees. No currency confusion. Just honest pricing for Nigerian businesses.
            </p>
            
            <!-- Trust Badges -->
            <div class="trust-badges">
              <div class="trust-badge">
                <i class="fa-solid fa-naira-sign" aria-hidden="true"></i>
                <span>Pay in Naira</span>
              </div>
              <div class="trust-badge">
                <i class="fa-solid fa-lock" aria-hidden="true"></i>
                <span>Secure Payment</span>
              </div>
              <div class="trust-badge">
                <i class="fa-solid fa-headset" aria-hidden="true"></i>
                <span>24/7 Support</span>
              </div>
            </div>
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

    <!-- Billing Toggle -->
    <section class="billing-section">
      <div class="container">
        <div class="billing-toggle-container">
          <div class="billing-toggle">
            <button 
              v-for="period in billingPeriods" 
              :key="period"
              @click="billingPeriod = period"
              class="toggle-btn"
              :class="{ active: billingPeriod === period }"
              :aria-label="`Switch to ${period} billing`"
            >
              {{ period }}
            </button>
          </div>
          <div class="save-badge" v-if="billingPeriod === 'Annual'">
            <i class="fa-solid fa-tag" aria-hidden="true"></i>
            Save 20%
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Cards -->
    <section class="pricing-cards-section">
      <div class="container">
        <div class="pricing-grid">
          <div v-for="(plan, index) in pricingPlans" :key="plan.name" 
               class="pricing-card-wrapper"
               :class="{ 'popular-plan': plan.popular }">
            
            <div class="pricing-card" itemscope itemtype="https://schema.org/Product">
              <meta itemprop="name" :content="plan.name + ' Website Package'" />
              <meta itemprop="description" :content="plan.description" />
              <meta itemprop="priceCurrency" content="NGN" />
              
              <!-- Popular badge -->
              <div v-if="plan.popular" class="popular-badge">
                <i class="fa-solid fa-crown" aria-hidden="true"></i>
                Most Popular
              </div>
              
              <!-- Card header -->
              <div class="card-header">
                <div class="plan-icon" :class="plan.iconClass">
                  <i :class="plan.icon" aria-hidden="true"></i>
                </div>
                <h3 class="plan-name" itemprop="name">{{ plan.name }}</h3>
                <p class="plan-description">{{ plan.description }}</p>
              </div>
              
              <!-- Price -->
              <div class="plan-price" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
                <div class="price-wrapper">
                  <span class="currency">₦</span>
                  <span class="amount" itemprop="price">{{ formatPrice(plan.price) }}</span>
                </div>
                <span class="period" itemprop="priceValidUntil">/{{ plan.period }}</span>
                <meta itemprop="priceCurrency" content="NGN" />
                <meta itemprop="availability" content="https://schema.org/InStock" />
              </div>
              
              <!-- Features -->
              <div class="plan-features">
                <h4>What's included:</h4>
                <ul>
                  <li v-for="feature in plan.features" :key="feature" itemprop="featureList">
                    <i class="fa-solid fa-check-circle" aria-hidden="true"></i>
                    <span>{{ feature }}</span>
                  </li>
                </ul>
              </div>
              
              <!-- CTA Button -->
              <NuxtLink :to="`/contact?package=${plan.name}`" 
                        class="plan-cta"
                        :class="{ 'popular-cta': plan.popular }"
                        :aria-label="`Choose ${plan.name} package`">
                {{ plan.cta }}
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </NuxtLink>
              
              <!-- Guarantee -->
              <div class="guarantee-badge">
                <i class="fa-solid fa-shield-heart" aria-hidden="true"></i>
                <span>100% Satisfaction Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Comparison Table -->
    <section class="comparison-section">
      <div class="container">
        <div class="section-header">
          <h2>Compare <span class="gradient-text">Features</span></h2>
          <p>Everything you need to make the right choice for your business</p>
        </div>

        <div class="comparison-table-wrapper">
          <table class="comparison-table">
            <thead>
              <tr>
                <th>Features</th>
                <th v-for="plan in pricingPlans" :key="plan.name">
                  <span class="plan-name">{{ plan.name }}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="feature in comparisonFeatures" :key="feature.name">
                <td class="feature-name">
                  <i :class="feature.icon" aria-hidden="true"></i>
                  {{ feature.name }}
                </td>
                <td v-for="plan in pricingPlans" :key="plan.name">
                  <span v-if="feature[plan.name.toLowerCase()]" class="check-mark">
                    <i class="fa-solid fa-check" aria-hidden="true"></i>
                  </span>
                  <span v-else-if="typeof feature[plan.name.toLowerCase()] === 'string'" class="feature-value">
                    {{ feature[plan.name.toLowerCase()] }}
                  </span>
                  <span v-else class="x-mark">
                    <i class="fa-solid fa-x" aria-hidden="true"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- Enterprise Section -->
    <section class="enterprise-section">
      <div class="container">
        <div class="enterprise-card">
          <div class="row align-items-center">
            <div class="col-lg-8">
              <div class="enterprise-content">
                <div class="enterprise-icon">
                  <i class="fa-solid fa-building" aria-hidden="true"></i>
                </div>
                <h3>Need a Custom Enterprise Solution?</h3>
                <p>Get a tailored package with advanced features, dedicated support, and flexible payment terms.</p>
                <ul class="enterprise-features">
                  <li><i class="fa-solid fa-check" aria-hidden="true"></i> Custom feature development</li>
                  <li><i class="fa-solid fa-check" aria-hidden="true"></i> Dedicated account manager</li>
                  <li><i class="fa-solid fa-check" aria-hidden="true"></i> Priority 24/7 support</li>
                  <li><i class="fa-solid fa-check" aria-hidden="true"></i> Custom SLA agreements</li>
                </ul>
              </div>
            </div>
            <div class="col-lg-4 text-center">
              <NuxtLink to="/contact?package=enterprise" class="enterprise-cta">
                Contact Sales
                <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
              </NuxtLink>
              <p class="response-time">
                <i class="fa-regular fa-clock" aria-hidden="true"></i>
                Usually responds within 2 hours
              </p>
            </div>
          </div>
          <div class="stars-container">
            <div class="star star-1"></div>
            <div class="star star-2"></div>
            <div class="star star-3"></div>
            <div class="star star-4"></div>
            <div class="star star-5"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Frequently Asked <span class="gradient-text">Questions</span></h2>
          <p>Got questions? We've got answers.</p>
        </div>

        <div class="faq-grid">
          <div v-for="(faq, index) in faqs" :key="index" class="faq-card" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
            <div class="faq-question" @click="toggleFaq(index)" :aria-expanded="activeFaq === index" :aria-controls="`faq-answer-${index}`">
              <h4 itemprop="name">{{ faq.q }}</h4>
              <i class="fa-solid" :class="activeFaq === index ? 'fa-minus' : 'fa-plus'" aria-hidden="true"></i>
            </div>
            <div class="faq-answer" v-show="activeFaq === index" :id="`faq-answer-${index}`" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
              <p itemprop="text">{{ faq.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Ready to Get Started?</h2>
          <p>Choose the perfect plan for your business or contact us for a custom solution.</p>
          <div class="cta-buttons">
            <NuxtLink to="/contact" class="cta-primary">
              Start Your Project
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </NuxtLink>
            <NuxtLink to="/services" class="cta-secondary">
              View Services
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Website Development Pricing Nigeria | Transparent Naira Pricing - Yemars Technology',
  description: 'Clear, transparent Naira pricing for website development in Nigeria. Packages from ₦150,000 to ₦600,000 with free domain and hosting included. No hidden fees.',
  ogTitle: 'Website Development Pricing Nigeria - Transparent Naira Costs',
  ogDescription: 'Affordable web development packages for Nigerian businesses. Compare Starter, Professional, and Enterprise plans with transparent pricing.',
  ogImage: '/og-image-pricing.jpg',
  ogUrl: 'https://yemars.ng/pricing',
  twitterTitle: 'Yemars Technology Pricing - Website Development Costs Nigeria',
  twitterDescription: 'Simple, transparent Naira pricing for web development. Choose the perfect plan for your business.',
  twitterImage: '/twitter-image-pricing.jpg',
  keywords: 'website design cost Nigeria, web development pricing Abuja, affordable website packages Nigeria, ecommerce website cost Nigeria, corporate web app price, mobile app development cost Nigeria, website maintenance cost, Nigerian web developer rates, web design company prices, fintech app development cost'
})

const billingPeriod = ref('Pay Once')
const billingPeriods = ['Pay Once', 'Annual']
const activeFaq = ref(0)

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null
  } else {
    activeFaq.value = index
  }
}

const formatPrice = (price) => {
  return price.toLocaleString()
}

const pricingPlans = [
  {
    name: 'Starter',
    icon: 'fa-solid fa-rocket',
    iconClass: 'starter-icon',
    price: 150000,
    period: 'one-time',
    description: 'Perfect for small businesses & startups',
    features: [
      '5-page responsive website',
      'Mobile-friendly design',
      'Basic SEO optimization',
      'Contact form integration',
      '1-month free maintenance',
      '.com.ng domain (1 year)',
      'SSL Certificate',
      'Email support'
    ],
    cta: 'Choose Starter',
    popular: false
  },
  {
    name: 'Professional',
    icon: 'fa-solid fa-crown',
    iconClass: 'professional-icon',
    price: 350000,
    period: 'one-time',
    description: 'Ideal for growing companies',
    features: [
      '10-page responsive website',
      'Custom design & branding',
      'Advanced SEO for Nigeria',
      'School management system',
      '3-month free maintenance',
      '.com.ng domain included',
      'Google Business setup',
      'Analytics integration',
      'Priority support'
    ],
    cta: 'Choose Professional',
    popular: true
  },
  {
    name: 'Enterprise',
    icon: 'fa-solid fa-building',
    iconClass: 'enterprise-icon',
    price: 600000,
    period: 'one-time',
    description: 'For large organizations',
    features: [
      'Unlimited pages',
      'Custom web application',
      'E-commerce functionality',
      'Advanced security features',
      '6-month free maintenance',
      'Custom domain included',
      '24/7 Nigerian support',
      'Priority development',
      'Dedicated account manager'
    ],
    cta: 'Choose Enterprise',
    popular: false
  }
]

const comparisonFeatures = [
  {
    icon: 'fa-solid fa-pager',
    name: 'Number of Pages',
    starter: '5 pages',
    professional: '10 pages',
    enterprise: 'Unlimited'
  },
  {
    icon: 'fa-solid fa-palette',
    name: 'Custom Design',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    name: 'Mobile Responsive',
    starter: true,
    professional: true,
    enterprise: true
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    name: 'SEO Optimization',
    starter: 'Basic',
    professional: 'Advanced',
    enterprise: 'Premium'
  },
  {
    icon: 'fa-solid fa-graduation-cap',
    name: 'School Management',
    starter: false,
    professional: true,
    enterprise: true
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    name: 'E-commerce Ready',
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    icon: 'fa-solid fa-shield',
    name: 'Advanced Security',
    starter: false,
    professional: false,
    enterprise: true
  },
  {
    icon: 'fa-solid fa-clock',
    name: 'Free Maintenance',
    starter: '1 month',
    professional: '3 months',
    enterprise: '6 months'
  },
  {
    icon: 'fa-solid fa-headset',
    name: 'Support Level',
    starter: 'Email',
    professional: 'Priority',
    enterprise: '24/7 Dedicated'
  },
  {
    icon: 'fa-solid fa-credit-card',
    name: 'Payment Gateways',
    starter: 'Basic',
    professional: 'Advanced',
    enterprise: 'Custom'
  }
]

const faqs = [
  {
    q: 'Do you accept payments in Naira?',
    a: 'Yes! We only charge in Nigerian Naira. No hidden conversion fees or international charges. You can pay via bank transfer, Paystack, or Flutterwave.'
  },
  {
    q: 'How long does development take?',
    a: 'Starter: 2-3 weeks, Professional: 3-4 weeks, Enterprise: 4-6 weeks. Timelines may vary based on complexity and requirements.'
  },
  {
    q: 'What happens after the free maintenance period?',
    a: 'You can choose our affordable maintenance packages starting from ₦50,000/month, or continue with one-time support as needed.'
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely! You can upgrade anytime, and we\'ll only charge the difference. Your site will be migrated seamlessly.'
  },
  {
    q: 'Do you provide hosting?',
    a: 'Yes, all plans include Nigerian-optimized hosting for 1 year with 99.9% uptime guarantee.'
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers, Paystack, Flutterwave, and card payments. All payments are processed securely.'
  },
  {
    q: 'Is there a discount for annual payments?',
    a: 'Yes! Choose our Annual billing option to save 20% on your total project cost.'
  },
  {
    q: 'Do you offer custom packages?',
    a: 'Yes, contact us for custom enterprise solutions tailored to your specific requirements.'
    }
]
</script>

<style scoped>
.pricing-page {
  overflow-x: hidden;
  background: #f8f9ff;
}

/* Hero Section */
.pricing-hero {
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
  margin: 0 auto 40px;
}

.trust-badges {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
}

.trust-badge {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 10px 20px;
  border-radius: 50px;
  color: white;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid rgba(255,255,255,0.2);
}

.trust-badge i {
  font-size: 16px;
  color: #FFD700;
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

/* Billing Section */
.billing-section {
  padding: 40px 0 20px;
}

.billing-toggle-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.billing-toggle {
  background: white;
  padding: 5px;
  border-radius: 50px;
  display: inline-flex;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.toggle-btn {
  padding: 10px 30px;
  border: none;
  background: transparent;
  border-radius: 50px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #666;
}

.toggle-btn.active {
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  box-shadow: 0 5px 15px rgba(0,85,255,0.3);
}

.save-badge {
  background: linear-gradient(45deg, #10b981, #059669);
  color: white;
  padding: 8px 20px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 5px 15px rgba(16,185,129,0.3);
}

/* Pricing Cards Section */
.pricing-cards-section {
  padding: 40px 0 80px;
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card-wrapper {
  position: relative;
}

.pricing-card {
  background: white;
  border-radius: 30px;
  padding: 40px 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  border: 2px solid transparent;
}

.pricing-card-wrapper:hover .pricing-card {
  transform: translateY(-10px);
  box-shadow: 0 30px 60px rgba(0,85,255,0.15);
}

.popular-plan .pricing-card {
  border-color: #6A0DAD;
  transform: scale(1.05);
  z-index: 2;
  box-shadow: 0 30px 60px rgba(106,13,173,0.15);
}

.popular-plan:hover .pricing-card {
  transform: scale(1.05) translateY(-10px);
}

.popular-badge {
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 8px 25px;
  border-radius: 50px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 5px 20px rgba(106,13,173,0.3);
}

.popular-badge i {
  font-size: 14px;
}

.card-header {
  text-align: center;
  margin-bottom: 30px;
}

.plan-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  font-size: 35px;
}

.starter-icon {
  background: linear-gradient(135deg, #0055FF20, #0055FF);
  color: #0055FF;
}

.professional-icon {
  background: linear-gradient(135deg, #6A0DAD20, #6A0DAD);
  color: #6A0DAD;
}

.enterprise-icon {
  background: linear-gradient(135deg, #0A1F4420, #0A1F44);
  color: #0A1F44;
}

.plan-name {
  font-size: 24px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.plan-description {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.plan-price {
  text-align: center;
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eef2f6;
}

.price-wrapper {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 5px;
  margin-bottom: 5px;
}

.currency {
  font-size: 24px;
  font-weight: 600;
  color: #0055FF;
}

.amount {
  font-size: 48px;
  font-weight: 800;
  color: #0055FF;
  line-height: 1;
}

.period {
  color: #999;
  font-size: 14px;
}

.plan-features {
  flex: 1;
  margin-bottom: 30px;
}

.plan-features h4 {
  font-size: 16px;
  font-weight: 600;
  color: #0A1F44;
  margin-bottom: 20px;
}

.plan-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.plan-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  color: #4a5568;
  font-size: 14px;
}

.plan-features li i {
  color: #10b981;
  font-size: 16px;
  flex-shrink: 0;
}

.plan-cta {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 15px 30px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-bottom: 20px;
}

.popular-cta {
  background: linear-gradient(45deg, #6A0DAD, #0055FF);
  box-shadow: 0 10px 20px rgba(106,13,173,0.3);
}

.plan-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.3);
}

.plan-cta i {
  transition: transform 0.3s ease;
}

.plan-cta:hover i {
  transform: translateX(5px);
}

.guarantee-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: #999;
  font-size: 12px;
  text-align: center;
}

.guarantee-badge i {
  color: #10b981;
  font-size: 14px;
}

/* Comparison Table Section */
.comparison-section {
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
  max-width: 600px;
  margin: 0 auto;
}

.comparison-table-wrapper {
  overflow-x: auto;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.comparison-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
  min-width: 800px;
}

.comparison-table th {
  padding: 25px 20px;
  text-align: center;
  background: #f8f9ff;
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
}

.comparison-table th .plan-name {
  font-size: 18px;
  margin: 0;
}

.comparison-table td {
  padding: 15px 20px;
  border-bottom: 1px solid #eef2f6;
}

.comparison-table tr:last-child td {
  border-bottom: none;
}

.feature-name {
  font-weight: 600;
  color: #0A1F44;
  display: flex;
  align-items: center;
  gap: 10px;
}

.feature-name i {
  color: #0055FF;
  font-size: 16px;
  width: 20px;
}

.check-mark {
  color: #10b981;
  font-size: 18px;
  display: flex;
  justify-content: center;
}

.x-mark {
  color: #ef4444;
  font-size: 18px;
  display: flex;
  justify-content: center;
}

.feature-value {
  color: #4a5568;
  font-size: 14px;
  display: block;
  text-align: center;
}

/* Enterprise Section */
.enterprise-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.enterprise-card {
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  border-radius: 30px;
  padding: 60px 50px;
  position: relative;
  overflow: hidden;
}

.enterprise-content {
  color: white;
  position: relative;
  z-index: 2;
}

.enterprise-icon {
  width: 70px;
  height: 70px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  border: 2px solid rgba(255,255,255,0.2);
}

.enterprise-icon i {
  font-size: 30px;
  color: white;
}

.enterprise-content h3 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 15px;
}

.enterprise-content p {
  color: rgba(255,255,255,0.9);
  font-size: 16px;
  margin-bottom: 25px;
  max-width: 500px;
}

.enterprise-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.enterprise-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: rgba(255,255,255,0.9);
  font-size: 14px;
}

.enterprise-features li i {
  color: #10b981;
  font-size: 14px;
}

.enterprise-cta {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0055FF;
  padding: 18px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s ease;
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
  margin-bottom: 15px;
}

.enterprise-cta:hover {
  transform: translateY(-2px);
  box-shadow: 0 25px 50px rgba(0,0,0,0.3);
}

.enterprise-cta i {
  transition: transform 0.3s ease;
}

.enterprise-cta:hover i {
  transform: translateX(5px);
}

.response-time {
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

/* FAQ Section */
.faq-section {
  padding: 80px 0;
  background: white;
}

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.faq-card {
  background: #f8f9ff;
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.faq-card:hover {
  box-shadow: 0 10px 30px rgba(0,85,255,0.1);
}

.faq-question {
  padding: 20px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.faq-question h4 {
  font-size: 16px;
  font-weight: 600;
  color: #0A1F44;
  margin: 0;
  padding-right: 20px;
}

.faq-question i {
  color: #0055FF;
  font-size: 14px;
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

.faq-answer {
  padding: 0 25px 20px;
  color: #666;
  font-size: 14px;
  line-height: 1.8;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.cta-card {
  background: white;
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.cta-card h2 {
  font-size: 36px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 15px;
}

.cta-card p {
  color: #666;
  font-size: 18px;
  margin-bottom: 30px;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 15px 30px rgba(0,85,255,0.3);
}

.cta-primary i {
  transition: transform 0.3s ease;
}

.cta-primary:hover i {
  transform: translateX(5px);
}

.cta-secondary {
  display: inline-flex;
  align-items: center;
  background: transparent;
  color: #0055FF;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid #0055FF;
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  background: #0055FF;
  color: white;
  transform: translateY(-2px);
}

/* Responsive */
@media (max-width: 991px) {
  .hero-title {
    font-size: 40px;
  }
  
  .pricing-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .popular-plan .pricing-card {
    transform: scale(1);
  }
  
  .popular-plan:hover .pricing-card {
    transform: translateY(-10px);
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
  
  .enterprise-card {
    padding: 40px 30px;
  }
  
  .enterprise-content h3 {
    font-size: 28px;
  }
  
  .enterprise-features {
    grid-template-columns: 1fr;
  }
  
  .section-header h2 {
    font-size: 32px;
  }
}

@media (max-width: 767px) {
  .pricing-hero {
    padding: 130px 0 60px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .trust-badges {
    gap: 15px;
  }
  
  .trust-badge {
    padding: 8px 15px;
    font-size: 12px;
  }
  
  .billing-toggle-container {
    flex-direction: column;
  }
  
  .toggle-btn {
    padding: 8px 20px;
  }
  
  .pricing-card {
    padding: 30px 20px;
  }
  
  .amount {
    font-size: 36px;
  }
  
  .enterprise-content h3 {
    font-size: 24px;
  }
  
  .enterprise-cta {
    padding: 15px 30px;
    font-size: 16px;
  }
  
  .cta-card h2 {
    font-size: 28px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-primary, .cta-secondary {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  
  .trust-badge {
    width: 100%;
    justify-content: center;
  }
  
  .price-wrapper {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .currency {
    font-size: 20px;
  }
  
  .amount {
    font-size: 32px;
  }
  
  .plan-features li {
    font-size: 13px;
  }
  
  .faq-question h4 {
    font-size: 14px;
  }
  
  .cta-card {
    padding: 40px 20px;
  }
  
  .cta-card h2 {
    font-size: 24px;
  }
}
</style>