export default defineNuxtRouteMiddleware(async (to) => {
    if (to.path.startsWith('/admin') && to.path !== '/admin/login') {
      const supabase = useSupabaseClient()
      
      try {
        const { data: { session } } = await supabase.auth.getSession()
        
        if (!session) {
          return navigateTo('/admin/login')
        }
        
        if (session.user.email !== 'uwem42020@gmail.com') {
          await supabase.auth.signOut()
          return navigateTo('/admin/login')
        }
        
      } catch (error) {
        return navigateTo('/admin/login')
      }
    }
  })