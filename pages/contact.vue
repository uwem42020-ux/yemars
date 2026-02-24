<template>
  <div class="contact-page">
    <!-- Hero Section -->
    <section class="contact-hero">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 m-auto text-center">
            <h1 class="hero-title">
              <span class="gradient-text">Get in Touch</span>
              <br>Let's Build Something Amazing
            </h1>
            <p class="hero-description">
              Have a project in mind? We'd love to hear about it. Reach out and we'll respond within 24 hours.
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

    <!-- Contact Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info">
            <div class="info-card">
              <h2>Contact Information</h2>
              <p class="info-subtitle">Reach out through any of these channels</p>
              
              <!-- Office Location -->
              <div class="info-item">
                <div class="info-icon">
                  <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                </div>
                <div class="info-content">
                  <h3>Visit Our Office</h3>
                  <p>Shop E35 Murg Plaza, Area 10 UTC<br>Abuja, Nigeria</p>
                </div>
              </div>
              
              <!-- Email -->
              <div class="info-item">
                <div class="info-icon">
                  <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="info-content">
                  <h3>Email Us</h3>
                  <p>
                    <a href="mailto:info@yemars.ng">info@yemars.ng</a>
                  </p>
                </div>
              </div>
              
              <!-- Business Hours -->
              <div class="info-item">
                <div class="info-icon">
                  <i class="fa-solid fa-clock" aria-hidden="true"></i>
                </div>
                <div class="info-content">
                  <h3>Business Hours</h3>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 2:00 PM<br>Sunday: Closed</p>
                </div>
              </div>
              
              <!-- Response Time Badge -->
              <div class="response-badge">
                <i class="fa-solid fa-bolt" aria-hidden="true"></i>
                <span>Typically responds within 2 hours during business hours</span>
              </div>
              
              <!-- Map Link -->
              <a href="https://maps.google.com/?q=Shop+E35+Murg+Plaza+Area+10+Abuja" target="_blank" rel="noopener noreferrer" class="map-link">
                <i class="fa-solid fa-map" aria-hidden="true"></i>
                Open in Google Maps
              </a>
            </div>
            
            <!-- Social Links -->
            <div class="social-card">
              <h3>Follow Us</h3>
              <div class="social-links">
                <a href="#" class="social-link facebook" aria-label="Facebook">
                  <i class="fa-brands fa-facebook-f" aria-hidden="true"></i>
                </a>
                <a href="#" class="social-link instagram" aria-label="Instagram">
                  <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                </a>
                <a href="#" class="social-link linkedin" aria-label="LinkedIn">
                  <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                </a>
                <a href="#" class="social-link twitter" aria-label="Twitter">
                  <i class="fa-brands fa-x-twitter" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <div class="form-card">
              <h2>Send us a Message</h2>
              <p class="form-subtitle">We'll get back to you within 24 hours</p>
              
              <form @submit.prevent="submitForm" class="contact-form">
                <!-- Name Field -->
                <div class="form-group" :class="{ 'error': errors.name }">
                  <label for="name">
                    Full Name <span class="required">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="name"
                    v-model="form.name" 
                    @blur="validateField('name')"
                    placeholder="John Doe"
                    :disabled="submitting"
                    aria-required="true"
                  >
                  <span v-if="errors.name" class="error-text" role="alert">{{ errors.name }}</span>
                </div>

                <!-- Email Field -->
                <div class="form-group" :class="{ 'error': errors.email }">
                  <label for="email">
                    Email Address <span class="required">*</span>
                  </label>
                  <input 
                    type="email" 
                    id="email"
                    v-model="form.email" 
                    @blur="validateField('email')"
                    placeholder="john@example.com"
                    :disabled="submitting"
                    aria-required="true"
                  >
                  <span v-if="errors.email" class="error-text" role="alert">{{ errors.email }}</span>
                </div>

                <!-- Phone Field -->
                <div class="form-group" :class="{ 'error': errors.phone }">
                  <label for="phone">
                    Phone Number
                  </label>
                  <input 
                    type="tel" 
                    id="phone"
                    v-model="form.phone" 
                    @blur="validateField('phone')"
                    placeholder="0812 345 6789"
                    :disabled="submitting"
                  >
                  <span v-if="errors.phone" class="error-text" role="alert">{{ errors.phone }}</span>
                </div>

                <!-- Service Selection -->
                <div class="form-group">
                  <label for="service">Service Interested In</label>
                  <select 
                    id="service"
                    v-model="form.service" 
                    :disabled="submitting"
                  >
                    <option value="">Select a service</option>
                    <option v-for="service in services" :key="service" :value="service">
                      {{ service }}
                    </option>
                  </select>
                </div>

                <!-- Budget Range -->
                <div class="form-group">
                  <label for="budget">Budget Range (₦)</label>
                  <select 
                    id="budget"
                    v-model="form.budget" 
                    :disabled="submitting"
                  >
                    <option value="">Select budget</option>
                    <option value="150000">₦150,000 - ₦350,000</option>
                    <option value="350000">₦350,000 - ₦600,000</option>
                    <option value="600000">₦600,000 - ₦1,000,000</option>
                    <option value="1000000">₦1,000,000+</option>
                  </select>
                </div>

                <!-- Message Field -->
                <div class="form-group" :class="{ 'error': errors.message }">
                  <label for="message">
                    Message <span class="required">*</span>
                  </label>
                  <textarea 
                    id="message"
                    v-model="form.message" 
                    @blur="validateField('message')"
                    rows="5" 
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                    :disabled="submitting"
                    aria-required="true"
                  ></textarea>
                  <span v-if="errors.message" class="error-text" role="alert">{{ errors.message }}</span>
                </div>

                <!-- Privacy Notice -->
                <div class="privacy-notice">
                  <i class="fa-solid fa-lock" aria-hidden="true"></i>
                  <span>Your information is secure and will only be used to respond to your inquiry.</span>
                </div>

                <!-- Error Message -->
                <div v-if="formError" class="error-message" role="alert">
                  <i class="fa-solid fa-exclamation-circle" aria-hidden="true"></i>
                  <p>{{ formError }}</p>
                </div>

                <!-- Success Message -->
                <div v-if="success" class="success-message" role="status">
                  <i class="fa-solid fa-circle-check" aria-hidden="true"></i>
                  <div>
                    <h4>Thank You!</h4>
                    <p>Your message has been sent successfully. We'll get back to you within 24 hours.</p>
                  </div>
                </div>

                <!-- Submit Button -->
                <button 
                  type="submit" 
                  class="submit-btn"
                  :disabled="submitting || success"
                  :aria-label="submitting ? 'Sending message...' : 'Send message'"
                >
                  <span v-if="!submitting && !success">
                    Send Message <i class="fa-solid fa-paper-plane" aria-hidden="true"></i>
                  </span>
                  <span v-else-if="submitting">
                    <i class="fa-solid fa-spinner fa-spin" aria-hidden="true"></i> Sending...
                  </span>
                  <span v-else>
                    <i class="fa-solid fa-check" aria-hidden="true"></i> Sent Successfully
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="container">
        <div class="map-card">
          <div class="map-header">
            <h2>Find Us in Abuja</h2>
            <p>Shop E35 Murg Plaza, Area 10 UTC, Abuja</p>
          </div>
          <div class="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.836598528591!2d7.495388!3d9.064478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0b2b2b2b2b2b%3A0x2b2b2b2b2b2b2b2b!2sArea%2010%2C%20Abuja!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
              width="100%" 
              height="450" 
              style="border:0;" 
              allowfullscreen="" 
              loading="lazy"
              title="Yemars Technology Location in Abuja"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
          <div class="map-directions">
            <a href="https://maps.google.com/?q=Shop+E35+Murg+Plaza+Area+10+Abuja" target="_blank" rel="noopener noreferrer" class="directions-btn">
              <i class="fa-solid fa-location-arrow" aria-hidden="true"></i>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
      <div class="container">
        <div class="section-header">
          <h2>Quick <span class="gradient-text">Answers</span></h2>
          <p>Common questions about working with us</p>
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
          <h2>Ready to Start Your Project?</h2>
          <p>Let's discuss how we can help bring your ideas to life</p>
          <NuxtLink to="/services" class="cta-btn">
            Explore Our Services
            <i class="fa-solid fa-arrow-right" aria-hidden="true"></i>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

// SEO Meta Tags
useSeoMeta({
  title: 'Contact Us - Yemars Technology Nigeria | Web Development & Digital Solutions Abuja',
  description: 'Contact Yemars Technology in Abuja for web development, app development, graphic design, and digital marketing services. Visit our office at Shop E35 Murg Plaza, Area 10 UTC, Abuja. Email: info@yemars.ng',
  ogTitle: 'Contact Yemars Technology Nigeria - Get in Touch',
  ogDescription: 'Reach out to Abuja\'s leading web development company. We respond within 24 hours. Visit our office or send us a message.',
  ogImage: '/og-image-contact.jpg',
  ogUrl: 'https://yemars.ng/contact',
  twitterTitle: 'Contact Yemars Technology Nigeria',
  twitterDescription: 'Get in touch with our team for your web development, app development, or digital marketing project.',
  twitterImage: '/twitter-image-contact.jpg',
  keywords: 'contact web developers Abuja, tech company contact Nigeria, Yemars Technology address, web design company Abuja contact, app development Nigeria contact, digital marketing agency Abuja phone, graphic design services Nigeria email, IT company Abuja location, web development Nigeria contact, Abuja tech support'
})

const route = useRoute()
const submitting = ref(false)
const success = ref(false)
const formError = ref('')
const activeFaq = ref(0)

const toggleFaq = (index) => {
  if (activeFaq.value === index) {
    activeFaq.value = null
  } else {
    activeFaq.value = index
  }
}

// Set service from URL query parameter on mount
onMounted(() => {
  if (route.query.package) {
    form.service = route.query.package
  }
  if (route.query.service) {
    form.service = route.query.service
  }
})

const services = [
  'Corporate Web App',
  'E-Commerce Systems',
  'Premium Web Apps',
  'Mobile Applications',
  'App Maintenance',
  'Fintech App',
  'Graphic Design',
  'Networking Services',
  'Printing Services',
  'Social Media Management'
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: ''
})

const errors = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.value.name = !form.name ? 'Name is required' : 
        form.name.length < 2 ? 'Name must be at least 2 characters' : ''
      break
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      errors.value.email = !form.email ? 'Email is required' :
        !emailRegex.test(form.email) ? 'Please enter a valid email address' : ''
      break
    case 'phone':
      if (form.phone && form.phone.length > 0) {
        const phoneRegex = /^(\+234|0)[7-9][0-1]\d{8}$/
        errors.value.phone = !phoneRegex.test(form.phone.replace(/\s/g, '')) ? 
          'Please enter a valid Nigerian phone number' : ''
      } else {
        errors.value.phone = '' // Phone is optional
      }
      break
    case 'message':
      errors.value.message = !form.message ? 'Message is required' :
        form.message.length < 10 ? 'Message must be at least 10 characters' : ''
      break
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('message')
  validateField('phone')
  
  return !errors.value.name && !errors.value.email && !errors.value.message
}

const submitForm = async () => {
  if (!validateForm()) return

  submitting.value = true
  formError.value = ''

  try {
    // Simulate API call - replace with actual endpoint
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    success.value = true
    
    // Reset form after 5 seconds
    setTimeout(() => {
      form.name = ''
      form.email = ''
      form.phone = ''
      form.service = route.query.package || route.query.service || ''
      form.budget = ''
      form.message = ''
      success.value = false
    }, 5000)
    
  } catch (error) {
    formError.value = 'Failed to send message. Please try again.'
  } finally {
    submitting.value = false
  }
}

const faqs = [
  {
    q: 'How quickly do you respond to inquiries?',
    a: 'We typically respond within 2 hours during business hours (Monday-Friday, 9am-6pm). All inquiries are answered within 24 hours.'
  },
  {
    q: 'Can I visit your office?',
    a: 'Yes! We\'re located at Shop E35 Murg Plaza, Area 10 UTC, Abuja. It\'s best to schedule an appointment first so we can dedicate time to discuss your project.'
  },
  {
    q: 'Do you work with clients outside Abuja?',
    a: 'Absolutely! We work with clients throughout Nigeria and internationally. We can conduct meetings via video call and manage projects remotely.'
  },
  {
    q: 'What information should I include in my message?',
    a: 'Tell us about your project goals, timeline, budget range, and any specific features you need. The more details, the better we can understand your requirements.'
  },
  {
    q: 'What are your payment terms?',
    a: 'We accept payments in Nigerian Naira via bank transfer, Paystack, or Flutterwave. We typically require 50% deposit to start and 50% upon completion.'
  },
  {
    q: 'Do you offer free consultations?',
    a: 'Yes! We offer a free initial consultation to discuss your project, understand your requirements, and provide a detailed quote.'
  }
]
</script>

<style scoped>
.contact-page {
  overflow-x: hidden;
  background: #f8f9ff;
}

/* Hero Section */
.contact-hero {
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

/* Contact Section */
.contact-section {
  padding: 80px 0;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
}

/* Contact Info Cards */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 30px;
}

.info-card {
  background: white;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.info-card h2 {
  font-size: 28px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.info-subtitle {
  color: #666;
  font-size: 14px;
  margin-bottom: 30px;
}

.info-item {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.info-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #0055FF10, #0055FF);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #0055FF;
  flex-shrink: 0;
}

.info-content h3 {
  font-size: 18px;
  font-weight: 600;
  color: #0A1F44;
  margin-bottom: 5px;
}

.info-content p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.info-content a {
  color: #0055FF;
  text-decoration: none;
  transition: color 0.3s ease;
}

.info-content a:hover {
  color: #6A0DAD;
  text-decoration: underline;
}

.response-badge {
  background: linear-gradient(135deg, #10b98110, #10b98120);
  border: 1px solid #10b98130;
  border-radius: 12px;
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}

.response-badge i {
  color: #10b981;
  font-size: 20px;
}

.response-badge span {
  color: #0A1F44;
  font-size: 14px;
  font-weight: 500;
}

.map-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #0055FF;
  text-decoration: none;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.3s ease;
}

.map-link:hover {
  color: #6A0DAD;
  transform: translateX(5px);
}

/* Social Card */
.social-card {
  background: white;
  border-radius: 30px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.social-card h3 {
  font-size: 18px;
  font-weight: 600;
  color: #0A1F44;
  margin-bottom: 20px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-link i {
  font-size: 18px;
}

.social-link.facebook {
  background: #1877f2;
  color: white;
}

.social-link.instagram {
  background: linear-gradient(45deg, #f09433, #d62976, #962fbf, #4f5bd5);
  color: white;
}

.social-link.linkedin {
  background: #0077b5;
  color: white;
}

.social-link.twitter {
  background: #000000;
  color: white;
}

.social-link:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
}

/* Contact Form */
.contact-form-wrapper {
  background: white;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.form-card h2 {
  font-size: 28px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.form-subtitle {
  color: #666;
  font-size: 14px;
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-weight: 600;
  color: #0A1F44;
  font-size: 14px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.required {
  color: #e53e3e;
  font-size: 16px;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 14px 16px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.2s ease;
  background: white;
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #0055FF;
  box-shadow: 0 0 0 3px rgba(0,85,255,0.1);
}

.form-group.error input,
.form-group.error select,
.form-group.error textarea {
  border-color: #e53e3e;
}

.error-text {
  color: #e53e3e;
  font-size: 13px;
  margin-top: 4px;
}

/* Privacy Notice */
.privacy-notice {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #f7fafc;
  padding: 12px 16px;
  border-radius: 10px;
  font-size: 13px;
  color: #4a5568;
  border: 1px solid #e2e8f0;
}

.privacy-notice i {
  color: #10b981;
  font-size: 16px;
}

/* Error Message */
.error-message {
  background: #fff5f5;
  border-left: 4px solid #e53e3e;
  padding: 12px 16px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #c53030;
  font-size: 14px;
}

.error-message i {
  font-size: 18px;
}

/* Success Message */
.success-message {
  background: #f0fff4;
  border-left: 4px solid #10b981;
  padding: 16px 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.success-message i {
  font-size: 30px;
  color: #10b981;
}

.success-message h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 5px;
}

.success-message p {
  color: #4a5568;
  font-size: 14px;
  margin: 0;
}

/* Submit Button */
.submit-btn {
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  border: none;
  padding: 16px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,85,255,0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Map Section */
.map-section {
  padding: 0 0 80px;
}

.map-card {
  background: white;
  border-radius: 30px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.05);
}

.map-header {
  text-align: center;
  margin-bottom: 30px;
}

.map-header h2 {
  font-size: 28px;
  font-weight: 700;
  color: #0A1F44;
  margin-bottom: 10px;
}

.map-header p {
  color: #666;
  font-size: 16px;
}

.map-container {
  border-radius: 20px;
  overflow: hidden;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.map-container iframe {
  display: block;
}

.map-directions {
  text-align: center;
}

.directions-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 15px 40px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.directions-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0,85,255,0.3);
}

.directions-btn i {
  transition: transform 0.3s ease;
}

.directions-btn:hover i {
  transform: translateX(5px);
}

/* FAQ Section */
.faq-section {
  padding: 0 0 80px;
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

.faq-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
}

.faq-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.03);
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

.faq-question:hover {
  background: #f8f9ff;
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
  padding: 0 0 80px;
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

.cta-btn {
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
  position: relative;
  z-index: 2;
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(255,255,255,0.3);
}

.cta-btn i {
  transition: transform 0.3s ease;
}

.cta-btn:hover i {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 991px) {
  .hero-title {
    font-size: 40px;
  }
  
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }
  
  .section-header h2 {
    font-size: 32px;
  }
  
  .faq-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 767px) {
  .contact-hero {
    padding: 130px 0 60px;
  }
  
  .hero-title {
    font-size: 32px;
  }
  
  .hero-description {
    font-size: 16px;
  }
  
  .info-card,
  .contact-form-wrapper,
  .map-card {
    padding: 30px 20px;
  }
  
  .info-item {
    flex-direction: column;
    gap: 10px;
  }
  
  .info-icon {
    width: 40px;
    height: 40px;
    font-size: 16px;
  }
  
  .social-links {
    flex-wrap: wrap;
  }
  
  .response-badge {
    flex-direction: column;
    text-align: center;
  }
  
  .map-container iframe {
    height: 300px;
  }
  
  .cta-card {
    padding: 40px 20px;
  }
  
  .cta-card h2 {
    font-size: 28px;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 28px;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    padding: 12px;
    font-size: 14px;
  }
  
  .submit-btn {
    padding: 14px;
    font-size: 15px;
  }
  
  .faq-question h4 {
    font-size: 14px;
  }
  
  .directions-btn {
    width: 100%;
    justify-content: center;
  }
}
</style>