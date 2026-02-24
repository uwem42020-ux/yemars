<template>
  <SEOJsonLd type="LocalBusiness" :data="businessData" />
</template>

<script setup>
const props = defineProps({
  pageType: {
    type: String,
    default: 'website'
  }
})

const config = useRuntimeConfig()

const businessData = {
  name: 'Yemars Technology Nigeria',
  description: 'Professional web development, app development, graphic design, and digital marketing services in Abuja, Nigeria.',
  url: config.public.siteUrl,
  telephone: '+234838887589', // Update with actual number
  email: 'info@yemars.ng',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop E35 Murg Plaza, Area 10 UTC',
    addressLocality: 'Abuja',
    addressRegion: 'FCT',
    postalCode: '900211',
    addressCountry: 'NG'
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '9.064478',
    longitude: '7.495388'
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '10:00',
      closes: '14:00'
    }
  ],
  priceRange: '₦₦',
  image: `${config.public.siteUrl}/logo.png`,
  sameAs: [
    'https://www.facebook.com/yemarstech',
    'https://www.instagram.com/yemarstech',
    'https://www.linkedin.com/company/yemars-technology',
    'https://twitter.com/yemarstech'
  ],
  hasMap: 'https://maps.google.com/?q=Shop+E35+Murg+Plaza+Area+10+Abuja'
}

// For specific pages, add more specific schema
if (props.pageType === 'contact') {
  businessData.mainEntityOfPage = {
    '@type': 'ContactPage',
    '@id': `${config.public.siteUrl}/contact`
  }
}
</script>