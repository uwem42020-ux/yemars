<template>
  <JsonLd type="WebSite" :data="websiteData" />
</template>

<script setup>
const config = useRuntimeConfig()

const websiteData = {
  url: config.public.siteUrl,
  name: 'Yemars Technology Nigeria',
  potentialAction: {
    '@type': 'SearchAction',
    target: `${config.public.siteUrl}/?s={search_term_string}`,
    'query-input': 'required name=search_term_string'
  }
}
</script>
