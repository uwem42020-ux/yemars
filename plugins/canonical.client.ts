import { useHead, useRoute, useRuntimeConfig } from '#imports'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const updateCanonical = () => {
    const route = useRoute()
    const path = route.path !== '/' && route.path.endsWith('/')
      ? route.path.slice(0, -1)
      : route.path

    const href = `${config.public.siteUrl}${path}`

    useHead({
      link: [
        { rel: 'canonical', href }
      ]
    })
  }

  nuxtApp.hook('page:finish', updateCanonical)
  updateCanonical()
}
)
