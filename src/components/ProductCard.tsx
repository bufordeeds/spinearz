import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/sanity/lib/fetch'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug.current}`} className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden">
        <div className="relative h-64 bg-gray-100">
          {product.imageUrl ? (
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-200"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-teal-600 mt-2">
            ${product.price.toFixed(2)}
          </p>
          {typeof product.category === 'string' && (
            <p className="text-sm text-gray-500 mt-1">{product.category}</p>
          )}
        </div>
      </div>
    </Link>
  )
}