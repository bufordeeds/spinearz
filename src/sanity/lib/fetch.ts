import { client } from './client'
import { 
  PRODUCTS_QUERY, 
  FEATURED_PRODUCTS_QUERY, 
  PRODUCT_BY_SLUG_QUERY,
  PRODUCTS_BY_CATEGORY_QUERY,
  CATEGORIES_QUERY,
  CATEGORY_BY_SLUG_QUERY,
  SITE_SETTINGS_QUERY
} from './queries'

export interface Product {
  _id: string
  name: string
  slug: { current: string }
  price: number
  originalLure?: string
  description?: string
  available?: boolean
  colors?: string[]
  weight?: string
  imageUrl?: string
  images?: Array<{ url: string; alt?: string }>
  category?: { name: string; slug: { current: string } } | string
}

export interface Category {
  _id: string
  name: string
  slug: { current: string }
  description?: string
  imageUrl?: string
}

export interface SiteSettings {
  businessName: string
  tagline: string
  contactEmail?: string
  phone?: string
  aboutText?: unknown[]
  careInstructions?: string
  socialMedia?: {
    instagram?: string
    facebook?: string
    etsy?: string
  }
}

export async function getProducts(): Promise<Product[]> {
  return client.fetch(PRODUCTS_QUERY)
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return client.fetch(FEATURED_PRODUCTS_QUERY)
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(PRODUCT_BY_SLUG_QUERY, { slug })
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return client.fetch(PRODUCTS_BY_CATEGORY_QUERY, { categorySlug })
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(CATEGORIES_QUERY)
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  return client.fetch(CATEGORY_BY_SLUG_QUERY, { slug })
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return client.fetch(SITE_SETTINGS_QUERY)
}