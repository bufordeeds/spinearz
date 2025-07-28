import { groq } from 'next-sanity'

// Product queries
export const PRODUCTS_QUERY = groq`*[_type == "product" && available == true] | order(name asc) {
  _id,
  name,
  slug,
  price,
  "imageUrl": images[0].asset->url,
  "category": category->name
}`

export const FEATURED_PRODUCTS_QUERY = groq`*[_type == "product" && featured == true && available == true] | order(name asc) [0...4] {
  _id,
  name,
  slug,
  price,
  "imageUrl": images[0].asset->url
}`

export const PRODUCT_BY_SLUG_QUERY = groq`*[_type == "product" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  price,
  originalLure,
  description,
  available,
  colors,
  weight,
  "images": images[]{
    "url": asset->url,
    alt
  },
  "category": category->{
    name,
    slug
  }
}`

export const PRODUCTS_BY_CATEGORY_QUERY = groq`*[_type == "product" && category->slug.current == $categorySlug && available == true] | order(name asc) {
  _id,
  name,
  slug,
  price,
  "imageUrl": images[0].asset->url,
  "category": category->name
}`

// Category queries
export const CATEGORIES_QUERY = groq`*[_type == "category"] | order(name asc) {
  _id,
  name,
  slug,
  description,
  "imageUrl": image.asset->url
}`

export const CATEGORY_BY_SLUG_QUERY = groq`*[_type == "category" && slug.current == $slug][0] {
  _id,
  name,
  slug,
  description,
  "imageUrl": image.asset->url
}`

// Site settings query
export const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0] {
  businessName,
  tagline,
  contactEmail,
  phone,
  aboutText,
  careInstructions,
  socialMedia
}`