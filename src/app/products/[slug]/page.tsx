import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getProductBySlug, getProducts } from '@/sanity/lib/fetch'

export async function generateStaticParams() {
  const products = await getProducts()
  return products.map((product) => ({
    slug: product.slug.current,
  }))
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string }
}) {
  const product = await getProductBySlug(params.slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                Products
              </Link>
            </li>
            <li>
              <span className="mx-2 text-gray-400">/</span>
            </li>
            <li className="text-gray-900">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            {product.images && product.images.length > 0 ? (
              <div className="space-y-4">
                <div className="relative h-96 lg:h-[500px] bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={product.images[0].url}
                    alt={product.images[0].alt || product.name}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                {product.images.length > 1 && (
                  <div className="grid grid-cols-4 gap-4">
                    {product.images.slice(1).map((image, index) => (
                      <div
                        key={index}
                        className="relative h-24 bg-gray-100 rounded-lg overflow-hidden"
                      >
                        <Image
                          src={image.url}
                          alt={image.alt || `${product.name} ${index + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="h-96 lg:h-[500px] bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-400">No image available</p>
              </div>
            )}
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <p className="text-3xl font-bold text-teal-600 mb-6">
              ${product.price.toFixed(2)}
            </p>

            {product.available ? (
              <p className="text-green-600 font-medium mb-6">✓ In Stock</p>
            ) : (
              <p className="text-red-600 font-medium mb-6">Out of Stock</p>
            )}

            <div className="prose prose-gray max-w-none mb-8">
              <p>{product.description}</p>
            </div>

            {/* Product Details */}
            <div className="border-t border-gray-200 pt-6 space-y-4">
              {product.originalLure && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Original Lure</h3>
                  <p className="mt-1 text-sm text-gray-600">{product.originalLure}</p>
                </div>
              )}

              {product.weight && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Weight Category</h3>
                  <p className="mt-1 text-sm text-gray-600 capitalize">{product.weight}</p>
                </div>
              )}

              {product.colors && product.colors.length > 0 && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Available Colors</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {product.colors.map((color, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-sm bg-gray-100 text-gray-700 rounded-full"
                      >
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {product.category && typeof product.category === 'object' && (
                <div>
                  <h3 className="text-sm font-medium text-gray-900">Category</h3>
                  <p className="mt-1 text-sm text-gray-600">{product.category.name}</p>
                </div>
              )}
            </div>

            {/* Contact Form */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Interested in this piece?
              </h3>
              <p className="text-gray-600 mb-4">
                Contact us to purchase or ask questions about this product.
              </p>
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-block bg-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-700 transition-colors"
              >
                Contact Us About This Product
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}