<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero graphic-design-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Creative Design</span>
                <h1>Graphic <span class="hero-gradient">Design</span></h1>
                <p class="hero-description">Professional graphic design services in Abuja that bring your brand to life. From business cards to billboards, we create visuals that captivate and communicate.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=graphic-design" class="theme-btn13">
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
                  <i class="fa-solid fa-paint-brush"></i>
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
              <h2 class="section-title">Design That <span class="gradient-text">Speaks Volumes</span></h2>
              <p class="section-description">Your brand's first impression matters. We create stunning visuals that capture attention and communicate your message effectively.</p>
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

      <!-- Services Grid -->
      <section class="services-grid-section">
        <div class="container">
          <div class="section-header">
            <h2>Our <span class="gradient-text">Design Services</span></h2>
            <p>Comprehensive design solutions for all your needs</p>
          </div>

          <div class="services-grid">
            <div v-for="(service, index) in designServices" :key="index" class="service-card">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Print Design Section -->
      <section class="print-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="print-content">
                <span class="subtitle">Print Design</span>
                <h2>Stand Out with <span class="gradient-text">Professional Print</span></h2>
                <p>High-quality print designs that make your brand shine in the physical world.</p>
                
                <div class="print-grid">
                  <div class="print-item" v-for="item in printServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="print-image">
                <div class="stars-container print-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-newspaper"></i>
                  <i class="fa-solid fa-tag"></i>
                  <i class="fa-solid fa-book"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Digital Design Section -->
      <section class="digital-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="digital-content">
                <span class="subtitle">Digital Design</span>
                <h2>Make an Impact <span class="gradient-text">Online</span></h2>
                <p>Eye-catching digital designs for your website, social media, and online presence.</p>
                
                <div class="digital-grid">
                  <div class="digital-item" v-for="item in digitalServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="digital-image">
                <div class="stars-container digital-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-laptop"></i>
                  <i class="fa-brands fa-facebook"></i>
                  <i class="fa-brands fa-instagram"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Branding Section -->
      <section class="branding-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="branding-content">
                <span class="subtitle">Brand Identity</span>
                <h2>Build a <span class="gradient-text">Memorable Brand</span></h2>
                <p>Complete branding solutions that establish your identity and set you apart from competitors.</p>
                
                <div class="branding-grid">
                  <div class="branding-item" v-for="item in brandingServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="branding-image">
                <div class="stars-container branding-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-crown"></i>
                  <i class="fa-solid fa-brush"></i>
                  <i class="fa-solid fa-pen"></i>
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
              <h2 class="section-title">Design <span class="gradient-text">Packages</span></h2>
              <p class="section-description">Choose the perfect package for your needs</p>
            </div>
          </div>

          <div class="row mt-50">
            <div class="col-lg-10 m-auto">
              <div class="pricing-grid">
                <!-- Basic Package -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Basic Design</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">50,000</span>
                      <span class="period">/project</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Logo Design</li>
                      <li><i class="fa-solid fa-check"></i> Business Cards (100 pcs)</li>
                      <li><i class="fa-solid fa-check"></i> Letterhead Design</li>
                      <li><i class="fa-solid fa-check"></i> 3 Revisions</li>
                      <li><i class="fa-solid fa-check"></i> Source Files</li>
                    </ul>
                    <NuxtLink to="/contact?service=graphic-basic" class="theme-btn13 full-width">
                      Choose Basic
                    </NuxtLink>
                  </div>
                </div>

                <!-- Professional Package -->
                <div class="pricing-card popular">
                  <div class="popular-badge">Most Popular</div>
                  <div class="pricing-header">
                    <h3>Professional Design</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">120,000</span>
                      <span class="period">/project</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Complete Brand Identity</li>
                      <li><i class="fa-solid fa-check"></i> Logo + Stationery</li>
                      <li><i class="fa-solid fa-check"></i> Brochure/Flyer Design</li>
                      <li><i class="fa-solid fa-check"></i> Social Media Kit</li>
                      <li><i class="fa-solid fa-check"></i> Unlimited Revisions</li>
                      <li><i class="fa-solid fa-check"></i> All Source Files</li>
                    </ul>
                    <NuxtLink to="/contact?service=graphic-pro" class="theme-btn13 full-width">
                      Choose Professional
                    </NuxtLink>
                  </div>
                </div>

                <!-- Enterprise Package -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Premium Design</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">250,000</span>
                      <span class="period">/project</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Full Brand Strategy</li>
                      <li><i class="fa-solid fa-check"></i> Complete Brand Guidelines</li>
                      <li><i class="fa-solid fa-check"></i> All Print Materials</li>
                      <li><i class="fa-solid fa-check"></i> Digital Assets Package</li>
                      <li><i class="fa-solid fa-check"></i> Packaging Design</li>
                      <li><i class="fa-solid fa-check"></i> Marketing Collateral</li>
                    </ul>
                    <NuxtLink to="/contact?service=graphic-premium" class="theme-btn13 full-width">
                      Choose Premium
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
            <h2>Ready to Transform Your Brand?</h2>
            <p>Let's create stunning visuals that capture your brand's essence.</p>
            <NuxtLink to="/contact?service=graphic-design" class="theme-btn13">
              Start Your Design Project
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
  title: 'Graphic Design Services Abuja | Logo Design & Branding Nigeria - Yemars Technology',
  description: 'Professional graphic design services in Abuja. Logo design, branding, business cards, flyers, banners, and more. Packages starting from ₦50,000 with unlimited revisions.',
  ogTitle: 'Professional Graphic Design Services for Nigerian Businesses',
  ogDescription: 'Create stunning visuals with our design services. Logo design, branding, business cards, and marketing materials.',
  ogImage: '/og-image-graphic-design.jpg',
  ogUrl: 'https://yemars.ng/services/graphic-design',
  twitterTitle: 'Graphic Design Services Nigeria',
  twitterDescription: 'Professional design services including logos, branding, and marketing materials.',
  twitterImage: '/twitter-image-graphic-design.jpg',
  keywords: 'graphic design services Abuja, logo design Nigeria, branding services Abuja, business card design, flyer design Nigeria, brochure design Abuja, social media graphics Nigeria, print design Abuja, corporate identity design, packaging design Nigeria, poster design, banner design Abuja'
})

// Service Schema Data
const serviceSchema = {
  name: 'Graphic Design Services',
  description: 'Professional graphic design services including logo design, branding, business cards, flyers, banners, and marketing materials.',
  offers: [
    { name: 'Basic Design Package', price: '50000' },
    { name: 'Professional Design Package', price: '120000' },
    { name: 'Premium Design Package', price: '250000' }
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
    icon: 'fa-solid fa-pen',
    title: 'Creative Excellence',
    description: 'Original designs tailored to your brand identity and target audience.'
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality and creativity.'
  },
  {
    icon: 'fa-solid fa-rotate',
    title: 'Unlimited Revisions',
    description: 'We work with you until you are 100% satisfied with the design.'
  },
  {
    icon: 'fa-solid fa-file',
    title: 'Print Ready Files',
    description: 'All files prepared for both digital and print use.'
  },
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Source Files Included',
    description: 'You get all editable source files for future modifications.'
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Dedicated Support',
    description: 'Ongoing support even after project completion.'
  }
]

const designServices = [
  {
    icon: 'fa-solid fa-brush',
    title: 'Logo Design',
    description: 'Unique and memorable logos that represent your brand identity.'
  },
  {
    icon: 'fa-solid fa-id-card',
    title: 'Business Cards',
    description: 'Professional business cards that make lasting impressions.'
  },
  {
    icon: 'fa-solid fa-book',
    title: 'Brochures & Flyers',
    description: 'Informative and attractive marketing materials.'
  },
  {
    icon: 'fa-solid fa-flag',
    title: 'Banners & Roll-ups',
    description: 'Large format designs for events and promotions.'
  },
  {
    icon: 'fa-solid fa-music',
    title: 'Music Cover Art',
    description: 'Stunning album and single cover designs for artists.'
  },
  {
    icon: 'fa-solid fa-paint-roller',
    title: 'Posters',
    description: 'Eye-catching posters for events and advertising.'
  }
]

const printServices = [
  'Business Cards',
  'Brochures',
  'Flyers',
  'Banners',
  'Posters',
  'Roll-up Stands',
  'Stickers',
  'Letterheads',
  'Complimentary Cards',
  'Envelopes',
  'Calendars',
  'Magazines',
  'Books',
  'Packaging',
  'Labels'
]

const digitalServices = [
  'Social Media Graphics',
  'Website Graphics',
  'Email Headers',
  'Digital Ads',
  'Blog Graphics',
  'Infographics',
  'E-book Covers',
  'Presentation Decks',
  'YouTube Thumbnails',
  'App Icons',
  'Newsletter Templates',
  'Online Banners'
]

const brandingServices = [
  'Logo Design',
  'Brand Guidelines',
  'Color Palette',
  'Typography',
  'Stationery Design',
  'Brand Voice',
  'Visual Identity',
  'Brand Strategy',
  'Packaging Design',
  'Merchandise Design',
  'Brand Collateral',
  'Rebranding'
]

const faqs = [
  {
    question: 'How long does the design process take?',
    answer: 'Typical turnaround is 3-5 business days for most projects. Complex projects may take longer. We\'ll provide a timeline upfront.'
  },
  {
    question: 'Do you offer revisions?',
    answer: 'Yes! We offer unlimited revisions until you are satisfied. Your satisfaction is our priority.'
  },
  {
    question: 'What file formats will I receive?',
    answer: 'You\'ll receive all major formats: AI, EPS, PDF, PNG, and JPG. These work for both print and digital use.'
  },
  {
    question: 'Can you print the designs?',
    answer: 'Yes! We offer printing services for all our designs. We can handle the entire process from design to delivery.'
  },
  {
    question: 'Do you have design packages?',
    answer: 'Yes, we offer customized packages based on your needs. Contact us for a quote tailored to your project.'
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

.graphic-design-hero {
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

.print-stars .star,
.digital-stars .star,
.branding-stars .star,
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

/* Print Section */
.print-section {
  padding: 80px 0;
  background: white;
}

.print-content .subtitle,
.digital-content .subtitle,
.branding-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.print-content h2,
.digital-content h2,
.branding-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.print-content p,
.digital-content p,
.branding-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.print-grid,
.digital-grid,
.branding-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.print-item,
.digital-item,
.branding-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: #f8f9ff;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.print-item:hover,
.digital-item:hover,
.branding-item:hover {
  background: #0055FF;
  transform: translateX(5px);
}

.print-item:hover i,
.print-item:hover span,
.digital-item:hover i,
.digital-item:hover span,
.branding-item:hover i,
.branding-item:hover span {
  color: white;
}

.print-item i,
.digital-item i,
.branding-item i {
  color: #10b981;
  font-size: 14px;
}

.print-item span,
.digital-item span,
.branding-item span {
  color: #4a5568;
  font-size: 14px;
}

.print-image,
.digital-image,
.branding-image {
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

/* Digital Section */
.digital-section {
  padding: 80px 0;
  background: #f8f9ff;
}

/* Branding Section */
.branding-section {
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
  
  .print-content h2,
  .digital-content h2,
  .branding-content h2 {
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
  
  .print-grid,
  .digital-grid,
  .branding-grid {
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