<template>
  <div>
    <!--==== HERO AREA START ==== -->
    <div class="hero6">
      <div class="container">
        <div class="row align-items-center mobile-hero-layout">
          <div class="col-lg-5 col-12 mobile-text-first">
            <div class="main-heading6">
              <span class="sub-title" data-aos="fade-right" data-aos-duration="800">
                <i class="fa-solid fa-tag"></i> Limited Time: 20% Off First Project
              </span>
              
              <h1 class="text-anime-style-3 mobile-heading">
                <!-- Three lines exactly - each in its own split-line with nowrap -->
                <div class="split-line first-line" style="display: block; text-align: start; position: relative;">
                  <div style="position:relative;display:inline-block;">
                    <span style="position: relative; display: inline-block;">Digital Solutions for</span>
                  </div>
                </div>
                <div class="split-line second-line" style="display: block; text-align: start; position: relative;">
                  <div style="position:relative;display:inline-block;">
                    <span style="position: relative; display: inline-block;">Modern Nigerian</span>
                  </div>
                </div>
                <div class="split-line third-line" style="display: block; text-align: start; position: relative;">
                  <div style="position:relative;display:inline-block;">
                    <span style="position: relative; display: inline-block;">Businesses</span>
                  </div>
                </div>
              </h1>
              
              <p data-aos="fade-right" data-aos-duration="1000">
                Transform your business with custom web and mobile applications designed for performance, security, and growth in the Nigerian market.
              </p>
              
              <div class="buttons mt-30" data-aos="fade-right" data-aos-duration="1200">
                <!-- Scroll to domain section -->
                <a href="#domain-section" class="theme-btn13" @click.prevent="scrollToDomain">
                  Start Your Project <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                  <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                </a>
                <!-- Link to services-index page -->
                <NuxtLink to="/services" class="theme-btn14">
                  Explore Solutions <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                  <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                </NuxtLink>
              </div>
            </div>
          </div>
          
          <div class="col-lg-7 col-12 mobile-image-last">
            <div class="hero6-images">
              <!-- Subtle moving stars/dots background - WHITE STARS -->
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
                <div class="star star-11"></div>
                <div class="star star-12"></div>
                <div class="star star-13"></div>
                <div class="star star-14"></div>
                <div class="star star-15"></div>
              </div>
              <div class="bg-shape round-circle"></div>
              <div class="image">
                <img src="/img/banner.png" 
                     alt="Digital solutions for Nigerian businesses - Yemars Technology web development and app development services" 
                     class="banner-img"
                     width="600"
                     height="400"
                     loading="eager">
                <i class="fa-solid fa-code hero-icon"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==== HERO AREA END ==== -->

    <!--==== DOMAIN AREA START ==== -->
    <div id="domain-section" class="domain6">
      <div class="container">
        <div class="row bg-area">
          <div class="col-lg-10 m-auto col-12">
            <div class="heading6 text-center">
              <h2 class="text-anime-style-3 spaced-heading">
                <div class="split-line" style="display: block; text-align: center; position: relative;">
                  <div style="position:relative;display:inline-block;"><span>Secure</span></div>
                  <div style="position:relative;display:inline-block;"><span>Your</span></div>
                  <div style="position:relative;display:inline-block;"><span>Domain</span></div>
                  <div style="position:relative;display:inline-block;"><span>Today</span></div>
                </div>
              </h2>
              <p class="mt-16">Begin your digital journey with the perfect domain. Every website package includes complete setup!</p>
            </div>
            
            <div class="domain6-form">
              <form @submit.prevent="checkDomain">
                <div class="hero6-form-area">
                  <input 
                    type="search" 
                    v-model="domainSearch" 
                    placeholder="e.g., yourbusiness.com.ng"
                    :disabled="checking"
                    aria-label="Search for domain availability"
                  >
                  <div class="button">
                    <button type="submit" class="theme-btn16" :disabled="checking">
                      {{ checking ? 'Checking...' : 'Search' }}
                    </button>
                  </div>
                </div>

                <div class="hero6-select-list">
                  <ul class="controls">
                    <li class="text">Popular Domains:</li>
                    <li class="select1" @click="selectDomain('com')">.com ₦23,500</li>
                    <li class="select1" @click="selectDomain('com.ng')">.com.ng ₦6,500</li>
                    <li class="select1" @click="selectDomain('ng')">.ng ₦13,500</li>
                    <li class="select1" @click="selectDomain('name.ng')">.name.ng ₦500</li>
                  </ul>
                </div>
              </form>
            </div>

            <!-- Domain Result Section -->
            <div v-if="domainResult" class="domain-result mt-40">
              <div v-if="domainResult.available" class="available-result">
                <div class="success-badge">
                  <i class="fa-solid fa-check-circle"></i>
                  <span>{{ domainResult.message }}</span>
                </div>

                <div class="packages-grid">
                  <!-- Starter Package -->
                  <div class="package-card" 
                       :class="{ 'selected': selectedPackage === 'starter' }"
                       @click="selectedPackage = 'starter'">
                    <div class="package-header">
                      <h4>Starter Website</h4>
                      <div class="package-price">
                        <small>from</small>
                        <span class="price">₦{{ domainResult.packages.starter.total.toLocaleString() }}</span>
                      </div>
                    </div>
                    <div class="package-features">
                      <ul>
                        <li v-for="feature in domainResult.packages.starter.features" :key="feature">
                          <i class="fa-solid fa-check"></i> {{ feature }}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Professional Package -->
                  <div class="package-card popular" 
                       :class="{ 'selected': selectedPackage === 'professional' }"
                       @click="selectedPackage = 'professional'">
                    <div class="popular-badge">Most Popular</div>
                    <div class="package-header">
                      <h4>Professional Website</h4>
                      <div class="package-price">
                        <small>from</small>
                        <span class="price">₦{{ domainResult.packages.professional.total.toLocaleString() }}</span>
                      </div>
                    </div>
                    <div class="package-features">
                      <ul>
                        <li v-for="feature in domainResult.packages.professional.features" :key="feature">
                          <i class="fa-solid fa-check"></i> {{ feature }}
                        </li>
                      </ul>
                    </div>
                  </div>

                  <!-- Enterprise Package -->
                  <div class="package-card" 
                       :class="{ 'selected': selectedPackage === 'enterprise' }"
                       @click="selectedPackage = 'enterprise'">
                    <div class="package-header">
                      <h4>Enterprise Solution</h4>
                      <div class="package-price">
                        <small>from</small>
                        <span class="price">₦{{ domainResult.packages.enterprise.total.toLocaleString() }}</span>
                      </div>
                    </div>
                    <div class="package-features">
                      <ul>
                        <li v-for="feature in domainResult.packages.enterprise.features" :key="feature">
                          <i class="fa-solid fa-check"></i> {{ feature }}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="action-buttons">
                  <button 
                    class="theme-btn13 get-started-btn"
                    @click="openLeadModal"
                    :disabled="!selectedPackage"
                  >
                    Get Started With This Domain
                    <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </button>
                  <button class="theme-btn14" @click="resetSearch">
                    Search Another Domain
                  </button>
                </div>
              </div>

              <div v-else class="unavailable-result">
                <div class="error-badge">
                  <i class="fa-solid fa-times-circle"></i>
                  <span>{{ domainResult.message }}</span>
                </div>
                <div class="suggestions">
                  <p>Try these alternatives:</p>
                  <div class="suggestion-tags">
                    <span @click="trySuggestion(domainResult.domain.split('.')[0] + '.com.ng')">.com.ng</span>
                    <span @click="trySuggestion(domainResult.domain.split('.')[0] + '.ng')">.ng</span>
                    <span @click="trySuggestion(domainResult.domain.split('.')[0] + '.com')">.com</span>
                    <span @click="trySuggestion(domainResult.domain.split('.')[0] + 's.com')">Add 's'</span>
                    <span @click="trySuggestion('get' + domainResult.domain)">Add 'get'</span>
                  </div>
                </div>
                <button class="theme-btn14 mt-20" @click="resetSearch">
                  Try Another Domain
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==== DOMAIN AREA END ==== -->

    <!--==== ABOUT AREA START ==== -->
    <div class="about6 sp">
      <div class="container">
        <div class="row align-items-center mobile-about-layout">
          <div class="col-lg-6 col-12">
            <div class="about6-images">
              <!-- Added stars container here with company colors -->
              <div class="stars-container about-stars company-stars">
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
                <div class="star star-11"></div>
                <div class="star star-12"></div>
              </div>
              <div class="shape-bg round-circle"></div>
              <div class="image animate1 reveal overflow-hidden">
                <img src="/img/launch.png" 
                     alt="Launch your digital presence with Yemars Technology - Web development and app development services in Nigeria" 
                     class="launch-img"
                     width="500"
                     height="400"
                     loading="lazy">
              </div>
            </div>
          </div>
          
          <div class="col-lg-6 col-12">
            <div class="heading6">
              <h2 class="text-anime-style-3 spaced-heading about-heading">
                <!-- Two lines exactly - "LaunchYourDigitalPresence" and "withConfidence" -->
                <div class="split-line first-about-line" style="display: block; text-align: start; position: relative;">
                  <div style="position:relative;display:inline-block;"><span>Launch</span></div>
                  <div style="position:relative;display:inline-block;"><span>Your</span></div>
                  <div style="position:relative;display:inline-block;"><span>Digital</span></div>
                  <div style="position:relative;display:inline-block;"><span>Presence</span></div>
                </div>
                <div class="split-line second-about-line" style="display: block; text-align: start; position: relative;">
                  <div style="position:relative;display:inline-block;"><span>with</span></div>
                  <div style="position:relative;display:inline-block;"><span>Confidence</span></div>
                </div>
              </h2>
              <p class="mt-16 about-text" data-aos="fade-left" data-aos-duration="1000">
                At Yemars Technology, we build digital solutions that drive real business results. From custom web applications to mobile apps, our team delivers exceptional quality tailored to Nigerian businesses.
              </p>
              <p class="mt-16 about-text" data-aos="fade-left" data-aos-duration="1100">
                We combine technical expertise with local market understanding to create platforms that engage your audience and streamline your operations.
              </p>
              <div class="button mt-30" data-aos="fade-left" data-aos-duration="1300">
                <NuxtLink to="/about" class="theme-btn13">
                  Learn More <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                  <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==== ABOUT AREA END ==== -->

    <!--==== ALL SERVICES SECTION START ==== -->
    <div class="all-services sp">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 m-auto text-center col-12">
            <div class="heading6">
              <span class="section-subtitle">What We Do</span>
              <h2 class="text-anime-style-3 spaced-heading">
                <div class="split-line" style="display: block; text-align: center; position: relative;">
                  <div style="position:relative;display:inline-block;"><span>Complete</span></div>
                  <div style="position:relative;display:inline-block;"><span>Digital</span></div>
                  <div style="position:relative;display:inline-block;"><span>Solutions</span></div>
                </div>
                <div class="split-line" style="display: block; text-align: center; position: relative;">
                  <div style="position:relative;display:inline-block;"><span>for</span></div>
                  <div style="position:relative;display:inline-block;"><span>Your</span></div>
                  <div style="position:relative;display:inline-block;"><span>Business</span></div>
                </div>
              </h2>
              <p class="mt-16">One company, endless possibilities. From development to design, networking to printing.</p>
            </div>
          </div>
        </div>

        <!-- Service Categories Tabs -->
        <div class="service-tabs mt-50">
          <div class="tabs-nav">
            <button 
              v-for="(tab, index) in serviceTabs" 
              :key="index"
              @click="activeTab = index"
              class="tab-btn"
              :class="{ active: activeTab === index }"
              :aria-label="`View ${tab.name} services`"
            >
              <i :class="tab.icon"></i>
              <span>{{ tab.name }}</span>
            </button>
          </div>

          <!-- App & Web Development Tab -->
          <div v-show="activeTab === 0" class="tab-pane">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="tab-content-left">
                  <div class="tab-icon-large">
                    <i class="fa-solid fa-code"></i>
                  </div>
                  <h3>App & Web <span class="gradient-text">Development</span></h3>
                  <p>Custom web and mobile applications built for performance, security, and growth. From corporate portals to e-commerce platforms.</p>
                  <NuxtLink to="/services" class="theme-btn13">
                    View All Web Services <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="tab-services-grid">
                  <NuxtLink v-for="service in webServices" :key="service.title" :to="service.link" class="tab-service-card">
                    <div class="tab-service-icon" :class="service.colorClass">
                      <i :class="service.icon"></i>
                    </div>
                    <h4>{{ service.title }}</h4>
                    <span class="service-price">{{ service.price }}</span>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <!-- Graphic Design Tab -->
          <div v-show="activeTab === 1" class="tab-pane">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="tab-content-left">
                  <div class="tab-icon-large">
                    <i class="fa-solid fa-paint-brush"></i>
                  </div>
                  <h3>Graphic <span class="gradient-text">Design</span></h3>
                  <p>Professional design services that bring your brand to life. From logos to complete brand identity.</p>
                  <NuxtLink to="/services/graphic-design" class="theme-btn13">
                    View All Design Services <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="tab-items-grid">
                  <div v-for="item in graphicDesignItems" :key="item" class="tab-item-card">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Networking Tab -->
          <div v-show="activeTab === 2" class="tab-pane">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="tab-content-left">
                  <div class="tab-icon-large">
                    <i class="fa-solid fa-network-wired"></i>
                  </div>
                  <h3>Networking <span class="gradient-text">Services</span></h3>
                  <p>Reliable networking solutions for your office. LAN, wireless, security, and complete IT infrastructure.</p>
                  <NuxtLink to="/services/networking" class="theme-btn13">
                    View All Networking <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="tab-items-grid">
                  <div v-for="item in networkingItems" :key="item" class="tab-item-card">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Printing Tab -->
          <div v-show="activeTab === 3" class="tab-pane">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="tab-content-left">
                  <div class="tab-icon-large">
                    <i class="fa-solid fa-print"></i>
                  </div>
                  <h3>Printing <span class="gradient-text">Services</span></h3>
                  <p>High-quality printing for all your business needs. From flyers to large format banners.</p>
                  <NuxtLink to="/services/printing" class="theme-btn13">
                    View All Printing <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="tab-items-grid">
                  <div v-for="item in printingItems" :key="item" class="tab-item-card">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Media Tab -->
          <div v-show="activeTab === 4" class="tab-pane">
            <div class="row align-items-center">
              <div class="col-lg-5">
                <div class="tab-content-left">
                  <div class="tab-icon-large">
                    <i class="fa-solid fa-hashtag"></i>
                  </div>
                  <h3>Social Media <span class="gradient-text">Management</span></h3>
                  <p>Grow your online presence with professional social media management, content creation, and SEO.</p>
                  <NuxtLink to="/services/social-media-management" class="theme-btn13">
                    View All Social Services <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                    <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                  </NuxtLink>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="tab-items-grid">
                  <div v-for="item in socialItems" :key="item" class="tab-item-card">
                    <i class="fa-solid fa-check-circle"></i>
                    <span>{{ item }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==== ALL SERVICES SECTION END ==== -->

    <!--==== WHY CHOOSE US START ==== -->
    <div class="choose6 sp">
      <div class="container">
        <div class="row mobile-choose-layout">
          <div class="col-lg-6 col-12">
            <div class="heading6">
              <span class="section-subtitle">Why Partner With Us</span>
              <h2 class="text-anime-style-3 spaced-heading">
                <div class="split-line" style="display: block; text-align: start; position: relative;">
                  <div style="position:relative;display:inline-block;"><span>Your</span></div>
                  <div style="position:relative;display:inline-block;"><span>Complete</span></div>
                  <div style="position:relative;display:inline-block;"><span>Technology</span></div>
                  <div style="position:relative;display:inline-block;"><span>Partner</span></div>
                </div>
              </h2>
              <p class="mt-16 choose-text" data-aos="fade-right" data-aos-duration="800">
                When you work with Yemars Technology, you gain a technology partner committed to your success. From concept to launch and beyond, we deliver solutions that exceed expectations.
              </p>
              <div class="row" data-aos="fade-right" data-aos-duration="1000">
                <div class="col-md-6 col-12">
                  <div class="choose6-icon-list">
                    <ul>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> 99.99% Uptime Guarantee</li>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> 24/7 Nigerian Support</li>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> Daily Automated Backups</li>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> 100+ Happy Clients</li>
                    </ul>
                  </div>
                </div>
                <div class="col-md-6 col-12">
                  <div class="choose6-icon-list">
                    <ul>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> Scalable Architecture</li>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> Local Market Expertise</li>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> Transparent Naira Pricing</li>
                      <li><span class="check"><i class="fa-solid fa-check"></i></span> Full-Service Agency</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="button mt-30" data-aos="fade-right" data-aos-duration="1200">
                <!-- Link to domain section -->
                <a href="#domain-section" class="theme-btn13" @click.prevent="scrollToDomain">
                  Start Your Project <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                  <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                </a>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-12">
            <div class="choose6-images">
              <!-- Added stars container here with company colors -->
              <div class="stars-container choose-stars company-stars">
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
                <div class="star star-11"></div>
                <div class="star star-12"></div>
              </div>
              <div class="shape-bg round-circle"></div>
              <div class="image overflow-hidden reveal">
                <img src="/img/choose.png" 
                     alt="Why choose Yemars Technology - Nigerian web development company with local expertise" 
                     class="choose-img"
                     width="500"
                     height="400"
                     loading="lazy">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==== WHY CHOOSE US END ==== -->

    <!--==== QUICK SERVICE LINKS START ==== -->
    <div class="quick-links sp">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 m-auto">
            <div class="quick-links-grid">
              <NuxtLink to="/services/corporate-app" class="quick-link-card">
                <i class="fa-solid fa-building"></i>
                <span>Corporate Web</span>
              </NuxtLink>
              <NuxtLink to="/services/ecommerce-systems" class="quick-link-card">
                <i class="fa-solid fa-cart-shopping"></i>
                <span>E-Commerce</span>
              </NuxtLink>
              <NuxtLink to="/services/mobile-applications" class="quick-link-card">
                <i class="fa-solid fa-mobile-screen"></i>
                <span>Mobile Apps</span>
              </NuxtLink>
              <NuxtLink to="/services/graphic-design" class="quick-link-card">
                <i class="fa-solid fa-paint-brush"></i>
                <span>Graphic Design</span>
              </NuxtLink>
              <NuxtLink to="/services/networking" class="quick-link-card">
                <i class="fa-solid fa-network-wired"></i>
                <span>Networking</span>
              </NuxtLink>
              <NuxtLink to="/services/printing" class="quick-link-card">
                <i class="fa-solid fa-print"></i>
                <span>Printing</span>
              </NuxtLink>
              <NuxtLink to="/services/social-media-management" class="quick-link-card">
                <i class="fa-solid fa-hashtag"></i>
                <span>Social Media</span>
              </NuxtLink>
              <NuxtLink to="/services/app-maintenance" class="quick-link-card">
                <i class="fa-solid fa-gear"></i>
                <span>Maintenance</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--==== QUICK SERVICE LINKS END ==== -->

    <!-- Lead Modal -->
    <LeadModal 
      :show="showModal"
      :domain-data="domainResult"
      :selected-package="selectedPackageObj"
      @close="showModal = false"
      @submitted="handleLeadSubmitted"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import LeadModal from '~/components/LeadModal.vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Yemars Technology Nigeria - Web Development & Digital Solutions in Abuja',
  description: 'Professional web development, app development, graphic design, and digital marketing services in Abuja, Nigeria. Custom solutions for Nigerian businesses with transparent Naira pricing.',
  ogTitle: 'Yemars Technology Nigeria - Your Complete Technology Partner',
  ogDescription: 'From web development to printing, we handle all your digital needs under one roof in Abuja. Get started with your website project today.',
  ogImage: '/og-image-home.jpg',
  ogUrl: 'https://yemars.ng',
  twitterTitle: 'Yemars Technology Nigeria - Web Development & Digital Solutions',
  twitterDescription: 'Professional web development, app development, and digital marketing services in Abuja, Nigeria.',
  twitterImage: '/twitter-image-home.jpg',
  keywords: 'web development companies in Nigeria, best web designers in Abuja, website design cost Nigeria, how to create an app in Nigeria, ecommerce website design Nigeria, digital marketing agency Abuja, graphic design services Nigeria, web design company Abuja, mobile app developers Nigeria, website maintenance services Nigeria'
})

// Scroll to top on page load/reload
onMounted(() => {
  window.scrollTo(0, 0)
  
  // Check URL hash for domain section
  if (window.location.hash === '#domain-section') {
    setTimeout(() => {
      scrollToDomain()
    }, 100)
  }
  
  // Initialize AOS if needed
  if (window.AOS) {
    window.AOS.init({
      duration: 400,
      easing: 'ease-in-out',
      once: false
    })
  }
})

// Scroll to domain section function
const scrollToDomain = () => {
  const domainSection = document.getElementById('domain-section')
  if (domainSection) {
    domainSection.scrollIntoView({ behavior: 'smooth' })
  }
}

// Service tabs
const activeTab = ref(0)

const serviceTabs = [
  { name: 'App & Web', icon: 'fa-solid fa-code' },
  { name: 'Graphic Design', icon: 'fa-solid fa-paint-brush' },
  { name: 'Networking', icon: 'fa-solid fa-network-wired' },
  { name: 'Printing', icon: 'fa-solid fa-print' },
  { name: 'Social Media', icon: 'fa-solid fa-hashtag' }
]

// Web Development Services
const webServices = [
  {
    icon: 'fa-solid fa-building',
    title: 'Corporate Web App',
    price: '₦550k',
    link: '/services/corporate-app',
    colorClass: 'corporate-color'
  },
  {
    icon: 'fa-solid fa-cart-shopping',
    title: 'E-Commerce',
    price: '₦1.2M',
    link: '/services/ecommerce-systems',
    colorClass: 'ecommerce-color'
  },
  {
    icon: 'fa-solid fa-crown',
    title: 'Premium Web',
    price: '₦2M',
    link: '/services/premium-web-apps',
    colorClass: 'premium-color'
  },
  {
    icon: 'fa-solid fa-mobile-screen',
    title: 'Mobile Apps',
    price: '₦850k',
    link: '/services/mobile-applications',
    colorClass: 'mobile-color'
  },
  {
    icon: 'fa-solid fa-gear',
    title: 'Maintenance',
    price: '₦50k/mo',
    link: '/services/app-maintenance',
    colorClass: 'maintenance-color'
  },
  {
    icon: 'fa-solid fa-credit-card',
    title: 'Fintech',
    price: 'Custom',
    link: '/services/fintech-app',
    colorClass: 'fintech-color'
  }
]

// Graphic Design Items
const graphicDesignItems = [
  'Logo Design', 'Business Cards', 'Brochures', 'Flyers', 
  'Banners', 'Posters', 'Music Cover Art', 'Brand Identity',
  'Social Media Graphics', 'Packaging Design'
]

// Networking Items
const networkingItems = [
  'Office Networking', 'Wireless Setup', 'Workstation Installation',
  'Server Configuration', 'CCTV Installation', 'Network Security',
  'Structured Cabling', 'VPN Setup', 'Firewall Configuration'
]

// Printing Items
const printingItems = [
  'Flyers & Handbills', 'Flex Banners', 'Roll-up Stands',
  'Business Cards', 'Posters', 'Brochures',
  'T-shirts Printing', 'Mugs & Merchandise', 'Calendars'
]

// Social Media Items
const socialItems = [
  'Content Creation', 'SEO Optimization', 'Community Management',
  'Ad Campaigns', 'Analytics & Reports', 'Strategy Planning',
  'Hashtag Strategy', 'Influencer Outreach', 'Brand Voice'
]

// Domain search state
const domainSearch = ref('')
const checking = ref(false)
const domainResult = ref(null)
const selectedPackage = ref('professional')
const showModal = ref(false)

// Package mapping
const selectedPackageObj = computed(() => {
  const packages = {
    starter: { type: 'starter', name: 'Starter Website' },
    professional: { type: 'professional', name: 'Professional Website' },
    enterprise: { type: 'enterprise', name: 'Enterprise Solution' }
  }
  return packages[selectedPackage.value] || packages.professional
})

// Check domain availability
const checkDomain = async () => {
  if (!domainSearch.value) {
    alert('Please enter a domain name')
    return
  }

  checking.value = true
  domainResult.value = null

  try {
    const response = await $fetch('/api/check-domain', {
      method: 'POST',
      body: { domain: domainSearch.value }
    })

    if (response.success) {
      domainResult.value = response
      selectedPackage.value = 'professional'
    }
  } catch (error) {
    console.error('Domain check error:', error)
    alert(error.data?.message || 'Failed to check domain. Please try again.')
  } finally {
    checking.value = false
  }
}

// Quick select popular domains
const selectDomain = (extension) => {
  const name = domainSearch.value.split('.')[0] || 'yourbusiness'
  domainSearch.value = `${name}.${extension}`
  checkDomain()
}

// Try suggestion
const trySuggestion = (domain) => {
  domainSearch.value = domain
  checkDomain()
}

// Reset search
const resetSearch = () => {
  domainResult.value = null
  domainSearch.value = ''
  selectedPackage.value = 'professional'
}

// Open lead modal
const openLeadModal = () => {
  if (!selectedPackage.value) {
    alert('Please select a package')
    return
  }
  showModal.value = true
}

// Handle lead submission
const handleLeadSubmitted = (data) => {
  console.log('Lead submitted:', data)
  // You can track this in your analytics
}
</script>

<style scoped>
/* Hero Area */
.hero6 {
  padding: 150px 0 80px;
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  position: relative;
  overflow: hidden;
}

.hero6::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle at 30% 50%, rgba(255,255,255,0.1) 0%, transparent 50%);
}

.main-heading6 {
  position: relative;
  z-index: 2;
}

.main-heading6 .sub-title {
  display: inline-flex;
  align-items: center;
  gap: 10px;
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

.main-heading6 .sub-title i {
  font-size: 14px;
  color: #FFD700;
}

.main-heading6 h1 {
  font-size: 55px;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;
}

.main-heading6 h1 .split-line {
  margin-bottom: 5px;
}

.main-heading6 h1 .split-line span {
  background: linear-gradient(45deg, #fff, #f0f0f0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: inline-block;
}

/* Force hero heading lines to stay together */
.main-heading6 h1 .split-line.first-line,
.main-heading6 h1 .split-line.second-line,
.main-heading6 h1 .split-line.third-line {
  white-space: nowrap;
  width: 100%;
}

.main-heading6 h1 .split-line.first-line span,
.main-heading6 h1 .split-line.second-line span,
.main-heading6 h1 .split-line.third-line span {
  white-space: nowrap;
  display: inline-block;
}

.main-heading6 p {
  color: rgba(255,255,255,0.8);
  font-size: 18px;
  margin-bottom: 30px;
  max-width: 500px;
}

.buttons {
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

.hero6-images {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.hero6-images .bg-shape {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 500px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  filter: blur(50px);
  z-index: -1;
}

.hero6-images .image {
  animation: float 3s ease-in-out infinite;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
}

.banner-img {
  max-width: 100%;
  height: auto;
  position: relative;
  z-index: 5;
}

.hero-icon {
  font-size: 250px;
  color: rgba(255,255,255,0.2);
  filter: drop-shadow(0 20px 30px rgba(0,0,0,0.2));
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
}

/* Stars/Dots Animation */
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
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(0, 212, 255, 0.5);
}

.company-stars .star {
  background: #0055FF;
  box-shadow: 0 0 10px rgba(0, 85, 255, 0.8), 0 0 20px rgba(106, 13, 173, 0.5);
}

.about-stars, .choose-stars {
  z-index: 1;
}

.star {
  position: absolute;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  opacity: 0.7;
  animation: twinkle 4s ease-in-out infinite;
}

.hero-stars .star-1 { top: 15%; left: 10%; animation-delay: 0s; width: 3px; height: 3px; }
.hero-stars .star-2 { top: 25%; left: 25%; animation-delay: 0.5s; width: 5px; height: 5px; }
.hero-stars .star-3 { top: 35%; left: 40%; animation-delay: 1s; width: 4px; height: 4px; }
.hero-stars .star-4 { top: 45%; left: 55%; animation-delay: 1.5s; width: 6px; height: 6px; }
.hero-stars .star-5 { top: 55%; left: 70%; animation-delay: 2s; width: 3px; height: 3px; }
.hero-stars .star-6 { top: 65%; left: 85%; animation-delay: 2.5s; width: 4px; height: 4px; }
.hero-stars .star-7 { top: 75%; left: 15%; animation-delay: 3s; width: 5px; height: 5px; }
.hero-stars .star-8 { top: 85%; left: 30%; animation-delay: 3.5s; width: 3px; height: 3px; }
.hero-stars .star-9 { top: 20%; left: 75%; animation-delay: 4s; width: 6px; height: 6px; }
.hero-stars .star-10 { top: 40%; left: 90%; animation-delay: 4.5s; width: 4px; height: 4px; }
.hero-stars .star-11 { top: 60%; left: 5%; animation-delay: 5s; width: 5px; height: 5px; }
.hero-stars .star-12 { top: 80%; left: 50%; animation-delay: 5.5s; width: 3px; height: 3px; }
.hero-stars .star-13 { top: 10%; left: 60%; animation-delay: 6s; width: 4px; height: 4px; }
.hero-stars .star-14 { top: 30%; left: 80%; animation-delay: 6.5s; width: 5px; height: 5px; }
.hero-stars .star-15 { top: 50%; left: 20%; animation-delay: 7s; width: 6px; height: 6px; }

.about-stars .star-1 { top: 15%; left: 10%; animation-delay: 0s; width: 3px; height: 3px; }
.about-stars .star-2 { top: 25%; left: 25%; animation-delay: 0.5s; width: 5px; height: 5px; }
.about-stars .star-3 { top: 35%; left: 40%; animation-delay: 1s; width: 4px; height: 4px; }
.about-stars .star-4 { top: 45%; left: 55%; animation-delay: 1.5s; width: 6px; height: 6px; }
.about-stars .star-5 { top: 55%; left: 70%; animation-delay: 2s; width: 3px; height: 3px; }
.about-stars .star-6 { top: 65%; left: 85%; animation-delay: 2.5s; width: 4px; height: 4px; }
.about-stars .star-7 { top: 75%; left: 15%; animation-delay: 3s; width: 5px; height: 5px; }
.about-stars .star-8 { top: 85%; left: 30%; animation-delay: 3.5s; width: 3px; height: 3px; }
.about-stars .star-9 { top: 20%; left: 75%; animation-delay: 4s; width: 6px; height: 6px; }
.about-stars .star-10 { top: 40%; left: 90%; animation-delay: 4.5s; width: 4px; height: 4px; }
.about-stars .star-11 { top: 60%; left: 5%; animation-delay: 5s; width: 5px; height: 5px; }
.about-stars .star-12 { top: 80%; left: 50%; animation-delay: 5.5s; width: 3px; height: 3px; }

.choose-stars .star-1 { top: 10%; left: 20%; animation-delay: 0.2s; width: 4px; height: 4px; }
.choose-stars .star-2 { top: 20%; left: 35%; animation-delay: 0.7s; width: 5px; height: 5px; }
.choose-stars .star-3 { top: 30%; left: 50%; animation-delay: 1.2s; width: 3px; height: 3px; }
.choose-stars .star-4 { top: 40%; left: 65%; animation-delay: 1.7s; width: 6px; height: 6px; }
.choose-stars .star-5 { top: 50%; left: 80%; animation-delay: 2.2s; width: 4px; height: 4px; }
.choose-stars .star-6 { top: 60%; left: 25%; animation-delay: 2.7s; width: 5px; height: 5px; }
.choose-stars .star-7 { top: 70%; left: 40%; animation-delay: 3.2s; width: 3px; height: 3px; }
.choose-stars .star-8 { top: 80%; left: 55%; animation-delay: 3.7s; width: 4px; height: 4px; }
.choose-stars .star-9 { top: 25%; left: 70%; animation-delay: 4.2s; width: 5px; height: 5px; }
.choose-stars .star-10 { top: 45%; left: 85%; animation-delay: 4.7s; width: 6px; height: 6px; }
.choose-stars .star-11 { top: 65%; left: 10%; animation-delay: 5.2s; width: 3px; height: 3px; }
.choose-stars .star-12 { top: 85%; left: 45%; animation-delay: 5.7s; width: 4px; height: 4px; }

@keyframes twinkle {
  0% { opacity: 0.3; transform: scale(1) translateY(0); }
  50% { opacity: 1; transform: scale(1.5) translateY(-5px); }
  100% { opacity: 0.3; transform: scale(1) translateY(0); }
}

/* Domain Area */
.domain6 {
  padding: 80px 0;
  background: white;
}

.domain6 .bg-area {
  background: #f8f9ff;
  border-radius: 20px;
  padding: 60px 40px;
  position: relative;
  overflow: hidden;
}

.domain6 .bg-area::before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 300px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  opacity: 0.05;
  border-radius: 50%;
  transform: translate(150px, -150px);
}

.heading6 h2 {
  font-size: 45px;
  font-weight: 700;
  color: #0A1F44;
  line-height: 1.2;
}

.heading6 h2 .split-line span {
  background: linear-gradient(45deg, #0A1F44, #0055FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.section-subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.spaced-heading .split-line {
  margin-bottom: 5px;
}

.spaced-heading .split-line:last-child {
  margin-bottom: 0;
}

.spaced-heading .split-line div {
  margin-right: 8px;
}

/* About heading - force two lines */
.about-heading .first-about-line,
.about-heading .second-about-line {
  white-space: nowrap;
  width: 100%;
}

.about-heading .first-about-line span,
.about-heading .second-about-line span {
  display: inline-block;
}

.about-heading .first-about-line div,
.about-heading .second-about-line div {
  margin-right: 5px;
}

.heading6 p {
  color: #666;
  font-size: 16px;
}

.domain6-form {
  max-width: 700px;
  margin: 40px auto 0;
}

.hero6-form-area {
  display: flex;
  gap: 10px;
  background: white;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
}

.hero6-form-area input {
  flex: 1;
  padding: 15px 20px;
  border: none;
  outline: none;
  font-size: 16px;
  border-radius: 8px;
}

.hero6-form-area input:focus {
  box-shadow: 0 0 0 3px rgba(0, 85, 255, 0.1);
}

.theme-btn16 {
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  border: none;
  padding: 15px 40px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-btn16:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0,85,255,0.3);
}

.theme-btn16:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.hero6-select-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  flex-wrap: wrap;
  gap: 15px;
}

.hero6-select-list ul {
  display: flex;
  gap: 20px;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}

.hero6-select-list ul li.text {
  color: #333;
  font-weight: 600;
}

.hero6-select-list ul li.select1 {
  color: #0055FF;
  cursor: pointer;
  transition: color 0.3s ease;
}

.hero6-select-list ul li.select1:hover {
  color: #6A0DAD;
}

/* Domain Result Styles */
.domain-result {
  margin-top: 40px;
  animation: fadeInUp 0.5s ease;
}

.success-badge {
  background: linear-gradient(135deg, #10b981, #059669);
  color: white;
  padding: 16px 24px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2);
}

.success-badge i {
  font-size: 24px;
}

.error-badge {
  background: linear-gradient(135deg, #ef4444, #dc2626);
  color: white;
  padding: 16px 24px;
  border-radius: 50px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}

.packages-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin: 30px 0;
}

.package-card {
  background: white;
  border-radius: 20px;
  padding: 30px 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  border: 2px solid transparent;
}

.package-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.1);
}

.package-card.selected {
  border-color: #0055FF;
  box-shadow: 0 20px 40px rgba(0, 85, 255, 0.15);
}

.package-card.popular {
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

.package-header {
  text-align: center;
  margin-bottom: 20px;
}

.package-header h4 {
  font-size: 20px;
  color: #0A1F44;
  margin-bottom: 15px;
  font-weight: 700;
}

.package-price small {
  display: block;
  color: #999;
  font-size: 12px;
  margin-bottom: 5px;
}

.package-price .price {
  font-size: 26px;
  font-weight: 800;
  color: #0055FF;
}

.package-features ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.package-features li {
  margin-bottom: 10px;
  color: #4a5568;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
}

.package-features li i {
  color: #10b981;
  font-size: 12px;
}

.action-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 30px;
}

.get-started-btn {
  min-width: 250px;
}

.get-started-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.suggestions {
  margin: 20px 0;
}

.suggestions p {
  color: #4a5568;
  margin-bottom: 10px;
}

.suggestion-tags {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.suggestion-tags span {
  background: #f0f2f5;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #0055FF;
}

.suggestion-tags span:hover {
  background: #0055FF;
  color: white;
}

/* About Area */
.about6 {
  padding: 80px 0;
  background: white;
  position: relative;
  overflow: hidden;
}

.about6-images {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.about6-images .shape-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  opacity: 0.1;
  border-radius: 50%;
  filter: blur(50px);
  z-index: -1;
}

.about6-images .image {
  animation: float 3s ease-in-out infinite;
  position: relative;
  z-index: 2;
}

.launch-img {
  max-width: 100%;
  height: auto;
}

/* All Services Section */
.all-services {
  padding: 80px 0;
  background: #f8f9ff;
}

.service-tabs {
  background: white;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.tabs-nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.tab-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 25px;
  border: none;
  background: #f8f9ff;
  border-radius: 50px;
  font-weight: 600;
  color: #666;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 15px;
}

.tab-btn i {
  font-size: 16px;
}

.tab-btn:hover {
  background: #0055FF;
  color: white;
  transform: translateY(-2px);
}

.tab-btn.active {
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  box-shadow: 0 10px 20px rgba(0,85,255,0.2);
}

.tab-content-left {
  padding-right: 30px;
}

.tab-icon-large {
  width: 80px;
  height: 80px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.tab-icon-large i {
  font-size: 35px;
  color: white;
}

.tab-content-left h3 {
  font-size: 32px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 15px;
}

.tab-content-left p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 25px;
}

.tab-services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.tab-service-card {
  background: #f8f9ff;
  border-radius: 15px;
  padding: 20px;
  text-decoration: none;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.tab-service-card:hover {
  transform: translateY(-3px);
  border-color: #0055FF;
  box-shadow: 0 10px 20px rgba(0,85,255,0.1);
}

.tab-service-icon {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 20px;
  color: white;
}

.corporate-color { background: #0055FF; }
.ecommerce-color { background: #6A0DAD; }
.premium-color { background: #0A1F44; }
.mobile-color { background: #10b981; }
.maintenance-color { background: #f59e0b; }
.fintech-color { background: #ef4444; }

.tab-service-card h4 {
  font-size: 15px;
  font-weight: 600;
  color: #0A1F44;
  margin-bottom: 5px;
}

.service-price {
  font-size: 13px;
  color: #0055FF;
  font-weight: 600;
}

.tab-items-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.tab-item-card {
  background: #f8f9ff;
  border-radius: 12px;
  padding: 15px;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
}

.tab-item-card:hover {
  background: #0055FF;
  transform: translateX(5px);
}

.tab-item-card:hover i,
.tab-item-card:hover span {
  color: white;
}

.tab-item-card i {
  color: #10b981;
  font-size: 14px;
}

.tab-item-card span {
  color: #4a5568;
  font-size: 14px;
  font-weight: 500;
}

/* Choose Area */
.choose6 {
  padding: 80px 0;
  background: white;
  position: relative;
  overflow: hidden;
}

.choose6-icon-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.choose6-icon-list ul li {
  margin-bottom: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 10px;
}

.choose6-icon-list ul li .check {
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
}

.choose6-images {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.choose6-images .shape-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  opacity: 0.1;
  border-radius: 50%;
  filter: blur(50px);
  z-index: -1;
}

.choose6-images .image {
  animation: float 3s ease-in-out infinite;
  position: relative;
  z-index: 2;
}

.choose-img {
  max-width: 100%;
  height: auto;
}

/* Quick Links */
.quick-links {
  padding: 40px 0 80px;
  background: #f8f9ff;
}

.quick-links-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.quick-link-card {
  background: white;
  border-radius: 15px;
  padding: 20px;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0,0,0,0.03);
  border: 2px solid transparent;
}

.quick-link-card:hover {
  transform: translateY(-3px);
  border-color: #0055FF;
  box-shadow: 0 10px 25px rgba(0,85,255,0.1);
}

.quick-link-card i {
  font-size: 24px;
  color: #0055FF;
  transition: all 0.3s ease;
}

.quick-link-card:hover i {
  transform: scale(1.1);
  color: #6A0DAD;
}

.quick-link-card span {
  color: #0A1F44;
  font-weight: 600;
  font-size: 15px;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 991px) {
  .hero6 {
    padding: 140px 0 60px;
  }
  
  .main-heading6 h1 {
    font-size: 40px;
  }
  
  .container {
    padding-left: 20px !important;
    padding-right: 20px !important;
    max-width: 100% !important;
  }
  
  .col-12 {
    width: 100% !important;
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }
  
  .main-heading6 .sub-title {
    margin-top: 40px;
    margin-bottom: 20px;
  }
  
  .main-heading6 p {
    font-size: 16px;
  }
  
  .mobile-hero-layout {
    display: flex;
    flex-direction: column;
  }
  
  .mobile-text-first {
    order: 1;
  }
  
  .mobile-image-last {
    order: 2;
  }
  
  .hero6-images {
    margin-top: 40px;
  }
  
  .packages-grid {
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .package-card.popular {
    transform: scale(1);
  }
  
  .action-buttons {
    flex-direction: column;
  }
  
  .get-started-btn {
    min-width: auto;
  }
  
  .service-tabs {
    padding: 30px 20px;
  }
  
  .tabs-nav {
    flex-wrap: wrap;
  }
  
  .tab-btn {
    padding: 10px 20px;
    font-size: 14px;
  }
  
  .tab-content-left {
    padding-right: 0;
    margin-bottom: 30px;
  }
  
  .tab-services-grid,
  .tab-items-grid,
  .quick-links-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .mobile-about-layout,
  .mobile-choose-layout {
    display: flex;
    flex-direction: column-reverse;
  }
  
  .about6-images,
  .choose6-images {
    margin: 40px 0;
  }
}

@media (max-width: 767px) {
  .hero6 {
    padding: 130px 0 40px;
  }
  
  .main-heading6 .sub-title {
    margin-top: 30px;
  }
  
  .main-heading6 h1 {
    font-size: 32px;
  }
  
  /* Force hero heading lines to stay together on mobile */
  .main-heading6 h1 .split-line.first-line,
  .main-heading6 h1 .split-line.second-line,
  .main-heading6 h1 .split-line.third-line {
    white-space: nowrap;
    width: 100%;
  }
  
  .main-heading6 h1 .split-line.first-line span,
  .main-heading6 h1 .split-line.second-line span,
  .main-heading6 h1 .split-line.third-line span {
    white-space: nowrap;
    display: inline-block;
  }
  
  /* Force about heading to stay as two lines on mobile */
  .about-heading .first-about-line,
  .about-heading .second-about-line {
    white-space: nowrap;
    width: 100%;
  }
  
  .buttons {
    flex-direction: row;
    gap: 10px;
  }
  
  .buttons a {
    padding: 12px 20px;
    font-size: 14px;
    flex: 1;
    white-space: nowrap;
  }
  
  .hero-icon {
    font-size: 180px;
  }
  
  .hero6-images .bg-shape {
    width: 350px;
    height: 350px;
  }
  
  .package-card {
    padding: 20px;
  }
  
  .package-header h4 {
    font-size: 18px;
  }
  
  .package-price .price {
    font-size: 22px;
  }
  
  .tab-content-left h3 {
    font-size: 28px;
  }
  
  .tab-services-grid,
  .tab-items-grid,
  .quick-links-grid {
    grid-template-columns: 1fr;
  }
  
  .quick-link-card {
    padding: 15px;
  }
  
  .quick-link-card i {
    font-size: 20px;
  }
  
  .quick-link-card span {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .main-heading6 .sub-title {
    margin-top: 25px;
  }
  
  .main-heading6 h1 {
    font-size: 28px;
  }
  
  .buttons a {
    padding: 10px 12px;
    font-size: 12px;
  }
  
  .hero-icon {
    font-size: 150px;
  }
  
  .hero6-images .bg-shape {
    width: 280px;
    height: 280px;
  }
  
  .heading6 h2 {
    font-size: 26px;
  }
  
  .tabs-nav {
    gap: 8px;
  }
  
  .tab-btn {
    padding: 8px 15px;
    font-size: 12px;
  }
  
  .tab-btn i {
    font-size: 14px;
  }
  
  .tab-content-left h3 {
    font-size: 24px;
  }
  
  .tab-content-left p {
    font-size: 14px;
  }
  
  .tab-service-card {
    padding: 15px;
  }
  
  .tab-service-card h4 {
    font-size: 14px;
  }
  
  .tab-item-card {
    padding: 12px;
  }
  
  .tab-item-card span {
    font-size: 13px;
  }
  
  .quick-link-card {
    flex-direction: column;
    text-align: center;
  }
  
  .quick-link-card i {
    margin-bottom: 5px;
  }
}
</style>