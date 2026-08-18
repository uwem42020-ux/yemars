<template>
  <div class="location-page">
    <!--==== HERO SECTION ====-->
    <section class="location-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <span class="hero-badge">
              <i class="fa-solid fa-location-dot"></i> Serving Oyo State
            </span>
            <h1 class="hero-title">
              Technology Company in <span class="gradient-text">Oyo</span>
            </h1>
            <p class="hero-description">
              Yemars Technology is a leading technology company in Oyo, Nigeria. We provide custom web development, mobile app development, graphic design, networking, printing, and digital marketing services to businesses across Oyo State.
            </p>
            <div class="hero-buttons">
              <NuxtLink to="/contact" class="btn-primary">
                Get a Free Quote
                <i class="fa-solid fa-arrow-right"></i>
              </NuxtLink>
              <a href="https://wa.me/2348038887589" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                <i class="fa-brands fa-whatsapp"></i> WhatsApp Us
              </a>
            </div>
            <div class="hero-trust">
              <span><i class="fa-solid fa-star"></i> 100+ Clients</span>
              <span><i class="fa-solid fa-star"></i> 8+ Years</span>
              <span><i class="fa-solid fa-star"></i> 200+ Projects</span>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Animated stars -->
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

    <!--==== MAIN CONTENT ====-->
    <section class="location-content">
      <div class="container">
        <div class="row">
          <!-- Left Column: Main Content -->
          <div class="col-lg-8">
            <!-- About Section -->
            <div class="content-block">
              <h2>Your Trusted Technology Partner in Oyo</h2>
              <p>
                Yemars Technology has been serving businesses in Oyo since 2015. We understand the unique needs of companies in Nigeria's largest southwestern state — from established enterprises in Ibadan to innovative startups in Ogbomosho and educational institutions in Oyo Town.
              </p>
              <p>
                As a full-service technology company in Oyo, we provide everything your business needs to succeed online under one roof. No need to hire multiple vendors — we handle your website, mobile app, branding, networking, and digital marketing.
              </p>
              <p>
                Our team of experienced developers, designers, and IT specialists delivers world-class solutions tailored to the Nigerian market. We combine international best practices with local market understanding.
              </p>
            </div>

            <!-- Services Section -->
            <div class="content-block">
              <h2>Our Services in Oyo</h2>
              <div class="services-grid">
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-code"></i>
                  </div>
                  <h4>Web Development</h4>
                  <p>Custom websites, corporate web apps, and e-commerce platforms built for performance.</p>
                  <NuxtLink to="/services/corporate-app">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-mobile-screen"></i>
                  </div>
                  <h4>Mobile App Development</h4>
                  <p>Native Android & iOS apps for your business. Cross-platform solutions available.</p>
                  <NuxtLink to="/services/mobile-applications">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </div>
                  <h4>E-Commerce Solutions</h4>
                  <p>Complete online stores with Paystack, Flutterwave, and Nigerian payment integration.</p>
                  <NuxtLink to="/services/ecommerce-systems">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-paint-brush"></i>
                  </div>
                  <h4>Graphic Design</h4>
                  <p>Logo design, brand identity, business cards, flyers, and complete branding packages.</p>
                  <NuxtLink to="/services/graphic-design">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-network-wired"></i>
                  </div>
                  <h4>Networking Services</h4>
                  <p>Office network setup, CCTV installation, server configuration, and IT infrastructure.</p>
                  <NuxtLink to="/services/networking">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-print"></i>
                  </div>
                  <h4>Printing Services</h4>
                  <p>Flyers, banners, business cards, T-shirts, mugs, and all your business printing needs.</p>
                  <NuxtLink to="/services/printing">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-hashtag"></i>
                  </div>
                  <h4>Social Media Management</h4>
                  <p>Content creation, community management, ad campaigns, and SEO optimization.</p>
                  <NuxtLink to="/services/social-media-management">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
                <div class="service-item">
                  <div class="service-icon">
                    <i class="fa-solid fa-credit-card"></i>
                  </div>
                  <h4>Fintech App Development</h4>
                  <p>Secure financial applications with payment processing, wallet systems, and bank integrations.</p>
                  <NuxtLink to="/services/fintech-app">Learn More <i class="fa-solid fa-arrow-right"></i></NuxtLink>
                </div>
              </div>
            </div>

            <!-- Why Choose Us -->
            <div class="content-block">
              <h2>Why Businesses in Oyo Choose Yemars Technology</h2>
              <div class="benefits-list">
                <div class="benefit-item">
                  <i class="fa-solid fa-check-circle"></i>
                  <div>
                    <h4>Serving Oyo Businesses</h4>
                    <p>We're physically located in River Park Estate, Abuja and serve clients across Oyo State. Visit us or we can come to your office for consultations.</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <i class="fa-solid fa-check-circle"></i>
                  <div>
                    <h4>Fast Response Time</h4>
                    <p>We respond to all inquiries within 2 hours during business hours. Your project never waits.</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <i class="fa-solid fa-check-circle"></i>
                  <div>
                    <h4>Transparent Naira Pricing</h4>
                    <p>No hidden fees. No dollar pricing. You know exactly what you're paying in Naira from day one.</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <i class="fa-solid fa-check-circle"></i>
                  <div>
                    <h4>Full-Service Agency</h4>
                    <p>Website, app, branding, networking, and printing — everything under one roof saves you time and money.</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <i class="fa-solid fa-check-circle"></i>
                  <div>
                    <h4>24/7 Support</h4>
                    <p>We provide ongoing support and maintenance for all our Oyo clients. We're always here when you need us.</p>
                  </div>
                </div>
                <div class="benefit-item">
                  <i class="fa-solid fa-check-circle"></i>
                  <div>
                    <h4>100+ Oyo Clients</h4>
                    <p>Trusted by over 100 businesses in Oyo and counting. Our reputation speaks for itself.</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Areas We Serve -->
            <div class="content-block">
              <h2>Areas We Serve in Oyo</h2>
              <p>
                We provide technology services to clients across the entire Oyo State. No matter where your business is located in Oyo, we can help.
              </p>
              <div class="areas-grid">
                <span class="area-tag"><i class="fa-solid fa-map-pin"></i> Ibadan</span>
                <span class="area-tag"><i class="fa-solid fa-map-pin"></i> Ogbomosho</span>
                <span class="area-tag"><i class="fa-solid fa-map-pin"></i> Oyo Town</span>
                <span class="area-tag"><i class="fa-solid fa-map-pin"></i> Iseyin</span>
                <span class="area-tag"><i class="fa-solid fa-map-pin"></i> Saki</span>
              </div>
            </div>

            <!-- FAQ Section -->
            <div class="content-block">
              <h2>Frequently Asked Questions</h2>
              <div class="faq-list">
                <div class="faq-item">
                  <h4>How much does website design cost in Oyo?</h4>
                  <p>Our website packages start from ₦550,000 for corporate websites and ₦1.2M for e-commerce solutions. Contact us for a custom quote based on your specific requirements.</p>
                </div>
                <div class="faq-item">
                  <h4>How long does it take to build a website?</h4>
                  <p>Most corporate websites take 2-4 weeks. E-commerce platforms take 4-8 weeks depending on complexity. Mobile apps typically take 6-12 weeks.</p>
                </div>
                <div class="faq-item">
                  <h4>Do you work with businesses outside Oyo?</h4>
                  <p>Yes! While our office is in Abuja, we serve clients across all 36 states in Nigeria and internationally. We manage projects remotely via video calls and online collaboration tools.</p>
                </div>
                <div class="faq-item">
                  <h4>Do you offer ongoing maintenance?</h4>
                  <p>Yes, we offer monthly maintenance packages starting from ₦50,000/month including updates, backups, security monitoring, and technical support.</p>
                </div>
                <div class="faq-item">
                  <h4>Can you visit our office in Oyo?</h4>
                  <p>Absolutely! We offer free initial consultations at your office or remotely. Our office is at D Pauli, Odili Cluster, River Park Estate, Abuja, and we regularly visit clients in Oyo.</p>
                </div>
              </div>
            </div>

            <!-- CTA Section -->
            <div class="content-block cta-box">
              <h2>Ready to Start Your Project in Oyo?</h2>
              <p>Get a free consultation and quote today. We'll discuss your project, understand your requirements, and provide a detailed proposal within 24 hours.</p>
              <div class="cta-buttons">
                <NuxtLink to="/contact" class="btn-primary">
                  Get a Free Quote
                  <i class="fa-solid fa-arrow-right"></i>
                </NuxtLink>
                <a href="https://wa.me/2348038887589" target="_blank" rel="noopener noreferrer" class="btn-whatsapp">
                  <i class="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <!-- Right Column: Sidebar -->
          <div class="col-lg-4">
            <div class="sidebar">
              <!-- Contact Card -->
              <div class="sidebar-card">
                <h3>Contact Our Oyo Office</h3>
                <div class="contact-detail">
                  <i class="fa-solid fa-location-dot"></i>
                  <div>
                    <strong>Address:</strong>
                    <p>D Pauli, Odili Cluster, River Park Estate, Abuja, Nigeria</p>
                  </div>
                </div>
                <div class="contact-detail">
                  <i class="fa-solid fa-phone"></i>
                  <div>
                    <strong>Phone:</strong>
                    <p><a href="tel:+2349014488190">+234 901 448 8190</a></p>
                  </div>
                </div>
                <div class="contact-detail">
                  <i class="fa-brands fa-whatsapp"></i>
                  <div>
                    <strong>WhatsApp:</strong>
                    <p><a href="https://wa.me/2348038887589" target="_blank" rel="noopener noreferrer">+234 803 888 7589</a></p>
                  </div>
                </div>
                <div class="contact-detail">
                  <i class="fa-solid fa-envelope"></i>
                  <div>
                    <strong>Email:</strong>
                    <p><a href="mailto:info@yemars.ng">info@yemars.ng</a></p>
                  </div>
                </div>
                <div class="contact-detail">
                  <i class="fa-solid fa-clock"></i>
                  <div>
                    <strong>Hours:</strong>
                    <p>Mon-Fri: 9AM - 6PM<br>Saturday: 10AM - 2PM</p>
                  </div>
                </div>
                <NuxtLink to="/contact" class="sidebar-btn">Get Free Consultation</NuxtLink>
              </div>

              <!-- Other Locations -->
              <div class="sidebar-card">
                <h3>We Also Serve</h3>
                <ul class="other-locations">
                  <li><NuxtLink to="/locations/lagos"><i class="fa-solid fa-arrow-right"></i> Technology Company in Lagos</NuxtLink></li>
                  <li><NuxtLink to="/locations/rivers"><i class="fa-solid fa-arrow-right"></i> Technology Company in Rivers</NuxtLink></li>
                  <li><NuxtLink to="/locations/kano"><i class="fa-solid fa-arrow-right"></i> Technology Company in Kano</NuxtLink></li>
                  <li><NuxtLink to="/locations/abuja"><i class="fa-solid fa-arrow-right"></i> Technology Company in Abuja</NuxtLink></li>
                  <li><NuxtLink to="/locations/nigeria"><i class="fa-solid fa-arrow-right"></i> Technology Company in Nigeria</NuxtLink></li>
                </ul>
              </div>

              <!-- Quick Services Links -->
              <div class="sidebar-card">
                <h3>Our Services</h3>
                <ul class="sidebar-services">
                  <li><NuxtLink to="/services/corporate-app">Corporate Web App</NuxtLink></li>
                  <li><NuxtLink to="/services/ecommerce-systems">E-Commerce Systems</NuxtLink></li>
                  <li><NuxtLink to="/services/premium-web-apps">Premium Web Apps</NuxtLink></li>
                  <li><NuxtLink to="/services/mobile-applications">Mobile Applications</NuxtLink></li>
                  <li><NuxtLink to="/services/app-maintenance">App Maintenance</NuxtLink></li>
                  <li><NuxtLink to="/services/fintech-app">Fintech App</NuxtLink></li>
                  <li><NuxtLink to="/services/graphic-design">Graphic Design</NuxtLink></li>
                  <li><NuxtLink to="/services/networking">Networking Services</NuxtLink></li>
                  <li><NuxtLink to="/services/printing">Printing Services</NuxtLink></li>
                  <li><NuxtLink to="/services/social-media-management">Social Media Management</NuxtLink></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useSeoMeta({
  title: 'Technology Company in Oyo | Yemars Technology Nigeria',
  description: 'Yemars Technology is a leading technology company in Oyo, Nigeria. Web development, mobile app development, graphic design, networking, printing & digital marketing for businesses in Oyo. Call +2349014488190.',
  ogTitle: 'Technology Company in Oyo | Yemars Technology Nigeria',
  ogDescription: 'Leading technology company in Oyo offering web development, mobile apps, graphic design, networking & digital marketing for Nigerian businesses.',
  ogImage: '/og-image-oyo.jpg',
  ogUrl: 'https://yemars.ng/locations/oyo',
  twitterTitle: 'Technology Company in Oyo | Yemars Technology',
  twitterDescription: 'Web development, mobile apps, graphic design, networking & digital marketing in Oyo, Nigeria.',
  twitterImage: '/twitter-image-oyo.jpg',
  keywords: 'technology company in Oyo, tech company Oyo, IT company Oyo, web development Oyo, app development Oyo, software company Oyo, digital marketing Oyo, networking services Oyo, graphic design Oyo, printing services Oyo, technology company Oyo Nigeria, best tech company in Oyo, web design company Oyo, mobile app developers Oyo'
})

// LocalBusiness Schema for Oyo
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        '@id': 'https://yemars.ng/locations/oyo#localbusiness',
        name: 'Yemars Technology Nigeria',
        description: 'Technology company in Oyo providing web development, mobile app development, graphic design, networking, printing, and digital marketing services.',
        url: 'https://yemars.ng/locations/oyo',
        telephone: '+2349014488190',
        email: 'info@yemars.ng',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'D Pauli, Odili Cluster, River Park Estate',
          addressLocality: 'Abuja',
          addressRegion: 'FCT',
          postalCode: '900211',
          addressCountry: 'NG'
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: '7.377535',
          longitude: '3.947040'
        },
        areaServed: [
          { '@type': 'City', name: 'Ibadan' },
          { '@type': 'AdministrativeArea', name: 'Oyo State' }
        ],
        knowsAbout: [
          'Web Development',
          'Mobile App Development',
          'E-Commerce Development',
          'Graphic Design',
          'Digital Marketing',
          'Networking Services',
          'Printing Services'
        ]
      })
    },
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://yemars.ng/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Locations',
            item: 'https://yemars.ng/locations'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Oyo',
            item: 'https://yemars.ng/locations/oyo'
          }
        ]
      })
    }
  ]
})
</script>

<style scoped>
.location-page {
  background: #f8f9ff;
  overflow-x: hidden;
}

/* Hero */
.location-hero {
  padding: 150px 0 80px;
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  position: relative;
  overflow: hidden;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  padding: 10px 25px;
  border-radius: 30px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  margin-bottom: 25px;
  border: 1px solid rgba(255,255,255,0.2);
}

.hero-badge i {
  color: #FFD700;
}

.hero-title {
  font-size: 55px;
  font-weight: 800;
  color: white;
  line-height: 1.2;
  margin-bottom: 20px;
}

.gradient-text {
  background: linear-gradient(45deg, #FFD700, #FFA500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-description {
  color: rgba(255,255,255,0.9);
  font-size: 18px;
  max-width: 700px;
  margin: 0 auto 30px;
  line-height: 1.8;
}

.hero-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0055FF;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(255,255,255,0.3);
}

.btn-whatsapp {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: #25D366;
  color: white;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 16px;
  transition: all 0.3s ease;
}

.btn-whatsapp:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(37, 211, 102, 0.3);
}

.hero-trust {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.hero-trust span {
  color: rgba(255,255,255,0.8);
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.hero-trust i {
  color: #FFD700;
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

.hero-stars .star-1 { top: 15%; left: 10%; }
.hero-stars .star-2 { top: 25%; left: 25%; width: 5px; height: 5px; animation-delay: 0.5s; }
.hero-stars .star-3 { top: 35%; left: 40%; animation-delay: 1s; }
.hero-stars .star-4 { top: 45%; left: 55%; width: 6px; height: 6px; animation-delay: 1.5s; }
.hero-stars .star-5 { top: 55%; left: 70%; animation-delay: 2s; }
.hero-stars .star-6 { top: 65%; left: 85%; animation-delay: 2.5s; }
.hero-stars .star-7 { top: 75%; left: 15%; width: 5px; height: 5px; animation-delay: 3s; }
.hero-stars .star-8 { top: 85%; left: 30%; animation-delay: 3.5s; }
.hero-stars .star-9 { top: 20%; left: 75%; width: 6px; height: 6px; animation-delay: 4s; }
.hero-stars .star-10 { top: 40%; left: 90%; animation-delay: 4.5s; }

@keyframes twinkle {
  0% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.5); }
  100% { opacity: 0.3; transform: scale(1); }
}

/* Content */
.location-content {
  padding: 80px 0;
}

.content-block {
  background: white;
  border-radius: 25px;
  padding: 40px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.content-block h2 {
  font-size: 32px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.content-block p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 15px;
}

/* Services Grid */
.services-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-top: 30px;
}

.service-item {
  background: #f8f9ff;
  border-radius: 15px;
  padding: 25px;
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.service-item:hover {
  transform: translateY(-5px);
  border-color: #0055FF;
  box-shadow: 0 15px 30px rgba(0,85,255,0.1);
}

.service-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
}

.service-icon i {
  font-size: 20px;
  color: white;
}

.service-item h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.service-item p {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.service-item a {
  color: #0055FF;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
}

/* Benefits */
.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 30px;
}

.benefit-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #f8f9ff;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.benefit-item:hover {
  transform: translateX(10px);
  background: #f0f2ff;
}

.benefit-item > i {
  font-size: 24px;
  color: #10b981;
  flex-shrink: 0;
  margin-top: 3px;
}

.benefit-item h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 5px;
}

.benefit-item p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* Areas */
.areas-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 20px;
}

.area-tag {
  background: #f0f2ff;
  color: #0055FF;
  padding: 8px 16px;
  border-radius: 30px;
  font-size: 14px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
}

.area-tag i {
  font-size: 12px;
}

/* FAQ */
.faq-list {
  margin-top: 20px;
}

.faq-item {
  border-bottom: 1px solid #eee;
  padding: 20px 0;
}

.faq-item:last-child {
  border-bottom: none;
}

.faq-item h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.faq-item p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

/* CTA Box */
.cta-box {
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  text-align: center;
}

.cta-box h2 {
  color: white;
}

.cta-box p {
  color: rgba(255,255,255,0.9);
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 30px;
}

/* Sidebar */
.sidebar {
  position: sticky;
  top: 100px;
}

.sidebar-card {
  background: white;
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 25px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.sidebar-card h3 {
  font-size: 20px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.contact-detail {
  display: flex;
  gap: 12px;
  margin-bottom: 15px;
}

.contact-detail i {
  color: #0055FF;
  font-size: 16px;
  margin-top: 3px;
  flex-shrink: 0;
  width: 20px;
}

.contact-detail strong {
  display: block;
  font-size: 13px;
  color: #0A1F44;
}

.contact-detail p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.contact-detail a {
  color: #0055FF;
  text-decoration: none;
}

.sidebar-btn {
  display: block;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  text-align: center;
  padding: 15px;
  border-radius: 10px;
  text-decoration: none;
  font-weight: 600;
  margin-top: 20px;
  transition: all 0.3s ease;
}

.sidebar-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 25px rgba(0,85,255,0.3);
}

.other-locations,
.sidebar-services {
  list-style: none;
  padding: 0;
  margin: 0;
}

.other-locations li,
.sidebar-services li {
  margin-bottom: 10px;
}

.other-locations a,
.sidebar-services a {
  color: #0055FF;
  text-decoration: none;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
}

.other-locations a:hover,
.sidebar-services a:hover {
  color: #6A0DAD;
  transform: translateX(5px);
}

.other-locations i {
  font-size: 12px;
}

/* Responsive */
@media (max-width: 991px) {
  .hero-title {
    font-size: 40px;
  }
  
  .content-block h2 {
    font-size: 28px;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .sidebar {
    position: static;
    margin-top: 30px;
  }
}

@media (max-width: 767px) {
  .location-hero {
    padding: 130px 0 60px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .content-block {
    padding: 25px 20px;
  }
  
  .content-block h2 {
    font-size: 24px;
  }
  
  .benefit-item {
    flex-direction: column;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .btn-primary,
  .btn-whatsapp {
    width: 100%;
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  
  .hero-trust {
    flex-direction: column;
    gap: 10px;
  }
}
</style>