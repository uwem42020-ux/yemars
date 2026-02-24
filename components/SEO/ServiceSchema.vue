<template>
  <SEOJsonLd type="Service" :data="serviceData" />
</template>

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

const config = useRuntimeConfig()

const serviceData = {
  name: props.service.name,
  description: props.service.description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Yemars Technology Nigeria',
    url: config.public.siteUrl
  },
  areaServed: {
    '@type': 'Country',
    name: 'Nigeria'
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: props.service.name,
    itemListElement: props.service.offers?.map((offer, index) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: offer.name
      },
      price: offer.price,
      priceCurrency: 'NGN'
    }))
  }
}
</script>