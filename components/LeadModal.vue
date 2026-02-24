<template>
  <Transition name="modal">
    <div v-if="show" class="modal-overlay" @click.self="handleOverlayClick">
      <div class="modal-container" :class="{ 'submitted': success }">
        <div class="modal-header">
          <h3>{{ success ? 'Thank You!' : 'Complete Your Website Package' }}</h3>
          <button v-if="!submitting && !success" class="close-btn" @click="close" aria-label="Close">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
        
        <div class="modal-body">
          <!-- Success State -->
          <div v-if="success" class="success-state">
            <div class="success-animation">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <h4>{{ successMessage }}</h4>
            <p>We've received your request and will contact you within 24 hours to discuss your website project for <strong>{{ domainData?.domain }}</strong>.</p>
            <div class="lead-id" v-if="leadId">
              Reference: {{ leadId }}
            </div>
            <button class="theme-btn13" @click="close" style="margin-top: 24px;">
              Done
            </button>
          </div>

          <!-- Form State -->
          <template v-else>
            <!-- Package Summary -->
            <div class="package-summary" v-if="domainData">
              <div class="domain-badge">
                <i class="fa-solid fa-globe"></i>
                <span>{{ domainData.domain }}</span>
                <span class="available-badge">Available</span>
              </div>
              
              <div class="package-details">
                <div class="package-header">
                  <h4>{{ selectedPackage.name }}</h4>
                  <div class="package-total">{{ formatNaira(calculateTotal()) }}</div>
                </div>
                
                <div class="price-breakdown">
                  <div class="price-item">
                    <span>Domain Registration</span>
                    <span>{{ formatNaira(domainData.domainPrice) }}</span>
                  </div>
                  <div class="price-item">
                    <span>Website Development</span>
                    <span>{{ formatNaira(packagePrices[selectedPackage.type].dev) }}</span>
                  </div>
                  <div class="price-item">
                    <span>Hosting (Year 1)</span>
                    <span>{{ formatNaira(packagePrices[selectedPackage.type].hosting) }}</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Contact Form -->
            <form @submit.prevent="submitLead" class="lead-form" novalidate>
              <div class="form-group" :class="{ 'error': errors.name }">
                <label>
                  Full Name <span class="required">*</span>
                </label>
                <input 
                  type="text" 
                  v-model="form.name" 
                  @blur="validateField('name')"
                  placeholder="John Doe"
                  :disabled="submitting"
                >
                <span v-if="errors.name" class="error-text">{{ errors.name }}</span>
              </div>

              <div class="form-group" :class="{ 'error': errors.email }">
                <label>
                  Email Address <span class="required">*</span>
                </label>
                <input 
                  type="email" 
                  v-model="form.email" 
                  @blur="validateField('email')"
                  placeholder="john@example.com"
                  :disabled="submitting"
                >
                <span v-if="errors.email" class="error-text">{{ errors.email }}</span>
              </div>

              <div class="form-group" :class="{ 'error': errors.phone }">
                <label>
                  Phone Number <span class="required">*</span>
                </label>
                <input 
                  type="tel" 
                  v-model="form.phone" 
                  @blur="validateField('phone')"
                  placeholder="0812 345 6789"
                  :disabled="submitting"
                >
                <span v-if="errors.phone" class="error-text">{{ errors.phone }}</span>
                <small class="hint">Nigerian number (e.g., 08123456789 or +2348123456789)</small>
              </div>

              <div class="form-group">
                <label>Additional Notes (Optional)</label>
                <textarea 
                  v-model="form.notes" 
                  rows="3"
                  placeholder="Tell us about your project requirements, timeline, or any specific features you need..."
                  :disabled="submitting"
                ></textarea>
              </div>

              <!-- Privacy Notice -->
              <div class="privacy-notice">
                <i class="fa-solid fa-lock"></i>
                <span>Your information is secure and will only be used to contact you about your website project.</span>
              </div>

              <!-- Error Message -->
              <div v-if="formError" class="error-message">
                <i class="fa-solid fa-exclamation-circle"></i>
                <p>{{ formError }}</p>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                class="submit-btn"
                :disabled="submitting || !isFormValid"
              >
                <span v-if="!submitting">
                  Submit & Get Started <i class="fa-solid fa-arrow-right"></i>
                </span>
                <span v-else>
                  <i class="fa-solid fa-spinner fa-spin"></i> Processing...
                </span>
              </button>
            </form>
          </template>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  show: Boolean,
  domainData: Object,
  selectedPackage: Object
})

const emit = defineEmits(['close', 'submitted'])

// Package prices
const packagePrices = {
  starter: { dev: 150000, hosting: 50000 },
  professional: { dev: 350000, hosting: 75000 },
  enterprise: { dev: 600000, hosting: 100000 }
}

// Form state
const form = ref({
  name: '',
  email: '',
  phone: '',
  notes: ''
})

// Validation errors
const errors = ref({
  name: '',
  email: '',
  phone: ''
})

// UI state
const submitting = ref(false)
const success = ref(false)
const formError = ref('')
const leadId = ref('')
const successMessage = ref('Thank you for your interest!')

// Validation functions
const validateName = (name) => {
  if (!name) return 'Name is required'
  if (name.length < 2) return 'Name must be at least 2 characters'
  if (!/^[a-zA-Z\s'-]+$/.test(name)) return 'Name contains invalid characters'
  return ''
}

const validateEmail = (email) => {
  if (!email) return 'Email is required'
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) return 'Please enter a valid email address'
  return ''
}

const validatePhone = (phone) => {
  if (!phone) return 'Phone number is required'
  // Remove spaces and check
  const cleanPhone = phone.replace(/\s/g, '')
  const phoneRegex = /^(\+234|0)[7-9][0-1]\d{8}$/
  if (!phoneRegex.test(cleanPhone)) {
    return 'Please enter a valid Nigerian phone number'
  }
  return ''
}

const validateField = (field) => {
  switch (field) {
    case 'name':
      errors.value.name = validateName(form.value.name)
      break
    case 'email':
      errors.value.email = validateEmail(form.value.email)
      break
    case 'phone':
      errors.value.phone = validatePhone(form.value.phone)
      break
  }
}

const validateForm = () => {
  validateField('name')
  validateField('email')
  validateField('phone')
  
  return !errors.value.name && !errors.value.email && !errors.value.phone
}

const isFormValid = computed(() => {
  return form.value.name && 
         form.value.email && 
         form.value.phone && 
         !errors.value.name && 
         !errors.value.email && 
         !errors.value.phone
})

// Calculate total
const calculateTotal = () => {
  if (!props.domainData || !props.selectedPackage) return 0
  const pkg = packagePrices[props.selectedPackage.type]
  return props.domainData.domainPrice + pkg.dev + pkg.hosting
}

// Format currency
const formatNaira = (amount) => {
  return `₦${amount.toLocaleString('en-NG')}`
}

// Close modal
const close = () => {
  if (!submitting.value) {
    emit('close')
    resetForm()
  }
}

// Handle overlay click
const handleOverlayClick = () => {
  if (!submitting.value && !success.value) {
    close()
  }
}

// Reset form
const resetForm = () => {
  form.value = { name: '', email: '', phone: '', notes: '' }
  errors.value = { name: '', email: '', phone: '' }
  success.value = false
  formError.value = ''
  leadId.value = ''
}

// Submit lead
const submitLead = async () => {
  if (!validateForm()) return

  submitting.value = true
  formError.value = ''

  try {
    const response = await $fetch('/api/lead-capture', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone.replace(/\s/g, ''),
        domain: props.domainData.domain,
        package: {
          type: props.selectedPackage.type,
          name: props.selectedPackage.name,
          domainPrice: props.domainData.domainPrice
        },
        notes: form.value.notes
      }
    })

    if (response.success) {
      success.value = true
      successMessage.value = response.message
      leadId.value = response.leadId
      emit('submitted', { ...form.value, leadId: response.leadId })
    } else {
      formError.value = response.error || 'Something went wrong'
    }
  } catch (error) {
    console.error('Submission error:', error)
    formError.value = error.data?.message || 'Failed to submit. Please try again.'
  } finally {
    submitting.value = false
  }
}

// Reset when modal closes
watch(() => props.show, (newVal) => {
  if (!newVal) {
    resetForm()
  }
})
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.modal-container {
  background: white;
  border-radius: 24px;
  width: 100%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  animation: modalSlideUp 0.3s ease;
}

.modal-container.submitted {
  max-width: 500px;
}

.modal-header {
  padding: 24px 30px;
  border-bottom: 1px solid #eef2f6;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(135deg, #f8faff, #ffffff);
  position: sticky;
  top: 0;
  z-index: 10;
  border-radius: 24px 24px 0 0;
}

.modal-header h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  background: linear-gradient(45deg, #0A1F44, #0055FF);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.close-btn {
  background: #f0f2f5;
  border: none;
  color: #4a5568;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  font-size: 18px;
}

.close-btn:hover {
  background: #e2e8f0;
  transform: rotate(90deg);
}

.modal-body {
  padding: 30px;
}

/* Package Summary */
.package-summary {
  background: linear-gradient(135deg, #f8faff, #ffffff);
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 30px;
  border: 1px solid #eef2f6;
}

.domain-badge {
  display: flex;
  align-items: center;
  gap: 12px;
  background: white;
  padding: 12px 16px;
  border-radius: 12px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
  border: 1px solid #eef2f6;
}

.domain-badge i {
  color: #0055FF;
  font-size: 20px;
}

.domain-badge span {
  font-weight: 600;
  color: #0A1F44;
  font-size: 16px;
  word-break: break-all;
}

.available-badge {
  background: #10b981;
  color: white !important;
  padding: 4px 12px;
  border-radius: 30px;
  font-size: 12px;
  font-weight: 600;
  margin-left: auto;
  white-space: nowrap;
}

.package-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  flex-wrap: wrap;
  gap: 10px;
}

.package-header h4 {
  font-size: 18px;
  font-weight: 700;
  color: #0A1F44;
  margin: 0;
}

.package-total {
  font-size: 20px;
  font-weight: 800;
  color: #0055FF;
}

.price-breakdown {
  border-top: 1px solid #eef2f6;
  padding-top: 16px;
}

.price-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  color: #4a5568;
  font-size: 14px;
}

.price-item span:last-child {
  font-weight: 600;
  color: #0A1F44;
}

/* Form */
.lead-form {
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
.form-group textarea:focus {
  outline: none;
  border-color: #0055FF;
  box-shadow: 0 0 0 3px rgba(0, 85, 255, 0.1);
}

.form-group input:disabled,
.form-group textarea:disabled {
  background: #f7fafc;
  cursor: not-allowed;
  opacity: 0.7;
}

.form-group.error input,
.form-group.error textarea {
  border-color: #e53e3e;
}

.error-text {
  color: #e53e3e;
  font-size: 13px;
  margin-top: 4px;
}

.hint {
  color: #718096;
  font-size: 12px;
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
  box-shadow: 0 10px 25px rgba(0, 85, 255, 0.3);
}

.submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Success State */
.success-state {
  text-align: center;
  padding: 20px 0;
}

.success-animation {
  margin-bottom: 24px;
}

.success-animation i {
  font-size: 80px;
  color: #10b981;
  animation: successPop 0.5s ease;
}

.success-state h4 {
  font-size: 24px;
  color: #0A1F44;
  margin-bottom: 16px;
  font-weight: 700;
}

.success-state p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 20px;
}

.lead-id {
  background: #f7fafc;
  padding: 12px;
  border-radius: 8px;
  font-family: monospace;
  font-size: 14px;
  color: #4a5568;
  border: 1px dashed #cbd5e0;
  margin: 20px 0;
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
  font-size: 16px;
}

.theme-btn13:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 85, 255, 0.3);
}

/* Animations */
@keyframes modalSlideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes successPop {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

/* Responsive */
@media (max-width: 640px) {
  .modal-container {
    max-height: 95vh;
  }
  
  .modal-header {
    padding: 20px;
  }
  
  .modal-header h3 {
    font-size: 20px;
  }
  
  .modal-body {
    padding: 20px;
  }
  
  .package-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .domain-badge {
    flex-wrap: wrap;
  }
  
  .available-badge {
    margin-left: 0;
  }
  
  .success-animation i {
    font-size: 60px;
  }
  
  .success-state h4 {
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .modal-container {
    max-width: 100%;
  }
  
  .modal-header h3 {
    font-size: 18px;
  }
  
  .package-total {
    font-size: 18px;
  }
  
  .price-item {
    font-size: 13px;
  }
  
  .submit-btn {
    padding: 14px;
    font-size: 15px;
  }
}
</style>