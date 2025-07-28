# SpinEarz - Hook the Look 🎣✨

A modern e-commerce website for SpinEarz, a unique jewelry business that transforms authentic fishing lures into wearable earrings.

## About SpinEarz

SpinEarz converts vintage fishing lures into safe, stylish earrings that serve as perfect conversation starters. Each piece combines the rugged charm of fishing gear with elegant jewelry craftsmanship, appealing to fishing enthusiasts and lovers of unique accessories alike.

## Tech Stack

- **Frontend**: Next.js 15 with App Router and TypeScript
- **Styling**: Tailwind CSS v4
- **CMS**: Sanity.io (headless CMS)
- **Hosting**: Vercel
- **Images**: Next.js Image component with Sanity CDN optimization

## Features

### 🏪 Customer-Facing Features
- **Homepage**: Hero section, featured products, and brand story
- **Product Catalog**: Searchable and filterable product grid
- **Product Details**: Image galleries, specifications, and contact CTAs
- **About Page**: Brand story and crafting process
- **Contact Form**: Product inquiries and custom orders
- **Responsive Design**: Mobile-first, optimized for all devices

### 🛠️ Admin Features (Sanity Studio)
- **Content Management**: Easy product and category management
- **Image Handling**: Drag-and-drop image uploads with CDN optimization
- **Inventory Control**: Availability status and featured product selection
- **Rich Content**: About page and product descriptions with rich text
- **SEO Management**: Meta descriptions and social sharing optimization

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Sanity account and project

### Environment Variables

Create a `.env.local` file with:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-07-28
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/spinearz.git
   cd spinearz
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your Sanity configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Access Sanity Studio**
   Navigate to `http://localhost:3000/studio` to manage content

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── contact/           # Contact form
│   ├── products/          # Product listing and details
│   └── studio/            # Sanity Studio route
├── components/            # Reusable React components
├── sanity/               # Sanity CMS configuration
│   ├── lib/              # Client, queries, and fetch functions
│   └── schemaTypes/      # Content schemas
└── styles/               # Global styles
```

## Content Management

### Sanity Schemas

1. **Product Schema**: Complete product information including images, pricing, and specifications
2. **Category Schema**: Product categorization system
3. **Site Settings**: Global site configuration and business information

### Adding New Products

1. Access Sanity Studio at `/studio`
2. Navigate to "Products" 
3. Click "Create" and fill in product details
4. Upload high-quality product images
5. Set availability and featured status
6. Publish changes

## Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   vercel link
   ```

2. **Add environment variables**
   ```bash
   vercel env add NEXT_PUBLIC_SANITY_PROJECT_ID
   vercel env add NEXT_PUBLIC_SANITY_DATASET  
   vercel env add NEXT_PUBLIC_SANITY_API_VERSION
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Performance Features

- **Static Site Generation**: Pre-built pages for optimal performance
- **Image Optimization**: Automatic image resizing and WebP conversion
- **SEO Optimization**: Meta tags, social sharing, and structured data
- **Core Web Vitals**: Optimized for Google's performance metrics

## Content Strategy

### Product Photography
- Multiple angles per product
- Consistent lighting and backgrounds
- High-resolution images for zoom functionality
- Alt text for accessibility

### SEO Optimization
- Descriptive product titles and descriptions
- Category-based URL structure
- Social media sharing optimization
- Mobile-friendly design

## Future Enhancements

- **E-commerce Integration**: Shopping cart and payment processing
- **User Accounts**: Customer profiles and order history
- **Inventory Management**: Real-time stock tracking
- **Email Marketing**: Newsletter and customer communications
- **Analytics**: Enhanced tracking and reporting

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -am 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is proprietary and confidential. All rights reserved by SpinEarz.

## Support

For technical support or questions about the website, please contact the development team or create an issue in this repository.

---

**SpinEarz - Where fishing meets fashion!** 🎣💫
