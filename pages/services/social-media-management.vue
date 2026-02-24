<template>
  <div>
    <ServiceSchema :service="serviceSchema" />
    
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero social-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Digital Marketing</span>
                <h1>Social Media <span class="hero-gradient">Management</span></h1>
                <p class="hero-description">Grow your brand online with professional social media management. We create, post, and engage to build your community and boost sales. Packages starting from ₦80,000/month.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=social-media" class="theme-btn13">
                    Get Started <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-hashtag"></i>
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
              <h2 class="section-title">Grow Your <span class="gradient-text">Online Presence</span></h2>
              <p class="section-description">We help Nigerian businesses build, manage, and grow their social media presence across all major platforms.</p>
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

      <!-- Platforms -->
      <section class="platforms-section">
        <div class="container">
          <div class="section-header">
            <h2>Platforms We <span class="gradient-text">Manage</span></h2>
            <p>We handle all major social media platforms</p>
          </div>

          <div class="platforms-grid">
            <div v-for="(platform, index) in platforms" :key="index" class="platform-card">
              <div class="platform-icon" :style="{ background: platform.color }">
                <i :class="platform.icon"></i>
              </div>
              <h3>{{ platform.name }}</h3>
              <p>{{ platform.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Services Grid -->
      <section class="services-grid-section">
        <div class="container">
          <div class="section-header">
            <h2>What We <span class="gradient-text">Offer</span></h2>
            <p>Complete social media management solutions</p>
          </div>

          <div class="services-grid">
            <div v-for="(service, index) in socialServices" :key="index" class="service-card">
              <div class="service-icon">
                <i :class="service.icon"></i>
              </div>
              <h3>{{ service.title }}</h3>
              <p>{{ service.description }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Content Creation -->
      <section class="content-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="content-details">
                <span class="subtitle">Content Creation</span>
                <h2>Engaging <span class="gradient-text">Content</span></h2>
                <p>Professional content that resonates with your audience and reflects your brand.</p>
                
                <div class="content-grid">
                  <div class="content-item" v-for="item in contentServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="content-image">
                <div class="stars-container content-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-camera"></i>
                  <i class="fa-solid fa-video"></i>
                  <i class="fa-solid fa-pen"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SEO & Growth -->
      <section class="seo-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 order-lg-2">
              <div class="seo-details">
                <span class="subtitle">SEO & Growth</span>
                <h2>Boost Your <span class="gradient-text">Reach</span></h2>
                <p>Strategic SEO and growth hacking to increase your visibility and engagement.</p>
                
                <div class="seo-grid">
                  <div class="seo-item" v-for="item in seoServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 order-lg-1">
              <div class="seo-image">
                <div class="stars-container seo-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-chart-line"></i>
                  <i class="fa-solid fa-magnifying-glass"></i>
                  <i class="fa-solid fa-rocket"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Analytics -->
      <section class="analytics-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="analytics-details">
                <span class="subtitle">Analytics & Reporting</span>
                <h2>Data-Driven <span class="gradient-text">Decisions</span></h2>
                <p>Detailed monthly reports showing your growth, engagement, and ROI.</p>
                
                <div class="analytics-grid">
                  <div class="analytics-item" v-for="item in analyticsServices" :key="item">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="analytics-image">
                <div class="stars-container analytics-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-solid fa-chart-pie"></i>
                  <i class="fa-solid fa-chart-simple"></i>
                  <i class="fa-solid fa-chart-gantt"></i>
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
              <h2 class="section-title">Social Media <span class="gradient-text">Packages</span></h2>
              <p class="section-description">Choose the perfect package for your business</p>
            </div>
          </div>

          <div class="row mt-50">
            <div class="col-lg-10 m-auto">
              <div class="pricing-grid">
                <!-- Basic Package -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Starter</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">80,000</span>
                      <span class="period">/month</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> 2 Platforms</li>
                      <li><i class="fa-solid fa-check"></i> 10 Posts per month</li>
                      <li><i class="fa-solid fa-check"></i> Content Creation</li>
                      <li><i class="fa-solid fa-check"></i> Community Management</li>
                      <li><i class="fa-solid fa-check"></i> Monthly Report</li>
                    </ul>
                    <NuxtLink to="/contact?service=social-starter" class="theme-btn13 full-width">
                      Choose Starter
                    </NuxtLink>
                  </div>
                </div>

                <!-- Professional Package -->
                <div class="pricing-card popular">
                  <div class="popular-badge">Most Popular</div>
                  <div class="pricing-header">
                    <h3>Professional</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">150,000</span>
                      <span class="period">/month</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> 4 Platforms</li>
                      <li><i class="fa-solid fa-check"></i> 20 Posts per month</li>
                      <li><i class="fa-solid fa-check"></i> Custom Graphics</li>
                      <li><i class="fa-solid fa-check"></i> SEO Optimization</li>
                      <li><i class="fa-solid fa-check"></i> Weekly Reports</li>
                      <li><i class="fa-solid fa-check"></i> Ad Management</li>
                    </ul>
                    <NuxtLink to="/contact?service=social-pro" class="theme-btn13 full-width">
                      Choose Professional
                    </NuxtLink>
                  </div>
                </div>

                <!-- Enterprise Package -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <h3>Enterprise</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">250,000</span>
                      <span class="period">/month</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> All Platforms</li>
                      <li><i class="fa-solid fa-check"></i> 30+ Posts per month</li>
                      <li><i class="fa-solid fa-check"></i> Video Content</li>
                      <li><i class="fa-solid fa-check"></i> Influencer Outreach</li>
                      <li><i class="fa-solid fa-check"></i> Daily Reports</li>
                      <li><i class="fa-solid fa-check"></i> Strategy Planning</li>
                    </ul>
                    <NuxtLink to="/contact?service=social-enterprise" class="theme-btn13 full-width">
                      Choose Enterprise
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
            <h2>Ready to Grow on Social Media?</h2>
            <p>Let's create a strategy that gets results for your business.</p>
            <NuxtLink to="/contact?service=social-media" class="theme-btn13">
              Start Your Journey
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
  title: 'Social Media Management Nigeria | Digital Marketing Agency Abuja - Yemars Technology',
  description: 'Professional social media management for Nigerian businesses. Content creation, SEO optimization, community management, and growth strategies. Packages starting from ₦80,000/month.',
  ogTitle: 'Social Media Management for Nigerian Businesses',
  ogDescription: 'Grow your brand online with professional content creation, community management, and SEO optimization.',
  ogImage: '/og-image-social-media.jpg',
  ogUrl: 'https://yemars.ng/services/social-media-management',
  twitterTitle: 'Social Media Management Nigeria',
  twitterDescription: 'Professional social media management with content creation and SEO.',
  twitterImage: '/twitter-image-social-media.jpg',
  keywords: 'social media management Nigeria, digital marketing agency Abuja, social media marketing Nigeria, content creation Abuja, community management Nigeria, SEO optimization Nigeria, Facebook management, Instagram management, LinkedIn management, Twitter management, TikTok marketing, social media strategy Abuja'
})

// Service Schema Data
const serviceSchema = {
  name: 'Social Media Management',
  description: 'Professional social media management including content creation, community management, SEO optimization, and growth strategies.',
  offers: [
    { name: 'Starter Social Media Package', price: '80000' },
    { name: 'Professional Social Media Package', price: '150000' },
    { name: 'Enterprise Social Media Package', price: '250000' }
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
    icon: 'fa-solid fa-users',
    title: 'Community Growth',
    description: 'Build and engage your online community across all platforms.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Increased Engagement',
    description: 'Boost likes, comments, shares, and overall interaction.'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'SEO Boost',
    description: 'Improve your search rankings through social signals.'
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Time Savings',
    description: 'Focus on your business while we handle your social media.'
  },
  {
    icon: 'fa-solid fa-pen',
    title: 'Brand Voice',
    description: 'Consistent messaging that reflects your brand identity.'
  },
  {
    icon: 'fa-solid fa-chart-pie',
    title: 'Detailed Analytics',
    description: 'Monthly reports showing your growth and ROI.'
  }
]

const platforms = [
  {
    icon: 'fa-brands fa-facebook',
    name: 'Facebook',
    color: '#1877f2',
    description: 'Build community and run targeted ads'
  },
  {
    icon: 'fa-brands fa-instagram',
    name: 'Instagram',
    color: '#e4405f',
    description: 'Visual storytelling and influencer outreach'
  },
  {
    icon: 'fa-brands fa-linkedin',
    name: 'LinkedIn',
    color: '#0077b5',
    description: 'B2B networking and professional presence'
  },
  {
    icon: 'fa-brands fa-x-twitter',
    name: 'Twitter/X',
    color: '#000000',
    description: 'Real-time engagement and customer service'
  },
  {
    icon: 'fa-brands fa-tiktok',
    name: 'TikTok',
    color: '#000000',
    description: 'Viral content and younger audience'
  },
  {
    icon: 'fa-brands fa-youtube',
    name: 'YouTube',
    color: '#ff0000',
    description: 'Video content and tutorials'
  }
]

const socialServices = [
  {
    icon: 'fa-solid fa-pen',
    title: 'Content Creation',
    description: 'Custom graphics, videos, and copywriting for your brand.'
  },
  {
    icon: 'fa-solid fa-calendar',
    title: 'Post Scheduling',
    description: 'Strategic posting at optimal times for maximum reach.'
  },
  {
    icon: 'fa-solid fa-comments',
    title: 'Community Management',
    description: 'Respond to comments, messages, and engage with followers.'
  },
  {
    icon: 'fa-solid fa-magnifying-glass',
    title: 'SEO Optimization',
    description: 'Optimize profiles and content for better visibility.'
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Analytics',
    description: 'Track performance and provide detailed reports.'
  },
  {
    icon: 'fa-solid fa-ad',
    title: 'Ad Management',
    description: 'Create and manage targeted ad campaigns.'
  }
]

const contentServices = [
  'Graphic Design',
  'Video Creation',
  'Copywriting',
  'Photo Editing',
  'Story Creation',
  'Carousel Posts',
  'Reels & Shorts',
  'Infographics',
  'Quote Cards',
  'Product Showcases',
  'Behind-the-Scenes',
  'User Generated Content'
]

const seoServices = [
  'Profile Optimization',
  'Keyword Research',
  'Hashtag Strategy',
  'Content Optimization',
  'Link Building',
  'Local SEO',
  'Competitor Analysis',
  'Trend Research',
  'Growth Hacking',
  'Viral Strategies',
  'Influencer Outreach',
  'Brand Mentions'
]

const analyticsServices = [
  'Weekly Reports',
  'Monthly Reviews',
  'Engagement Metrics',
  'Reach Analysis',
  'Follower Growth',
  'Click-through Rates',
  'Conversion Tracking',
  'ROI Analysis',
  'Competitor Benchmarking',
  'Audience Insights',
  'Content Performance',
  'Strategy Adjustments'
]

const faqs = [
  {
    question: 'How soon will I see results?',
    answer: 'Most clients see increased engagement within the first month. Significant growth typically occurs within 3-6 months of consistent management.'
  },
  {
    question: 'Do I need to provide content?',
    answer: 'We create all content for you. We just need your brand guidelines and any specific information you want to share.'
  },
  {
    question: 'Can you manage multiple platforms?',
    answer: 'Yes! Our packages include management of 2-6 platforms depending on your needs.'
  },
  {
    question: 'Do you handle ad campaigns?',
    answer: 'Yes, our Professional and Enterprise packages include ad management. Ad spend is separate from management fees.'
  },
  {
    question: 'What happens if I want to stop?',
    answer: 'No long-term contracts. You can cancel anytime with 30 days notice.'
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

.social-hero {
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

.content-stars .star,
.seo-stars .star,
.analytics-stars .star,
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

/* Platforms Section */
.platforms-section {
  padding: 80px 0;
  background: white;
}

.platforms-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  max-width: 900px;
  margin: 0 auto;
}

.platform-card {
  text-align: center;
  padding: 30px 20px;
  background: #f8f9ff;
  border-radius: 20px;
  transition: all 0.3s ease;
}

.platform-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.1);
}

.platform-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  font-size: 30px;
}

.platform-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.platform-card p {
  color: #666;
  font-size: 13px;
  line-height: 1.6;
  margin: 0;
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

/* Content Section */
.content-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.content-details .subtitle,
.seo-details .subtitle,
.analytics-details .subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.content-details h2,
.seo-details h2,
.analytics-details h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.content-details p,
.seo-details p,
.analytics-details p {
  color: #666;
  font-size: 16px;
  margin-bottom: 30px;
}

.content-grid,
.seo-grid,
.analytics-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.content-item,
.seo-item,
.analytics-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s ease;
}

.content-item:hover,
.seo-item:hover,
.analytics-item:hover {
  background: #0055FF;
  transform: translateX(5px);
}

.content-item:hover i,
.content-item:hover span,
.seo-item:hover i,
.seo-item:hover span,
.analytics-item:hover i,
.analytics-item:hover span {
  color: white;
}

.content-item i,
.seo-item i,
.analytics-item i {
  color: #10b981;
  font-size: 14px;
}

.content-item span,
.seo-item span,
.analytics-item span {
  color: #4a5568;
  font-size: 14px;
}

.content-image,
.seo-image,
.analytics-image {
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

/* SEO Section */
.seo-section {
  padding: 80px 0;
  background: white;
}

/* Analytics Section */
.analytics-section {
  padding: 80px 0;
  background: #f8f9ff;
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
  
  .platforms-grid {
    grid-template-columns: repeat(2, 1fr);
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
  
  .content-details h2,
  .seo-details h2,
  .analytics-details h2 {
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
  
  .platforms-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .content-grid,
  .seo-grid,
  .analytics-grid {
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
  
  .platform-card {
    padding: 20px;
  }
  
  .platform-icon {
    width: 60px;
    height: 60px;
    font-size: 24px;
  }
  
  .platform-card h3 {
    font-size: 16px;
  }
  
  .platform-card p {
    font-size: 12px;
  }
  
  .content-item span,
  .seo-item span,
  .analytics-item span {
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