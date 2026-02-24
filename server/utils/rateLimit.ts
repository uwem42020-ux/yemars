import { H3Event } from 'h3'

// Simple in-memory rate limiting (for production, use Redis)
const rateLimitStore = new Map<string, { count: number; timestamp: number }>()

export function checkRateLimit(event: H3Event): { limited: boolean; message?: string } {
  const config = useRuntimeConfig()
  const maxAttempts = parseInt(config.rateLimitMax as string) || 5
  const windowMs = (parseInt(config.rateLimitWindow as string) || 3600) * 1000
  
  // Get client IP
  const ip = event.node.req.headers['x-forwarded-for'] || 
             event.node.req.socket.remoteAddress || 
             'unknown'
  
  const clientId = Array.isArray(ip) ? ip[0] : ip
  const now = Date.now()
  
  // Clean up old entries
  for (const [key, value] of rateLimitStore.entries()) {
    if (now - value.timestamp > windowMs) {
      rateLimitStore.delete(key)
    }
  }
  
  // Check current client
  const clientData = rateLimitStore.get(clientId)
  
  if (!clientData) {
    rateLimitStore.set(clientId, { count: 1, timestamp: now })
    return { limited: false }
  }
  
  if (now - clientData.timestamp > windowMs) {
    // Reset if window expired
    rateLimitStore.set(clientId, { count: 1, timestamp: now })
    return { limited: false }
  }
  
  if (clientData.count >= maxAttempts) {
    return { 
      limited: true, 
      message: `Too many attempts. Please try again after ${Math.ceil(windowMs / 60000)} minutes.` 
    }
  }
  
  // Increment count
  rateLimitStore.set(clientId, { 
    count: clientData.count + 1, 
    timestamp: clientData.timestamp 
  })
  
  return { limited: false }
}