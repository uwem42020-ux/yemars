import { z } from 'zod'

// Nigerian phone number validation
const nigeriaPhoneRegex = /^(\+234|0)[7-9][0-1]\d{8}$/

export const LeadSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name is too long')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  
  email: z.string()
    .email('Invalid email address')
    .max(255, 'Email is too long'),
  
  phone: z.string()
    .regex(nigeriaPhoneRegex, 'Please enter a valid Nigerian phone number (e.g., 08123456789 or +2348123456789)'),
  
  domain: z.string()
    .min(3, 'Domain must be at least 3 characters')
    .max(255, 'Domain is too long')
    .regex(/^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid domain name'),
  
  package: z.object({
    type: z.enum(['starter', 'professional', 'enterprise']),
    name: z.string(),
    domainPrice: z.number().positive()
  }),
  
  notes: z.string()
    .max(1000, 'Notes are too long')
    .optional()
    .default('')
})

export const DomainCheckSchema = z.object({
  domain: z.string()
    .min(3, 'Domain must be at least 3 characters')
    .max(255, 'Domain is too long')
    .regex(/^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Please enter a valid domain name')
})

export type LeadData = z.infer<typeof LeadSchema>
export type DomainCheckData = z.infer<typeof DomainCheckSchema>