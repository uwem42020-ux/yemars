<template>
    <div class="service-detail-page">
      <!-- Hero Section -->
      <section class="service-hero mobile-hero">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="hero-content">
                <span class="service-badge">Mobile Solutions</span>
                <h1>Mobile <span class="gradient-text">Applications</span></h1>
                <p class="hero-description">Native and cross-platform mobile apps for Android and iOS. Reach your customers wherever they are with powerful mobile experiences.</p>
                <div class="hero-cta">
                  <NuxtLink to="/contact?service=mobile-app" class="theme-btn13">
                    Build Your App <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
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
                  <i class="fa-solid fa-mobile-screen"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Platform Overview -->
      <section class="platform-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 m-auto text-center">
              <h2 class="section-title">Multi-Platform <span class="gradient-text">Development</span></h2>
              <p class="section-description">We build for both major platforms, ensuring your audience is covered regardless of their device preference.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-6">
              <div class="platform-card android">
                <div class="platform-header">
                  <i class="fa-brands fa-android"></i>
                  <h3>Android</h3>
                </div>
                <p>Native Android apps built with Kotlin/Java for optimal performance on the world's most popular mobile OS.</p>
                <ul class="platform-features">
                  <li><i class="fa-solid fa-check"></i> Material Design</li>
                  <li><i class="fa-solid fa-check"></i> Google Play Store ready</li>
                  <li><i class="fa-solid fa-check"></i> Push notifications</li>
                  <li><i class="fa-solid fa-check"></i> Offline capabilities</li>
                </ul>
              </div>
            </div>
            <div class="col-md-6">
              <div class="platform-card ios">
                <div class="platform-header">
                  <i class="fa-brands fa-apple"></i>
                  <h3>iOS</h3>
                </div>
                <p>Native iOS apps built with Swift for seamless integration with the Apple ecosystem and premium user experience.</p>
                <ul class="platform-features">
                  <li><i class="fa-solid fa-check"></i> Apple HIG compliance</li>
                  <li><i class="fa-solid fa-check"></i> App Store ready</li>
                  <li><i class="fa-solid fa-check"></i> Face/Touch ID</li>
                  <li><i class="fa-solid fa-check"></i> iCloud integration</li>
                </ul>
                <div class="ios-note">
                  <i class="fa-solid fa-info-circle"></i>
                  <span>iOS requires yearly renewal for App Store membership</span>
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
              <h2 class="section-title">Powerful Mobile <span class="gradient-text">Features</span></h2>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-md-4" v-for="(feature, index) in mobileFeatures" :key="index">
              <div class="mobile-feature-card">
                <div class="feature-icon">
                  <i :class="feature.icon"></i>
                </div>
                <h4>{{ feature.title }}</h4>
                <p>{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Cross-Platform Option -->
      <section class="cross-platform-section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="cross-platform-content">
                <span class="subtitle">Cost-Effective Option</span>
                <h2>Cross-Platform <span class="gradient-text">Development</span></h2>
                <p>Build once, deploy to both Android and iOS with our cross-platform solutions. Perfect for startups and businesses wanting to reach both audiences with a single codebase.</p>
                
                <div class="cross-platform-tech">
                  <h4>Technologies we use:</h4>
                  <div class="tech-icons">
                    <div class="tech-icon-item">
                      <i class="fa-solid fa-fire"></i>
                      <span>Flutter</span>
                    </div>
                    <div class="tech-icon-item">
                      <i class="fa-brands fa-react"></i>
                      <span>React Native</span>
                    </div>
                  </div>
                </div>
                
                <div class="comparison-box">
                  <div class="comparison-item">
                    <span class="badge">Single Codebase</span>
                    <span class="badge">Faster Development</span>
                    <span class="badge">Lower Cost</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="cross-platform-image">
                <div class="stars-container cross-stars">
                  <div class="star star-1"></div>
                  <div class="star star-2"></div>
                  <div class="star star-3"></div>
                  <div class="star star-4"></div>
                  <div class="star star-5"></div>
                </div>
                <div class="icon-wrapper-large">
                  <i class="fa-brands fa-android"></i>
                  <i class="fa-brands fa-apple"></i>
                  <i class="fa-solid fa-code"></i>
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
              <h2 class="section-title">Mobile App <span class="gradient-text">Pricing</span></h2>
              <p class="section-description">Choose the platform that fits your needs.</p>
            </div>
          </div>
  
          <div class="row mt-50">
            <div class="col-lg-10 m-auto">
              <div class="pricing-grid">
                <!-- Android Only -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <i class="fa-brands fa-android android-icon"></i>
                    <h3>Android Only</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">850,000</span>
                      <span class="period">/one-time</span>
                    </div>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Native Android development</li>
                      <li><i class="fa-solid fa-check"></i> Material Design UI</li>
                      <li><i class="fa-solid fa-check"></i> Push notifications</li>
                      <li><i class="fa-solid fa-check"></i> Google Play Store submission</li>
                      <li><i class="fa-solid fa-check"></i> 3 months support</li>
                      <li><i class="fa-solid fa-check"></i> API integration</li>
                    </ul>
                    <NuxtLink to="/contact?service=mobile-android" class="theme-btn13 full-width">
                      Start Android App
                    </NuxtLink>
                  </div>
                </div>
  
                <!-- iOS Only -->
                <div class="pricing-card popular">
                  <div class="popular-badge">Premium Experience</div>
                  <div class="pricing-header">
                    <i class="fa-brands fa-apple ios-icon"></i>
                    <h3>iOS Only</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">950,000</span>
                      <span class="period">/one-time</span>
                    </div>
                    <p class="price-note">+ iOS Developer Program ($99/year)</p>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Native iOS development</li>
                      <li><i class="fa-solid fa-check"></i> Apple HIG compliant</li>
                      <li><i class="fa-solid fa-check"></i> Face/Touch ID integration</li>
                      <li><i class="fa-solid fa-check"></i> App Store submission</li>
                      <li><i class="fa-solid fa-check"></i> 3 months support</li>
                      <li><i class="fa-solid fa-check"></i> iCloud integration</li>
                    </ul>
                    <NuxtLink to="/contact?service=mobile-ios" class="theme-btn13 full-width">
                      Start iOS App
                    </NuxtLink>
                  </div>
                </div>
  
                <!-- Both Platforms -->
                <div class="pricing-card">
                  <div class="pricing-header">
                    <div class="dual-icon">
                      <i class="fa-brands fa-android"></i>
                      <i class="fa-brands fa-apple"></i>
                    </div>
                    <h3>Both Platforms</h3>
                    <div class="price">
                      <span class="currency">₦</span>
                      <span class="amount">1,500,000</span>
                      <span class="period">/one-time</span>
                    </div>
                    <p class="price-note">+ iOS Developer Program ($99/year)</p>
                  </div>
                  <div class="pricing-body">
                    <ul class="pricing-features">
                      <li><i class="fa-solid fa-check"></i> Native for both platforms</li>
                      <li><i class="fa-solid fa-check"></i> Consistent UX/UI</li>
                      <li><i class="fa-solid fa-check"></i> Shared backend</li>
                      <li><i class="fa-solid fa-check"></i> Both app stores</li>
                      <li><i class="fa-solid fa-check"></i> 6 months support</li>
                      <li><i class="fa-solid fa-check"></i> Synchronized features</li>
                    </ul>
                    <NuxtLink to="/contact?service=mobile-both" class="theme-btn13 full-width">
                      Build Both
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
              <h2 class="section-title">Mobile App <span class="gradient-text">FAQs</span></h2>
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
            <h2>Ready to Go Mobile?</h2>
            <p>Let's build an app that your customers will love.</p>
            <NuxtLink to="/contact?service=mobile-app" class="theme-btn13">
              Start Your Mobile Journey <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
              <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
            </NuxtLink>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  useSeoMeta({
    title: 'Mobile Applications - Yemars Technology Nigeria',
    description: 'Professional mobile app development for Android and iOS. Native and cross-platform solutions for Nigerian businesses.',
  })
  
  const activeFaq = ref(0)
  
  const toggleFaq = (index) => {
    if (activeFaq.value === index) {
      activeFaq.value = null
    } else {
      activeFaq.value = index
    }
  }
  
  const mobileFeatures = [
    {
      icon: 'fa-solid fa-bell',
      title: 'Push Notifications',
      description: 'Engage users with timely updates and alerts.'
    },
    {
      icon: 'fa-solid fa-wifi',
      title: 'Offline Mode',
      description: 'Core functionality works without internet connection.'
    },
    {
      icon: 'fa-solid fa-camera',
      title: 'Camera Integration',
      description: 'Capture photos, scan documents, and more.'
    },
    {
      icon: 'fa-solid fa-location-dot',
      title: 'GPS & Maps',
      description: 'Location-based services and route planning.'
    },
    {
      icon: 'fa-solid fa-fingerprint',
      title: 'Biometric Auth',
      description: 'Secure login with fingerprint or face recognition.'
    },
    {
      icon: 'fa-solid fa-credit-card',
      title: 'Mobile Payments',
      description: 'In-app purchases and payment processing.'
    }
  ]
  
  const faqs = [
    {
      question: 'How long does mobile app development take?',
      answer: 'Typically 2-4 months for a single platform, 3-5 months for both platforms, depending on complexity.'
    },
    {
      question: 'Why does iOS require yearly renewal?',
      answer: 'Apple requires an annual $99 fee for the iOS Developer Program to publish apps on the App Store. This is paid directly to Apple.'
    },
    {
      question: 'Can I update the app myself?',
      answer: 'We provide admin panels for content updates. For feature updates, we offer maintenance packages.'
    },
    {
      question: 'Do you help with app store submission?',
      answer: 'Yes, we handle the entire submission process for both Google Play Store and Apple App Store.'
    }
  ]
  </script>
  
  <style scoped>
  .service-detail-page {
    overflow-x: hidden;
  }
  
  .mobile-hero {
    background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  }
  
  .service-hero {
    padding: 150px 0 80px;
    position: relative;
    overflow: hidden;
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
  
  .gradient-text {
    background: linear-gradient(45deg, #fff, #FFD700);
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
  
  .cross-stars .star,
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
  
  /* Platform Section */
  .platform-section {
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
  
  .platform-card {
    background: #f8f9ff;
    border-radius: 20px;
    padding: 40px 30px;
    height: 100%;
    transition: all 0.3s ease;
  }
  
  .platform-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0,85,255,0.1);
  }
  
  .platform-card.android {
    border-top: 4px solid #3DDC84;
  }
  
  .platform-card.ios {
    border-top: 4px solid #000000;
  }
  
  .platform-header {
    display: flex;
    align-items: center;
    gap: 15px;
    margin-bottom: 20px;
  }
  
  .platform-header i {
    font-size: 40px;
  }
  
  .platform-card.android .platform-header i {
    color: #3DDC84;
  }
  
  .platform-card.ios .platform-header i {
    color: #000000;
  }
  
  .platform-header h3 {
    font-size: 24px;
    font-weight: 700;
    color: #0A1F44;
    margin: 0;
  }
  
  .platform-card p {
    color: #666;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
  }
  
  .platform-features {
    list-style: none;
    padding: 0;
    margin: 0 0 20px;
  }
  
  .platform-features li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #4a5568;
  }
  
  .platform-features li i {
    color: #10b981;
    font-size: 14px;
  }
  
  .ios-note {
    background: #fff3cd;
    border-radius: 8px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    gap: 8px;
    color: #856404;
    font-size: 13px;
  }
  
  .ios-note i {
    color: #856404;
  }
  
  /* Features Section */
  .features-section {
    padding: 80px 0;
    background: #f8f9ff;
  }
  
  .mobile-feature-card {
    text-align: center;
    padding: 30px 20px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.03);
    transition: all 0.3s ease;
    height: 100%;
  }
  
  .mobile-feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0,85,255,0.1);
  }
  
  .mobile-feature-card .feature-icon {
    width: 70px;
    height: 70px;
    background: linear-gradient(45deg, #0055FF, #6A0DAD);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }
  
  .mobile-feature-card .feature-icon i {
    font-size: 30px;
    color: white;
  }
  
  .mobile-feature-card h4 {
    font-size: 18px;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 10px;
  }
  
  .mobile-feature-card p {
    color: #666;
    font-size: 14px;
    line-height: 1.6;
    margin: 0;
  }
  
  /* Cross-Platform Section */
  .cross-platform-section {
    padding: 80px 0;
    background: white;
  }
  
  .cross-platform-content .subtitle {
    display: inline-block;
    color: #0055FF;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 10px;
  }
  
  .cross-platform-content h2 {
    font-size: 40px;
    font-weight: 700;
    color: #0A1F44;
    margin-bottom: 20px;
  }
  
  .cross-platform-content p {
    color: #666;
    font-size: 16px;
    margin-bottom: 30px;
  }
  
  .cross-platform-tech {
    margin-bottom: 30px;
  }
  
  .cross-platform-tech h4 {
    font-size: 18px;
    font-weight: 600;
    color: #0A1F44;
    margin-bottom: 15px;
  }
  
  .tech-icons {
    display: flex;
    gap: 30px;
  }
  
  .tech-icon-item {
    text-align: center;
  }
  
  .tech-icon-item i {
    font-size: 40px;
    margin-bottom: 5px;
  }
  
  .tech-icon-item i.fa-fire {
    color: #02569B;
  }
  
  .tech-icon-item i.fa-react {
    color: #61DAFB;
  }
  
  .tech-icon-item span {
    font-size: 14px;
    color: #4a5568;
    display: block;
  }
  
  .comparison-box {
    background: #f8f9ff;
    border-radius: 10px;
    padding: 20px;
  }
  
  .comparison-item {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  
  .comparison-item .badge {
    background: linear-gradient(45deg, #0055FF, #6A0DAD);
    color: white;
    padding: 5px 15px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
  }
  
  .cross-platform-image {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
  }
  
  .cross-platform-image .icon-wrapper-large {
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
  
  .cross-platform-image .icon-wrapper-large i {
    font-size: 70px;
    color: white;
    animation: pulse 2s ease-in-out infinite;
  }
  
  .cross-platform-image .icon-wrapper-large i:nth-child(1) { animation-delay: 0s; }
  .cross-platform-image .icon-wrapper-large i:nth-child(2) { animation-delay: 0.3s; }
  .cross-platform-image .icon-wrapper-large i:nth-child(3) { animation-delay: 0.6s; }
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.1); opacity: 0.8; }
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
  
  .android-icon {
    color: #3DDC84;
    font-size: 40px;
    margin-bottom: 15px;
  }
  
  .ios-icon {
    color: #000000;
    font-size: 40px;
    margin-bottom: 15px;
  }
  
  .dual-icon {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-bottom: 15px;
  }
  
  .dual-icon i {
    font-size: 30px;
  }
  
  .dual-icon .fa-android {
    color: #3DDC84;
  }
  
  .dual-icon .fa-apple {
    color: #000000;
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
    font-size: 12px;
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
    
    .pricing-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }
    
    .pricing-card.popular {
      transform: scale(1);
    }
    
    .tech-icons {
      justify-content: center;
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
    
    .cross-platform-image .icon-wrapper-large {
      width: 220px;
      height: 220px;
    }
    
    .cross-platform-image .icon-wrapper-large i {
      font-size: 50px;
    }
    
    .platform-header {
      flex-direction: column;
      text-align: center;
    }
    
    .comparison-item {
      justify-content: center;
    }
    
    .tech-icons {
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
  }
  </style>