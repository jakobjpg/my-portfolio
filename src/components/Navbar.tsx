'use client' // Required if you plan to use interactivity (e.g., mobile toggle later)

import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">MyPortfolio</Link>
        <div className="space-x-6 text-sm font-medium">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </nav>
  )
}
