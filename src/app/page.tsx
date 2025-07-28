import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import { getFeaturedProducts } from '@/sanity/lib/fetch'

export default async function Home() {
  const featuredProducts = await getFeaturedProducts()

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-50 to-cyan-50 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hook the Look
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Unique jewelry crafted from authentic fishing lures. Each piece tells a story of adventure and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/products"
                className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Shop Now
              </Link>
              <Link
                href="/about"
                className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-colors"
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
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
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
                className="inline-block text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                View All Products →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* About Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                From Tackle Box to Jewelry Box
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                SpinEarz transforms authentic fishing lures into unique, wearable art. Each earring is carefully crafted 
                to preserve the charm of the original lure while ensuring comfort and safety for everyday wear.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Whether you&apos;re a fishing enthusiast or simply love one-of-a-kind jewelry, our pieces are conversation 
                starters that celebrate the beauty of repurposed materials.
              </p>
              <Link
                href="/about"
                className="inline-block text-teal-600 font-semibold hover:text-teal-700 transition-colors"
              >
                Learn More About Our Process →
              </Link>
            </div>
            <div className="bg-gradient-to-br from-teal-100 to-cyan-100 rounded-lg h-96 flex items-center justify-center">
              <p className="text-gray-500 text-center px-8">
                Featured image of the conversion process or product showcase
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Make a Catch?
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Browse our collection or get in touch for custom orders
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Shop Collection
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-800 transition-colors"
            >
              Custom Orders
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}