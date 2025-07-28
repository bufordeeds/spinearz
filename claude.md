# SpinEarz Website Project

## Business Context

**SpinEarz** is a unique jewelry business that converts authentic fishing lures into safe, wearable earrings. The business owner wants to resurrect this concept with a simple website to showcase products and enable customer contact.

### Target Audience

- Fishing enthusiasts who want unique jewelry
- People looking for conversation-starter accessories
- Gift buyers seeking unique items
- Fans of upcycled/repurposed products

### Business Model

- **Current Phase**: Showcase products with contact-based sales (no e-commerce yet)
- **Future**: May add shopping cart/payments later
- **Custom Orders**: Accept special requests for specific lures

## Technical Requirements

### Stack

- **Frontend**: Next.js 15 (App Router) with TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity.io (headless CMS for easy content management)
- **Hosting**: Vercel
- **Images**: Next.js Image component with Sanity CDN

### Current Project State

- Next.js 15 project initialized with TypeScript and Tailwind
- Sanity dependencies installed and basic config in place
- Project structure created with `/src/app` and `/src/sanity` directories
- Sanity Studio accessible at `/studio` route
- Empty schema in `src/sanity/schemaTypes/index.ts`

### Environment Variables Needed

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-28
```

## Content Structure Requirements

### 1. Product Schema

Each earring product should have:

- **name**: Product name (e.g., "Bass Master Danglers")
- **slug**: URL-friendly identifier
- **price**: Price in USD
- **originalLure**: Name of the original fishing lure
- **images**: Array of product photos (multiple angles)
- **description**: Product description
- **category**: Reference to category (spinnerbaits, crankbaits, etc.)
- **available**: Boolean for availability
- **featured**: Boolean for homepage featuring
- **colors**: Array of color options
- **weight**: Weight category (lightweight, medium, statement)

### 2. Category Schema

For organizing products:

- **name**: Category name
- **slug**: URL slug
- **description**: Category description
- **image**: Category hero image

### 3. Site Settings Schema

For business info the owner can edit:

- **businessName**: "SpinEarz"
- **tagline**: "Hook the Look"
- **contactEmail**: Business email
- **phone**: Phone number
- **aboutText**: About us content
- **careInstructions**: How to care for the earrings
- **socialMedia**: Instagram, Facebook, Etsy links

## Website Features Needed

### Customer-Facing Pages

1. **Homepage** (`/`)
    - Hero section with brand imagery
    - Featured products grid
    - Brief about section
    - Contact CTA

2. **Products Page** (`/products`)
    - Grid of all available products
    - Category filtering
    - Search functionality
    - Sort by price/name

3. **Product Detail Pages** (`/products/[slug]`)
    - Multiple product images with zoom
    - Product details and pricing
    - Original lure information
    - Contact form for purchase inquiry

4. **About Page** (`/about`)
    - Business story
    - Conversion process explanation
    - Quality/safety information

5. **Contact Page** (`/contact`)
    - Contact form
    - Business information
    - Social media links
    - Custom order inquiries

### Admin Features (Sanity Studio)

- Easy product management with drag-drop images
- Inventory status updates
- Content editing for all pages
- Form submission viewing
- SEO meta data management

## Design Considerations

### Brand Aesthetic

- Colors: Teal/aqua theme (like the provided images)
- Style: Mix of fishing/outdoors and elegant jewelry aesthetics
- Typography: Clean, readable fonts
- Images: High-quality product photos with consistent styling

### User Experience

- Mobile-first responsive design
- Fast loading with optimized images
- Clear product photography
- Easy contact process
- Simple navigation

### Technical Performance

- Static generation where possible
- Image optimization via Sanity CDN
- SEO-friendly URLs and meta data
- Fast Core Web Vitals scores

## Implementation Priority

### Phase 1: Foundation

1. Create Sanity schemas (product, category, siteSettings)
2. Set up basic site layout and navigation
3. Create homepage with placeholder content

### Phase 2: Core Features

1. Products listing page with filtering
2. Product detail pages
3. Contact form functionality
4. About page with rich content

### Phase 3: Polish

1. Responsive design refinement
2. Image galleries and zoom functionality
3. SEO optimization
4. Performance optimization

## Maintenance Goals

The website should be designed so the business owner can:

- Add new products without developer help
- Update prices and availability easily
- Modify business information and content
- View contact form submissions
- Make basic content changes confidently

## Sample Product Data

For development/testing, consider products like:

- "Spinner Spectaculars" - converted spinnerbait earrings
- "Crankbait Classics" - repurposed crankbait lures
- "Jig Head Jewels" - fishing jig conversions
- "Fly Fishing Finery" - delicate fly lure earrings

## Key Considerations

- **Safety**: All sharp hooks removed, hypoallergenic materials
- **Authenticity**: Emphasize use of real fishing lures
- **Customization**: Framework for custom order requests
- **Scalability**: Easy to add e-commerce features later
- **Maintenance**: Minimize ongoing developer involvement
