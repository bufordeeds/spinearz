import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/sanity/lib/fetch'

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary/5 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Hook the Look
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto">
              Unique jewelry crafted from authentic fishing lures. Each piece tells a story of adventure and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="inline-block bg-background text-primary px-8 py-3 rounded-lg font-semibold border-2 border-primary hover:bg-primary/10 transition-colors"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featuredProducts.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">
              Featured Catches
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                From Tackle Box to Jewelry Box
              </h2>
              <p className="text-lg text-foreground/80 mb-6">
                SpinEarz transforms authentic fishing lures into unique, wearable art. Each earring is carefully crafted 
                to preserve the charm of the original lure while ensuring comfort and safety for everyday wear.
              </p>
              <p className="text-lg text-foreground/80 mb-6">
                Whether you&apos;re a fishing enthusiast or simply love one-of-a-kind jewelry, our pieces are conversation 
                starters that celebrate the beauty of repurposed materials.
              </p>
              <Link
                href="/about"
                className="inline-block text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More About Our Process →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg h-96 flex items-center justify-center">
              <p className="text-foreground/50 text-center px-8">
                Featured image of the conversion process or product showcase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Catch?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Browse our collection or get in touch for custom orders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-dark/90 transition-colors"
            >
              Custom Orders
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}