// server/middleware/canonical-slash.ts
import { defineEventHandler, sendRedirect } from 'h3'

export default defineEventHandler((event) => {
  const url = new URL(event.node.req.url || '/', `http://${event.node.req.headers.host || 'localhost'}`)
  const pathname = url.pathname

  // Only redirect if path has trailing slash AND it's not the homepage
  if (pathname.length > 1 && pathname.endsWith('/')) {
    const target = pathname.slice(0, -1) + url.search
    return sendRedirect(event, target, 301)
  }
  
  // Return nothing for other URLs (no redirect needed)
  return
})