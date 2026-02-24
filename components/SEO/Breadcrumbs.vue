<template>
  <SEOJsonLd type="BreadcrumbList" :data="breadcrumbData" />
</template>

<script setup>
const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const config = useRuntimeConfig()

const breadcrumbData = {
  itemListElement: props.items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url ? `${config.public.siteUrl}${item.url}` : undefined
  }))
}
</script>