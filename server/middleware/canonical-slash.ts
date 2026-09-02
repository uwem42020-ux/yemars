// server/middleware/canonical-slash.ts
import { defineEventHandler, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  const url = new URL(event.node.req.url || '/', `http://${event.node.req.headers.host || 'localhost'}`)
  const pathname = url.pathname

  // Skip root path
  if (pathname === '/') return
  
  // Skip if already has trailing slash
  if (pathname.endsWith('/')) return
  
  // Skip if path has file extension (like .css, .js, .png, etc.)
  if (/\.[a-zA-Z0-9]+$/.test(pathname)) return
  
  // Skip if it's an API endpoint
  if (pathname.startsWith('/api/')) return
  
  // Add trailing slash and redirect
  const target = pathname + '/' + url.search
  return sendRedirect(event, target, 301)
})
