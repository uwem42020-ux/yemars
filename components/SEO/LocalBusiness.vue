<template>
  <JsonLd type="LocalBusiness" :data="businessData" />
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
  '@id': `${config.public.siteUrl}/#localbusiness`,
  name: 'Yemars Technology Nigeria',
  description: 'Yemars Technology is a leading technology company in Abuja, Nigeria providing web development, mobile app development, graphic design, networking, printing, and digital marketing services to businesses across Nigeria.',
  url: config.public.siteUrl,
  telephone: '+2349014488190',
  email: 'info@yemars.ng',
  priceRange: '₦₦',
  
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
  
  image: `${config.public.siteUrl}/logo.png`,
  
  sameAs: [
    'https://www.facebook.com/yemarstech',
    'https://www.instagram.com/yemarstech',
    'https://www.linkedin.com/company/yemars-technology',
    'https://twitter.com/yemarstech'
  ],
  
  hasMap: 'https://maps.google.com/?q=D+Pauli+Odili+Cluster+River+Park+Estate+Abuja',
  
  areaServed: [
    { '@type': 'City', name: 'Abuja' },
    { '@type': 'City', name: 'Lagos' },
    { '@type': 'Country', name: 'Nigeria' },
    { '@type': 'Continent', name: 'Africa' }
  ],
  
  knowsAbout: [
    'Web Development',
    'Mobile App Development',
    'E-Commerce Development',
    'Graphic Design',
    'Digital Marketing',
    'Networking Services',
    'Printing Services',
    'Social Media Management',
    'Fintech App Development',
    'IT Consulting',
    'Software Development',
    'Website Design'
  ],
  
  contactPoint: [
    {
      '@type': 'ContactPoint',
      telephone: '+2349014488190',
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: ['English']
    },
    {
      '@type': 'ContactPoint',
      telephone: '+2348038887589',
      contactType: 'whatsapp',
      areaServed: 'NG',
      availableLanguage: ['English']
    }
  ]
}

// For specific pages, add more specific schema
if (props.pageType === 'contact') {
  businessData.mainEntityOfPage = {
    '@type': 'ContactPage',
    '@id': `${config.public.siteUrl}/contact`
  }
}
</script>