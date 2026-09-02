<template>
  <div class="footer-locations">
    <h4>Service Areas</h4>
    <div class="locations-grid">
      <NuxtLink 
        v-for="location in locations" 
        :key="location.slug"
        :to="`/locations/${location.slug}/`"
        class="location-link"
      >
        {{ location.name }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const locations = [
  { slug: 'abuja', name: 'Abuja' },
  { slug: 'lagos', name: 'Lagos' },
  { slug: 'rivers', name: 'Rivers' },
  { slug: 'kano', name: 'Kano' },
  { slug: 'oyo', name: 'Oyo' },
  { slug: 'kaduna', name: 'Kaduna' },
  { slug: 'anambra', name: 'Anambra' },
  { slug: 'enugu', name: 'Enugu' },
  { slug: 'delta', name: 'Delta' },
  { slug: 'edo', name: 'Edo' },
  { slug: 'ogun', name: 'Ogun' },
  { slug: 'kwara', name: 'Kwara' },
  { slug: 'osun', name: 'Osun' },
  { slug: 'ondo', name: 'Ondo' },
  { slug: 'ekiti', name: 'Ekiti' },
  { slug: 'benue', name: 'Benue' },
  { slug: 'plateau', name: 'Plateau' },
  { slug: 'niger', name: 'Niger' },
  { slug: 'kogi', name: 'Kogi' },
  { slug: 'nasarawa', name: 'Nasarawa' },
  { slug: 'taraba', name: 'Taraba' },
  { slug: 'adamawa', name: 'Adamawa' },
  { slug: 'borno', name: 'Borno' },
  { slug: 'yobe', name: 'Yobe' },
  { slug: 'bauchi', name: 'Bauchi' },
  { slug: 'gombe', name: 'Gombe' },
  { slug: 'jigawa', name: 'Jigawa' },
  { slug: 'katsina', name: 'Katsina' },
  { slug: 'sokoto', name: 'Sokoto' },
  { slug: 'kebbi', name: 'Kebbi' },
  { slug: 'zamfara', name: 'Zamfara' },
  { slug: 'abia', name: 'Abia' },
  { slug: 'imo', name: 'Imo' },
  { slug: 'ebonyi', name: 'Ebonyi' },
  { slug: 'akwa-ibom', name: 'Akwa Ibom' },
  { slug: 'cross-river', name: 'Cross River' },
  { slug: 'bayelsa', name: 'Bayelsa' },
  { slug: 'nigeria', name: 'Nigeria' }
]
</script>

<style scoped>
.footer-locations {
  margin: 20px 0;
}

.footer-locations h4 {
  color: white;
  margin-bottom: 15px;
  font-size: 16px;
}

.locations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
}

.location-link {
  color: rgba(255,255,255,0.7);
  text-decoration: none;
  font-size: 13px;
  transition: color 0.3s ease;
  padding: 4px 0;
}

.location-link:hover {
  color: white;
}

@media (max-width: 768px) {
  .locations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
