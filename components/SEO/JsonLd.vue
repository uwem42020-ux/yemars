<template>
  <div>
    <slot />
  </div>
</template>

<script setup>
import { useHead } from '#imports'  // Changed from '@unhead/vue'

const props = defineProps({
  type: {
    type: String,
    default: 'LocalBusiness'
  },
  data: {
    type: Object,
    required: true
  }
})

// Generate JSON-LD based on type
const generateJsonLd = () => {
  const baseData = {
    '@context': 'https://schema.org',
    '@type': props.type,
    ...props.data
  }
  
  return JSON.stringify(baseData)
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: generateJsonLd()
    }
  ]
})
</script>