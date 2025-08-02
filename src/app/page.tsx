'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold" style={{ color: '#2563eb' }}>
            Sqs
          </h1>
          <div className="flex space-x-6">
            <Link href="/services" className="font-medium transition-colors" style={{ color: '#1f2937' }}>Services</Link>
            <Link href="/about" className="font-medium transition-colors" style={{ color: '#1f2937' }}>About</Link>
            <Link href="/contact" className="font-medium transition-colors" style={{ color: '#1f2937' }}>Contact</Link>
            <Link href="/pricing" className="font-medium transition-colors" style={{ color: '#1f2937' }}>Pricing</Link>
            <Link href="/team" className="font-medium transition-colors" style={{ color: '#1f2937' }}>Team</Link>
            <Link href="/portfolio" className="font-medium transition-colors" style={{ color: '#1f2937' }}>Portfolio</Link>
            <Link href="/blog" className="font-medium transition-colors" style={{ color: '#1f2937' }}>Blog</Link>
            <Link href="/testimonials" className="font-medium transition-colors" style={{ color: '#1f2937' }}>Testimonials</Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-light mb-6"
            style={{ color: '#1f2937' }}
          >
            Sqs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-8"
            style={{ color: '#6b7280' }}
          >
            Vendre 
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link 
              href="/contact"
              className="inline-block px-8 py-4 rounded-full font-medium text-white transition-transform hover:scale-105"
              style={{ backgroundColor: '#2563eb' }}
            >
              Découvrir nos solutions
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}