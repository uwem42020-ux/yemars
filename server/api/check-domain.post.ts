import { defineEventHandler, readBody, createError } from 'h3'
import { DomainCheckSchema } from '../utils/validation'
import { checkRateLimit } from '../utils/rateLimit'

export default defineEventHandler(async (event) => {
  try {
    // Check rate limit
    const rateLimit = checkRateLimit(event)
    if (rateLimit.limited) {
      throw createError({
        statusCode: 429,
        statusMessage: 'Too Many Requests',
        message: rateLimit.message
      })
    }

    // Read and validate body
    const body = await readBody(event)
    const validation = DomainCheckSchema.safeParse(body)
    
    // Check if validation failed with proper type guard
    if (!validation.success) {
      // Now TypeScript knows validation.error exists
      const errorMessage = validation.error.errors[0]?.message || 'Invalid domain format'
      throw createError({
        statusCode: 400,
        statusMessage: 'Bad Request',
        message: errorMessage
      })
    }

    // TypeScript now knows validation.data exists
    const { domain } = validation.data

    // Simulate domain availability check (70% chance available for demo)
    const simulateAvailability = () => {
      const commonTlds = ['.com', '.com.ng', '.ng']
      const isCommonTld = commonTlds.some(tld => domain.toLowerCase().endsWith(tld))
      const available = Math.random() > (isCommonTld ? 0.3 : 0.1)
      return available
    }

    // Calculate domain price based on TLD
    const getDomainPrice = (domain: string): number => {
      const lowerDomain = domain.toLowerCase()
      if (lowerDomain.endsWith('.com.ng')) return 6500
      if (lowerDomain.endsWith('.ng')) return 13500
      if (lowerDomain.endsWith('.com')) return 23500
      if (lowerDomain.endsWith('.name.ng')) return 500
      if (lowerDomain.endsWith('.org.ng')) return 8500
      if (lowerDomain.endsWith('.gov.ng')) return 25000
      if (lowerDomain.endsWith('.edu.ng')) return 15000
      return 15000 // default for other TLDs
    }

    const isAvailable = simulateAvailability()
    const domainPrice = getDomainPrice(domain)

    // Package definitions with features
    const packages = {
      starter: {
        name: 'Starter Website',
        development: 150000,
        hosting: 50000,
        features: [
          '5-page responsive website',
          'Mobile-friendly design',
          'Contact form',
          'Basic SEO',
          '1-month maintenance'
        ]
      },
      professional: {
        name: 'Professional Website',
        development: 350000,
        hosting: 75000,
        features: [
          '10-page responsive website',
          'Custom design & branding',
          'School/Business management system',
          'Advanced SEO',
          '3-month maintenance',
          'Google Business setup'
        ]
      },
      enterprise: {
        name: 'Enterprise Solution',
        development: 600000,
        hosting: 100000,
        features: [
          'Unlimited pages',
          'Custom web application',
          'E-commerce functionality',
          'Advanced security',
          '6-month maintenance',
          'Priority support',
          'Custom integrations'
        ]
      }
    }

    // Calculate totals and return packages with all data
    const packagesWithTotals = Object.entries(packages).reduce((acc, [key, pkg]) => {
      acc[key] = {
        ...pkg,
        total: domainPrice + pkg.development + pkg.hosting,
        domainPrice,
        development: pkg.development,
        hosting: pkg.hosting
      }
      return acc
    }, {} as Record<string, any>)

    return {
      success: true,
      available: isAvailable,
      domain,
      domainPrice,
      packages: packagesWithTotals,
      message: isAvailable 
        ? `${domain} is available! Choose a package below to get started.` 
        : `${domain} is already taken. Try a different domain.`,
      timestamp: new Date().toISOString()
    }

  } catch (error: any) {
    console.error('Domain check error:', error)
    
    // Handle validation errors (already have statusCode)
    if (error.statusCode) {
      throw error
    }
    
    // Generic error
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
      message: 'Failed to check domain availability. Please try again.'
    })
  }
})