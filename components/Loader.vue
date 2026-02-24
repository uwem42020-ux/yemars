<template>
  <Transition name="fade">
    <div v-if="loading" class="loader-overlay">
      <div class="loader-container">
        <div class="loader-circle">
          <img src="/loader.png" alt="Loading..." class="loader-logo">
          <div class="spinner-ring"></div>
        </div>
        <!-- Removed loader-text paragraph -->
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const loading = ref(true)

// Simulate loading time (remove this when you have real loading logic)
onMounted(() => {
  // Hide loader after 2 seconds (replace with your actual loading logic)
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

// Expose loading state to parent if needed
defineExpose({
  loading
})
</script>

<style scoped>
.loader-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #0A1F44 0%, #0055FF 50%, #6A0DAD 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.loader-container {
  text-align: center;
}

.loader-circle {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-logo {
  width: 49px;
  height: 49px;
  position: relative;
  z-index: 2;
  animation: logoPulse 2s ease-in-out infinite;
}

.spinner-ring {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 3px solid transparent;
  border-top-color: white;
  border-right-color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.2);
  border-left-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.spinner-ring::after {
  content: '';
  position: absolute;
  top: -3px;
  left: -3px;
  right: -3px;
  bottom: -3px;
  border: 3px solid transparent;
  border-top-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  animation: spin 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite reverse;
}

/* Animations */
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes logoPulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.1);
    opacity: 0.9;
  }
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .loader-circle {
    width: 100px;
    height: 100px;
  }
  
  .loader-logo {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 480px) {
  .loader-circle {
    width: 80px;
    height: 80px;
  }
  
  .loader-logo {
    width: 35px;
    height: 35px;
  }
}
</style>