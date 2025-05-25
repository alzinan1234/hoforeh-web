"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setMobileOpen(!mobileOpen)

  const isActive = (path) => pathname === path

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="maxWidth  mx-auto flex justify-between items-center py-3  md:py-4">
        {/* Logo */}
        <div className="flex items-center max-w-[180px] sm:max-w-none">
          <Image
            src="/logo.png"
            alt="Liquid Chair Group"
            width={267}
            height={68}
            className="w-full h-auto"
            priority
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 font-normal">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/products', label: 'Products' },
            { href: '/contact', label: 'Contact Us' },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[15px] lg:text-[16px] ${
                isActive(item.href)
                  ? 'text-[#0b5c76] border-b-2 border-[#0b5c76]'
                  : 'text-[#070707] hover:text-[#0b5c76]'
              } pb-1 transition`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Contact Button - Desktop */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-[#0978D9] text-[#070707] px-9 py-4 rounded-[12px] hover:bg-blue-700 transition text-sm lg:text-base"
          >
            Contact →
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden text-black">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 ${
          mobileOpen ? 'max-h-96 opacity-100 pt-4 pb-6' : 'max-h-0 opacity-0'
        } font-medium text-sm sm:text-base`}
      >
        {[
          { href: '/', label: 'Home' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/products', label: 'Products' },
          { href: '/contact', label: 'Contact' },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block mb-3 pb-1 ${
              isActive(item.href)
                ? 'text-[#0b5c76] border-b-2 border-[#0b5c76]'
                : 'text-[#070707] hover:text-[#0b5c76]'
            } transition`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  )
}
