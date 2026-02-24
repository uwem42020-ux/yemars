<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero printing-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Quality Printing</span>
                <h1>Printing <span class="hero-gradient">Services</span></h1>
                <p class="hero-description">High-quality printing services in Abuja. From business cards to large format banners, we bring your designs to life with fast turnaround and competitive pricing.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=printing" class="theme-btn13">
                    Get a Quote <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-print"></i>
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
              <h2 class="section-title">Premium <span class="gradient-text">Printing Solutions</span></h2>
              <p class="section-description">State-of-the-art printing equipment and premium materials for exceptional results every time.</p>
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

      <!-- Print Categories -->
      <section class="categories-section">
        <div class="container">
          <div class="section-header">
            <h2>Our <span class="gradient-text">Print Categories</span></h2>
            <p>Comprehensive printing services for all your business needs</p>
          </div>

          <div class="categories-grid">
            <div v-for="(category, index) in printCategories" :key="index" class="category-card">
              <div class="category-icon">
                <i :class="category.icon"></i>
              </div>
              <h3>{{ category.title }}</h3>
              <p>{{ category.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Marketing Materials -->
      <section class="marketing-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="marketing-content">
                <span class="subtitle">Marketing Materials</span>
                <h2>Promote Your <span class="gradient-text">Business</span></h2>
                <p>Eye-catching marketing materials that get your message noticed.</p>
                
                <div class="marketing-grid">
                  <div class="marketing-item" v-for="item in marketingItems" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="marketing-image">
                <div class="stars-container marketing-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-scroll"></i>
                  <i class="fa-solid fa-tag"></i>
                  <i class="fa-solid fa-envelope"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Large Format Printing -->
      <section class="large-format-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="large-format-content">
                <span class="subtitle">Large Format</span>
                <h2>Banners & <span class="gradient-text">Signage</span></h2>
                <p>Make a big impression with our large format printing services.</p>
                
                <div class="large-format-grid">
                  <div class="large-format-item" v-for="item in largeFormatItems" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="large-format-image">
                <div class="stars-container large-format-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-flag"></i>
                  <i class="fa-solid fa-cube"></i>
                  <i class="fa-solid fa-signs-post"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Promotional Items -->
      <section class="promotional-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="promotional-content">
                <span class="subtitle">Promotional Items</span>
                <h2>Branded <span class="gradient-text">Merchandise</span></h2>
                <p>Custom merchandise that keeps your brand in front of customers.</p>
                
                <div class="promotional-grid">
                  <div class="promotional-item" v-for="item in promotionalItems" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="promotional-image">
                <div class="stars-container promotional-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-shirt"></i>
                  <i class="fa-solid fa-mug-hot"></i>
                  <i class="fa-solid fa-calendar"></i>
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
              <h2 class="section-title">Print <span class="gradient-text">Price List</span></h2>
              <p class="section-description">Competitive pricing for quality printing</p>
            </div>
          </div>

          <div class="row mt-50">
            <div class="col-lg-10 m-auto">
              <div class="price-grid">
                <div class="price-card" v-for="(item, index) in priceList" :key="index">
                  <div class="price-header">
                    <h3>{{ item.name }}</h3>
                    <div class="price-tag">
                      <span class="currency">₦</span>
                      <span class="amount">{{ item.price }}</span>
                    </div>
                  </div>
                  <div class="price-body">
                    <p class="price-description">{{ item.description }}</p>
                    <ul class="price-specs">
                      <li v-for="spec in item.specs" :key="spec">
                        <i class="fa-solid fa-check"></i>
                        {{ spec }}
                      </li>
                    </ul>
                    <NuxtLink :to="`/contact?service=printing&item=${item.name}`" class="price-btn">
                      Order Now
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Bulk Order Section -->
      <section class="bulk-section">
        <div class="container">
          <div class="bulk-card">
            <div class="row align-items-center">
              <div class="col-lg-8">
                <h3>Need Bulk Printing?</h3>
                <p>Get special discounts for large volume orders. Perfect for events, campaigns, and corporate supplies.</p>
              </div>
              <div class="col-lg-4 text-center">
                <NuxtLink to="/contact?service=printing-bulk" class="bulk-btn">
                  Request Bulk Quote
                  <i class="fa-solid fa-arrow-right"></i>
                </NuxtLink>
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
            <h2>Ready to Print?</h2>
            <p>Upload your design or let us design for you. Get a quote today.</p>
            <NuxtLink to="/contact?service=printing" class="theme-btn13">
              Start Your Print Order
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
  title: 'Printing Services Abuja | Business Cards, Flyers, Banners & More - Yemars Technology',
  description: 'Professional printing services in Abuja. Business cards, flyers, banners, roll-ups, flex, and promotional items. Fast turnaround and competitive prices with delivery available.',
  ogTitle: 'Professional Printing Services in Abuja',
  ogDescription: 'High-quality printing for all your business needs. Business cards, flyers, banners, and promotional items.',
  ogImage: '/og-image-printing.jpg',
  ogUrl: 'https://yemars.ng/services/printing',
  twitterTitle: 'Printing Services Nigeria',
  twitterDescription: 'Business cards, flyers, banners, and promotional merchandise.',
  twitterImage: '/twitter-image-printing.jpg',
  keywords: 'printing services Abuja, business card printing Nigeria, flyer printing Abuja, banner printing Abuja, roll up banners Abuja, flex printing Nigeria, t-shirt printing Abuja, mug printing Abuja, promotional items Nigeria, large format printing Abuja, brochure printing, poster printing Abuja'
})

// Service Schema Data
const serviceSchema = {
  name: 'Printing Services',
  description: 'High-quality printing services including business cards, flyers, banners, roll-ups, and promotional merchandise.',
  offers: [
    { name: 'Business Cards', price: '7000' },
    { name: 'Flyers', price: '25000' },
    { name: 'Roll-up Banners', price: '35000' },
    { name: 'Flex Banners', price: '2500' },
    { name: 'Brochures', price: '45000' },
    { name: 'T-shirts', price: '3500' }
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
    icon: 'fa-solid fa-clock',
    title: 'Fast Turnaround',
    description: 'Quick printing with same-day service available for urgent orders.'
  },
  {
    icon: 'fa-solid fa-medal',
    title: 'Premium Quality',
    description: 'High-quality prints using professional-grade equipment and materials.'
  },
  {
    icon: 'fa-solid fa-palette',
    title: 'Vibrant Colors',
    description: 'Crisp, accurate colors that make your designs pop.'
  },
  {
    icon: 'fa-solid fa-ruler',
    title: 'Multiple Sizes',
    description: 'Wide range of sizes from business cards to large banners.'
  },
  {
    icon: 'fa-solid fa-truck',
    title: 'Delivery Available',
    description: 'Convenient delivery within Abuja for your printed materials.'
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Design Support',
    description: 'Need design help? Our graphic designers can assist.'
  }
]

const printCategories = [
  {
    icon: 'fa-solid fa-id-card',
    title: 'Business Stationery',
    description: 'Business cards, letterheads, compliment cards, envelopes'
  },
  {
    icon: 'fa-solid fa-scroll',
    title: 'Marketing Materials',
    description: 'Flyers, brochures, posters, banners, roll-ups'
  },
  {
    icon: 'fa-solid fa-shirt',
    title: 'Promotional Items',
    description: 'T-shirts, mugs, caps, calendars, branded merchandise'
  },
  {
    icon: 'fa-solid fa-book',
    title: 'Publications',
    description: 'Books, magazines, booklets, manuals, catalogs'
  },
  {
    icon: 'fa-solid fa-envelope',
    title: 'Direct Mail',
    description: 'Flyers, leaflets, door hangers, mailers'
  },
  {
    icon: 'fa-solid fa-cube',
    title: 'Packaging',
    description: 'Boxes, labels, stickers, bags, wraps'
  }
]

const marketingItems = [
  'Flyers & Handbills',
  'Brochures',
  'Posters',
  'Leaflets',
  'Door Hangers',
  'Menus',
  'Price Lists',
  'Catalogs',
  'Magazines',
  'Newsletters',
  'Invitations',
  'Programs'
]

const largeFormatItems = [
  'Flex Banners',
  'Roll-up Stands',
  'Pull-up Banners',
  'X-stand Banners',
  'Event Banners',
  'Billboards',
  'Vinyl Stickers',
  'Window Graphics',
  'Wall Murals',
  'Floor Graphics',
  'Trade Show Displays',
  'Backdrop Banners'
]

const promotionalItems = [
  'T-shirts',
  'Caps & Hats',
  'Mugs',
  'Pens',
  'Calendars',
  'Diaries',
  'Notebooks',
  'Bags',
  'Umbrellas',
  'Key Holders',
  'Lanyards',
  'USB Drives'
]

const priceList = [
  {
    name: 'Business Cards',
    price: '7,000',
    description: 'Premium glossy business cards',
    specs: ['100 pieces', 'Full color both sides', 'UV coated', '24hr turnaround']
  },
  {
    name: 'Flyers',
    price: '25,000',
    description: 'A5 full color flyers',
    specs: ['500 pieces', 'Full color both sides', 'Art card paper', '48hr turnaround']
  },
  {
    name: 'Roll-up Banners',
    price: '35,000',
    description: 'Standard roll-up banner',
    specs: ['85cm x 200cm', 'Full color print', 'Includes stand', '24hr turnaround']
  },
  {
    name: 'Flex Banners',
    price: '2,500',
    description: 'Large format flex banner',
    specs: ['Per square meter', 'Outdoor quality', 'Reinforced edges', 'Grommets included']
  },
  {
    name: 'Brochures',
    price: '45,000',
    description: 'Tri-fold A4 brochures',
    specs: ['250 pieces', 'Full color', 'Glossy finish', '3-5 days']
  },
  {
    name: 'T-shirts',
    price: '3,500',
    description: 'Custom printed T-shirts',
    specs: ['Per piece', 'Screen printed', 'Quality fabric', 'Bulk discounts']
  }
]

const faqs = [
  {
    question: 'What file formats do you accept?',
    answer: 'We accept PDF, AI, PSD, CDR, JPG, and PNG files. For best results, please provide print-ready PDFs with 300dpi resolution.'
  },
  {
    question: 'Do you offer design services?',
    answer: 'Yes! If you don\'t have a design, our graphic designers can create one for you at an additional cost.'
  },
  {
    question: 'How long does printing take?',
    answer: 'Most jobs are completed within 24-48 hours. Complex or large volume orders may take 3-5 days.'
  },
  {
    question: 'Do you deliver?',
    answer: 'Yes, we offer delivery within Abuja for a small fee. Free delivery for orders above ₦50,000.'
  },
  {
    question: 'Can I get a sample before bulk printing?',
    answer: 'Yes, we can provide a digital proof for approval. Physical samples are available upon request.'
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

.printing-hero {
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

.marketing-stars .star,
.large-format-stars .star,
.promotional-stars .star,
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

/* Categories Section */
.categories-section {
  padding: 80px 0;
  background: white;
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 1000px;
  margin: 0 auto;
}

.category-card {
  text-align: center;
  padding: 30px 25px;
  background: #f8f9ff;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.1);
}

.category-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.category-icon i {
  font-size: 28px;
  color: white;
}

.category-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.category-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

/* Marketing Section */
.marketing-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.marketing-content .subtitle,
.large-format-content .subtitle,
.promotional-content .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.marketing-content h2,
.large-format-content h2,
.promotional-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.marketing-content p,
.large-format-content p,
.promotional-content p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.marketing-grid,
.large-format-grid,
.promotional-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.marketing-item,
.large-format-item,
.promotional-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.marketing-item:hover,
.large-format-item:hover,
.promotional-item:hover {
  background: #0055FF;
  transform: translateX(5px);
}

.marketing-item:hover i,
.marketing-item:hover span,
.large-format-item:hover i,
.large-format-item:hover span,
.promotional-item:hover i,
.promotional-item:hover span {
  color: white;
}

.marketing-item i,
.large-format-item i,
.promotional-item i {
  color: #10b981;
  font-size: 14px;
}

.marketing-item span,
.large-format-item span,
.promotional-item span {
  color: #4a5568;
  font-size: 14px;
}

.marketing-image,
.large-format-image,
.promotional-image {
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

/* Large Format Section */
.large-format-section {
  padding: 80px 0;
  background: white;
}

/* Promotional Section */
.promotional-section {
  padding: 80px 0;
  background: #f8f9ff;
}

/* Price List */
.price-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
}

.price-card {
  background: white;
  border-radius: 20px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.price-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.1);
}

.price-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #eef2f6;
}

.price-header h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.price-tag {
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 3px;
}

.price-tag .currency {
  font-size: 14px;
  font-weight: 600;
  color: #0055FF;
}

.price-tag .amount {
  font-size: 24px;
  font-weight: 800;
  color: #0055FF;
  line-height: 1;
}

.price-description {
  color: #666;
  font-size: 13px;
  margin-bottom: 15px;
  text-align: center;
}

.price-specs {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.price-specs li {
  margin-bottom: 8px;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
}

.price-specs li i {
  color: #10b981;
  font-size: 12px;
}

.price-btn {
  display: block;
  text-align: center;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 10px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.price-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0,85,255,0.2);
}

/* Bulk Section */
.bulk-section {
  padding: 40px 0 80px;
}

.bulk-card {
  background: linear-gradient(135deg, #0A1F44, #0055FF);
  border-radius: 20px;
  padding: 40px;
  color: white;
}

.bulk-card h3 {
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
}

.bulk-card p {
  color: rgba(255,255,255,0.9);
  font-size: 15px;
  margin: 0;
}

.bulk-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0055FF;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.bulk-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(255,255,255,0.2);
}

.bulk-btn i {
  transition: transform 0.3s ease;
}

.bulk-btn:hover i {
  transform: translateX(5px);
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
  
  .categories-grid,
  .price-grid {
    grid-template-columns: repeat(2, 1fr);
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
  
  .categories-grid,
  .price-grid {
    grid-template-columns: 1fr;
  }
  
  .marketing-grid,
  .large-format-grid,
  .promotional-grid {
    grid-template-columns: 1fr;
  }
  
  .bulk-card {
    text-align: center;
  }
  
  .bulk-card .text-center {
    margin-top: 20px;
  }
}
</style>