<template>
  <footer class="yemars-footer-area">
    <!-- Footer Widgets -->
    <div class="footer-widgets">
      <div class="container">
        <div class="row">
          <!-- Company Info -->
          <div class="col-xl-3 col-lg-3 col-md-6 col-sm-12">
            <div class="yemars-footer-widget">
              <div class="yemars-footer-logo">
                <NuxtLink to="/">
                  <img src="/logo.png" alt="Yemars Technology" class="footer-logo-image">
                </NuxtLink>
              </div>
              <div class="yemars-footer-text">
                <p>Take your business to the next level with professional web solutions designed for the Nigerian market.</p>
              </div>
              <div class="yemars-footer-social">
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-instagram"></i></a>
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
              </div>
            </div>
          </div>

          <!-- Quick Links & Our Services Combined Row for Mobile -->
          <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div class="row">
              <!-- Quick Links -->
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="yemars-footer-widget">
                  <h4>Quick Links</h4>
                  <div class="yemars-footer-list">
                    <ul>
                      <li><NuxtLink to="/">Home</NuxtLink></li>
                      <li><NuxtLink to="/services">Our Services</NuxtLink></li>
                      <li><NuxtLink to="/pricing">Pricing</NuxtLink></li>
                      <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                    </ul>
                  </div>
                </div>
              </div>

              <!-- Our Services -->
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="yemars-footer-widget">
                  <h4>Our Services</h4>
                  <div class="yemars-footer-list">
                    <ul>
                      <li><NuxtLink to="/services/corporate-app">Corporate Web App</NuxtLink></li>
                      <li><NuxtLink to="/services/ecommerce-systems">E-Commerce Systems</NuxtLink></li>
                      <li><NuxtLink to="/services/premium-web-apps">Premium Web Apps</NuxtLink></li>
                      <li><NuxtLink to="/services/mobile-applications">Mobile Apps</NuxtLink></li>
                      <li><NuxtLink to="/services/app-maintenance">App Maintenance</NuxtLink></li>
                      <li><NuxtLink to="/services/fintech-app">Fintech App</NuxtLink></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Newsletter -->
          <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12">
            <div class="yemars-footer-widget yemars-footer-subscribe">
              <h4>Newsletter</h4>
              <p>Subscribe to get updates on new offers</p>
              <form @submit.prevent="subscribeNewsletter">
                <input type="email" v-model="newsletterEmail" placeholder="Enter Email Address" required>
                <button type="submit" class="theme-btn13">
                  Subscribe <span class="arrow1"><i class="fa-solid fa-arrow-right"></i></span>
                  <span class="arrow2"><i class="fa-solid fa-arrow-right"></i></span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="yemars-copyright">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <p>Copyright {{ new Date().getFullYear() }} Yemars Technology Nigeria | All Rights Reserved</p>
          </div>
          <div class="col-lg-6 text-end">
            <div class="payment-options">
              <span>Secure Payments:</span>
              <i class="fa-brands fa-cc-visa"></i>
              <i class="fa-brands fa-cc-mastercard"></i>
              <i class="fa-brands fa-cc-paypal"></i>
              <i class="fa-brands fa-cc-stripe"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const newsletterEmail = ref('')

const subscribeNewsletter = () => {
  alert('Thank you for subscribing!')
  newsletterEmail.value = ''
}
</script>

<style scoped>
.yemars-footer-area {
  background: #0A1F44;
  color: white;
  position: relative;
  overflow: hidden;
}

.footer-widgets {
  padding: 80px 0 50px;
  position: relative;
  z-index: 1;
}

.footer-widgets::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, rgba(0,85,255,0.1) 0%, rgba(106,13,173,0.1) 100%);
  z-index: -1;
}

.yemars-footer-widget {
  margin-bottom: 30px;
}

.yemars-footer-logo {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}

.footer-logo-image {
  width: auto;
  height: 32px;
  max-width: 274px;
  object-fit: contain;
  filter: brightness(0) invert(1);
}

.yemars-footer-text p {
  color: #ccc;
  line-height: 1.8;
  margin-bottom: 20px;
  font-size: 14px;
}

.yemars-footer-social {
  display: flex;
  gap: 10px;
}

.yemars-footer-social a {
  width: 40px;
  height: 40px;
  background: rgba(255,255,255,0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  text-decoration: none;
}

.yemars-footer-social a:hover {
  background: #0055FF;
  transform: translateY(-3px);
}

.yemars-footer-widget h4 {
  color: white;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 25px;
  position: relative;
  padding-bottom: 10px;
}

.yemars-footer-widget h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 30px;
  height: 2px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
}

.yemars-footer-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.yemars-footer-list ul li {
  margin-bottom: 12px;
}

.yemars-footer-list ul li a {
  color: #ccc;
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 14px;
  display: inline-block;
}

.yemars-footer-list ul li a:hover {
  color: #0055FF;
  transform: translateX(5px);
}

.yemars-footer-subscribe p {
  color: #ccc;
  font-size: 14px;
  margin-bottom: 20px;
}

.yemars-footer-subscribe form {
  position: relative;
}

.yemars-footer-subscribe input {
  width: 100%;
  padding: 15px 120px 15px 20px;
  border: 1px solid rgba(255,255,255,0.1);
  background: rgba(255,255,255,0.05);
  border-radius: 8px;
  color: white;
  font-size: 14px;
  transition: all 0.3s ease;
}

.yemars-footer-subscribe input:focus {
  outline: none;
  border-color: #0055FF;
  background: rgba(255,255,255,0.1);
}

.yemars-footer-subscribe input::placeholder {
  color: #999;
}

.yemars-footer-subscribe .theme-btn13 {
  position: absolute;
  right: 5px;
  top: 5px;
  padding: 10px 20px;
  font-size: 14px;
}

.theme-btn13 {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(45deg, #0055FF, #6A0DAD);
  color: white;
  padding: 12px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
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
  right: 30px;
  opacity: 0;
}

.theme-btn13:hover .arrow1 {
  transform: translateX(-10px);
  opacity: 0;
}

.theme-btn13:hover .arrow2 {
  right: 25px;
  opacity: 1;
}

.yemars-copyright {
  border-top: 1px solid rgba(255,255,255,0.1);
  padding: 20px 0;
}

.yemars-copyright p {
  color: #ccc;
  font-size: 14px;
  margin: 0;
}

.payment-options {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
}

.payment-options span {
  color: #ccc;
  font-size: 14px;
  margin-right: 10px;
}

.payment-options i {
  color: #ccc;
  font-size: 24px;
  transition: color 0.3s ease;
}

.payment-options i:hover {
  color: #0055FF;
}

/* Responsive adjustments */
@media (max-width: 991px) {
  .footer-widgets {
    padding: 50px 0 30px;
  }
  
  .payment-options {
    justify-content: flex-start;
    margin-top: 15px;
  }
}

@media (max-width: 767px) {
  .footer-logo-image {
    height: 28px;
  }
  
  .yemars-footer-subscribe input {
    padding-right: 110px;
  }
  
  /* Ensure columns stack properly on mobile */
  .col-sm-6 {
    width: 50%;
    float: left;
  }
  
  .col-sm-12 {
    width: 100%;
    float: left;
  }
}

@media (max-width: 480px) {
  .footer-logo-image {
    height: 24px;
  }
  
  .yemars-footer-list ul li a {
    font-size: 13px; /* Slightly smaller text on very small screens */
  }
  
  .yemars-footer-widget h4 {
    font-size: 16px;
    margin-bottom: 20px;
  }
}

/* Clear floats */
.row::after {
  content: "";
  display: table;
  clear: both;
}
</style>