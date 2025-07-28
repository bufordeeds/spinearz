import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-3">
            <Image 
              src="/spinearz-logo.jpeg" 
              alt="SpinEarz - Hook the Look" 
              width={200} 
              height={80}
              className="h-12 w-auto"
              priority
            />
            <span className="text-2xl font-bold text-gray-900">SpinEarz</span>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-teal-600 transition-colors">
              Products
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </nav>
          
          <button className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}