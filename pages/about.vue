<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <h1 class="hero-title">
              <span class="gradient-text">About</span> Yemars Technology
            </h1>
            <p class="hero-description">
              Your complete technology partner in Abuja, delivering innovative digital solutions for Nigerian businesses since 2015.
            </p>
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

    <!-- Our Story Section -->
    <section class="story-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="story-content">
              <span class="section-subtitle">Our Story</span>
              <h2>Building Digital <span class="gradient-text">Excellence</span></h2>
              <p class="story-text">
                Yemars Technology Nigeria was founded with a simple mission: to provide Nigerian businesses with world-class digital solutions that are accessible, affordable, and effective. What started as a small web development shop in Abuja has grown into a full-service technology agency serving clients across Nigeria.
              </p>
              <p class="story-text">
                Today, we offer a comprehensive range of services including web and mobile development, graphic design, networking, printing, and social media management – all under one roof. Our team of passionate professionals combines technical expertise with local market understanding to deliver solutions that truly work for Nigerian businesses.
              </p>
              
              <div class="story-stats">
                <div class="stat-item">
                  <div class="stat-number">8+</div>
                  <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">100+</div>
                  <div class="stat-label">Happy Clients</div>
                </div>
                <div class="stat-item">
                  <div class="stat-number">200+</div>
                  <div class="stat-label">Projects Completed</div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="story-image">
              <div class="stars-container story-stars">
                <div class="star star-1"></div>
                <div class="star star-2"></div>
                <div class="star star-3"></div>
                <div class="star star-4"></div>
                <div class="star star-5"></div>
              </div>
              <div class="shape-bg"></div>
              <div class="image-wrapper">
                <!-- REPLACED with icon instead of missing image -->
                <div class="story-icon-large">
                  <i class="fa-solid fa-people-group" aria-hidden="true"></i>
                </div>
                <div class="experience-badge">
                  <i class="fa-solid fa-trophy" aria-hidden="true"></i>
                  <span>8+ Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision Section -->
    <section class="mission-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="mission-card">
              <div class="mission-icon">
                <i class="fa-solid fa-bullseye" aria-hidden="true"></i>
              </div>
              <h3>Our Mission</h3>
              <p>To empower Nigerian businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age. We strive to make enterprise-level technology accessible to businesses of all sizes.</p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="mission-card">
              <div class="mission-icon">
                <i class="fa-solid fa-eye" aria-hidden="true"></i>
              </div>
              <h3>Our Vision</h3>
              <p>To be Nigeria's most trusted technology partner, known for excellence, integrity, and innovation. We envision a future where every Nigerian business has the digital tools they need to compete globally.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="values-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Core <span class="gradient-text">Values</span></h2>
          <p>The principles that guide everything we do</p>
        </div>

        <div class="values-grid">
          <div v-for="(value, index) in coreValues" :key="index" class="value-card">
            <div class="value-icon">
              <i :class="value.icon" aria-hidden="true"></i>
            </div>
            <h3>{{ value.title }}</h3>
            <p>{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="why-us-section">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="why-us-content">
              <span class="section-subtitle">Why Choose Us</span>
              <h2>The Yemars <span class="gradient-text">Difference</span></h2>
              
              <div class="why-us-list">
                <div v-for="(item, index) in whyUsItems" :key="index" class="why-us-item">
                  <div class="why-us-icon">
                    <i :class="item.icon" aria-hidden="true"></i>
                  </div>
                  <div class="why-us-text">
                    <h4>{{ item.title }}</h4>
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="why-us-image">
              <div class="stars-container why-us-stars">
                <div class="star star-1"></div>
                <div class="star star-2"></div>
                <div class="star star-3"></div>
                <div class="star star-4"></div>
                <div class="star star-5"></div>
              </div>
              <div class="icon-wrapper-large">
                <i class="fa-solid fa-handshake" aria-hidden="true"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Team -->
    <section class="team-section">
      <div class="container">
        <div class="section-header">
          <h2>Meet Our <span class="gradient-text">Team</span></h2>
          <p>The passionate experts behind your success</p>
        </div>

        <div class="team-grid">
          <div v-for="(member, index) in teamMembers" :key="index" class="team-card">
            <div class="team-image">
              <!-- REPLACED with icon placeholders -->
              <div class="team-icon">
                <i class="fa-solid fa-user-tie" aria-hidden="true"></i>
              </div>
              <div class="team-social">
                <a href="#" aria-label="LinkedIn profile"><i class="fa-brands fa-linkedin-in" aria-hidden="true"></i></a>
                <a href="#" aria-label="Twitter profile"><i class="fa-brands fa-x-twitter" aria-hidden="true"></i></a>
              </div>
            </div>
            <div class="team-info">
              <h3>{{ member.name }}</h3>
              <p>{{ member.position }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-card">
          <h2>Ready to Work With Us?</h2>
          <p>Let's discuss your project and see how we can help your business grow.</p>
          <div class="cta-buttons">
            <a href="/#domain-section" class="cta-primary">
              Start Your Project
              <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
            </a>
            <NuxtLink to="/contact" class="cta-secondary">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// SEO Meta Tags
useSeoMeta({
  title: 'About Us - Yemars Technology Nigeria | Digital Solutions Partner in Abuja',
  description: 'Learn about Yemars Technology Nigeria, your complete technology partner in Abuja since 2015. Discover our mission, values, and the team of experts behind your digital success.',
  ogTitle: 'About Yemars Technology Nigeria - Your Trusted Technology Partner',
  ogDescription: '8+ years of excellence in delivering web development, app development, graphic design, and digital marketing solutions to Nigerian businesses.',
  ogImage: '/og-image-about.jpg',
  ogUrl: 'https://yemars.ng/about',
  twitterTitle: 'About Yemars Technology Nigeria | Digital Solutions Partner',
  twitterDescription: 'Meet the team behind Abuja\'s leading web development and digital solutions company. Learn our story, mission, and values.',
  twitterImage: '/twitter-image-about.jpg',
  keywords: 'about Yemars Technology, Abuja tech company, Nigerian web development agency, technology partners Nigeria, best web designers Abuja, digital solutions company Nigeria, web development team Abuja, Nigerian software company, IT company Abuja, technology experts Nigeria'
})

// Core Values Data
const coreValues = [
  {
    icon: 'fa-solid fa-medal',
    title: 'Excellence',
    description: 'We never compromise on quality. Every project receives our full attention and expertise.'
  },
  {
    icon: 'fa-solid fa-handshake',
    title: 'Integrity',
    description: 'We believe in honest communication, transparent pricing, and doing what\'s right for our clients.'
  },
  {
    icon: 'fa-solid fa-lightbulb',
    title: 'Innovation',
    description: 'We stay ahead of technology trends to bring you the most effective solutions.'
  },
  {
    icon: 'fa-solid fa-users',
    title: 'Collaboration',
    description: 'We work closely with you, treating your business goals as our own.'
  }
]

// Why Choose Us Items
const whyUsItems = [
  {
    icon: 'fa-solid fa-layer-group',
    title: 'Full-Service Agency',
    description: 'From development to design, networking to printing – we handle it all under one roof.'
  },
  {
    icon: 'fa-solid fa-naira-sign',
    title: 'Local Expertise',
    description: 'We understand the Nigerian market and deliver solutions that work for local businesses.'
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Fast Turnaround',
    description: 'Quick delivery without compromising on quality. We respect your deadlines.'
  },
  {
    icon: 'fa-solid fa-headset',
    title: '24/7 Support',
    description: 'We\'re always here when you need us, with dedicated support for all our services.'
  }
]

// Team Members Data
const teamMembers = [
  {
    name: 'Yemisi Martins',
    position: 'Founder & CEO',
  },
  {
    name: 'Chidi Okonkwo',
    position: 'Lead Developer',
  },
  {
    name: 'Aisha Bello',
    position: 'Creative Director',
  },
  {
    name: 'Emeka Nwosu',
    position: 'Networking Specialist',
  }
]
</script>

<style scoped>
/* Add these new styles for the icon placeholders */
.story-icon-large {
  width: 280px;
  height: 280px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: float 3s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(0,85,255,0.3);
}

.story-icon-large i {
  font-size: 120px;
  color: white;
}

.team-image {
  background: linear-gradient(135deg, #f8f9ff, #eef2f6);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 250px;
}

.team-icon i {
  font-size: 80px;
  color: #0055FF;
  opacity: 0.5;
}

/* Keep all your existing styles from before */
.about-page {
  overflow-x: hidden;
  background: white;
}

/* Hero Section */
.about-hero {
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
  margin: 0 auto;
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

/* Story Section */
.story-section {
  padding: 80px 0;
}

.section-subtitle {
  display: inline-block;
  color: #0055FF;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 10px;
}

.story-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 20px;
}

.story-text {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 20px;
}

.story-stats {
  display: flex;
  gap: 30px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: 800;
  color: #0055FF;
  line-height: 1;
  margin-bottom: 5px;
}

.stat-label {
  color: #666;
  font-size: 14px;
  font-weight: 500;
}

.story-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 400px;
}

.story-image .shape-bg {
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

.image-wrapper {
  position: relative;
  animation: float 3s ease-in-out infinite;
}

.experience-badge {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 15px 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: 0 10px 30px rgba(0,85,255,0.3);
}

.experience-badge i {
  font-size: 24px;
}

.experience-badge span {
  font-weight: 600;
}

/* Mission Section */
.mission-section {
  padding: 40px 0 80px;
}

.mission-card {
  background: #f8f9ff;
  border-radius: 20px;
  padding: 40px 30px;
  height: 100%;
  transition: all 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.1);
}

.mission-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
}

.mission-icon i {
  font-size: 30px;
  color: white;
}

.mission-card h3 {
  font-size: 24px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 15px;
}

.mission-card p {
  color: #666;
  font-size: 16px;
  line-height: 1.8;
  margin: 0;
}

/* Values Section */
.values-section {
  padding: 80px 0;
  background: #f8f9ff;
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
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.value-card {
  background: white;
  border-radius: 20px;
  padding: 30px 25px;
  text-align: center;
  transition: all 0.3s ease;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.1);
}

.value-icon {
  width: 70px;
  height: 70px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
}

.value-icon i {
  font-size: 28px;
  color: white;
}

.value-card h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.value-card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

/* Why Us Section */
.why-us-section {
  padding: 80px 0;
  background: white;
}

.why-us-content h2 {
  font-size: 40px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 30px;
}

.why-us-list {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.why-us-item {
  display: flex;
  gap: 20px;
  padding: 20px;
  background: #f8f9ff;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.why-us-item:hover {
  transform: translateX(10px);
  box-shadow: 0 10px 20px rgba(0,85,255,0.1);
}

.why-us-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.why-us-icon i {
  font-size: 20px;
  color: white;
}

.why-us-text h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 5px;
}

.why-us-text p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.why-us-image {
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

/* Team Section */
.team-section {
  padding: 80px 0;
  background: #f8f9ff;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 25px;
}

.team-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0,85,255,0.15);
}

.team-image {
  position: relative;
  overflow: hidden;
  aspect-ratio: 1 / 1;
  background: #f0f2f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.team-icon i {
  font-size: 80px;
  color: #0055FF;
  opacity: 0.5;
  transition: all 0.3s ease;
}

.team-card:hover .team-icon i {
  transform: scale(1.1);
  opacity: 0.8;
}

.team-social {
  position: absolute;
  bottom: -50px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
  transition: bottom 0.3s ease;
}

.team-card:hover .team-social {
  bottom: 0;
}

.team-social a {
  width: 35px;
  height: 35px;
  background: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #0055FF;
  text-decoration: none;
  transition: all 0.3s ease;
}

.team-social a:hover {
  background: #0055FF;
  color: white;
  transform: translateY(-3px);
}

.team-info {
  padding: 20px;
  text-align: center;
}

.team-info h3 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 5px;
}

.team-info p {
  color: #666;
  font-size: 14px;
  margin: 0;
}

/* CTA Section */
.cta-section {
  padding: 80px 0;
  background: white;
}

.cta-card {
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  border-radius: 30px;
  padding: 60px 40px;
  text-align: center;
  position: relative;
  overflow: hidden;
}

.cta-card h2 {
  font-size: 36px;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
  position: relative;
  z-index: 2;
}

.cta-card p {
  color: rgba(255,255,255,0.9);
  font-size: 18px;
  margin-bottom: 30px;
  position: relative;
  z-index: 2;
}

.cta-buttons {
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.cta-primary {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: white;
  color: #0055FF;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.cta-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255,255,255,0.3);
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
  color: white;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  border: 2px solid rgba(255,255,255,0.5);
  transition: all 0.3s ease;
}

.cta-secondary:hover {
  background: white;
  color: #0055FF;
  transform: translateY(-2px);
}

/* Stars for other sections */
.story-stars .star,
.why-us-stars .star {
  background: #0055FF;
  box-shadow: 0 0 10px rgba(0,85,255,0.8);
}

.stars-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

/* Animations */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

/* Responsive */
@media (max-width: 991px) {
  .hero-title {
    font-size: 40px;
  }
  
  .story-content h2,
  .section-header h2,
  .why-us-content h2 {
    font-size: 32px;
  }
  
  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .story-image {
    margin-top: 40px;
  }
  
  .why-us-image {
    margin-top: 40px;
  }
  
  .story-icon-large {
    width: 220px;
    height: 220px;
  }
  
  .story-icon-large i {
    font-size: 90px;
  }
}

@media (max-width: 767px) {
  .about-hero {
    padding: 130px 0 60px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .story-stats {
    flex-direction: column;
    gap: 20px;
  }
  
  .experience-badge {
    position: static;
    margin-top: 20px;
    justify-content: center;
  }
  
  .values-grid {
    grid-template-columns: 1fr;
  }
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .icon-wrapper-large {
    width: 200px;
    height: 200px;
  }
  
  .icon-wrapper-large i {
    font-size: 80px;
  }
  
  .story-icon-large {
    width: 180px;
    height: 180px;
  }
  
  .story-icon-large i {
    font-size: 70px;
  }
  
  .cta-card h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  
  .story-content h2,
  .section-header h2,
  .why-us-content h2 {
    font-size: 28px;
  }
  
  .why-us-item {
    flex-direction: column;
    text-align: center;
  }
  
  .why-us-icon {
    margin: 0 auto;
  }
  
  .team-card {
    max-width: 280px;
    margin: 0 auto;
  }
  
  .cta-card {
    padding: 40px 20px;
  }
  
  .cta-buttons {
    flex-direction: column;
  }
  
  .cta-primary,
  .cta-secondary {
    width: 100%;
    justify-content: center;
  }
}
</style>