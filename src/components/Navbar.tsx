"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-full border-2 border-primary group-hover:scale-105 transition-transform">
               <Image 
                 src="/images/logo.png" 
                 alt="MyKenyanFriend Logo" 
                 width={40} 
                 height={40} 
                 className="object-cover"
               />
            </div>
            <span className="font-serif font-bold text-xl tracking-tight text-gray-900 group-hover:text-primary transition-colors">
              MyKenyan<span className="text-primary">Friend</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/guides" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Browse Locals
            </Link>
            <Link href="/counties" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Counties
            </Link>
            <Link href="/how-it-works" className="text-gray-600 hover:text-primary font-medium transition-colors">
              How it Works
            </Link>
            <Link href="/login" className="text-gray-600 hover:text-primary font-medium transition-colors">
              Log In
            </Link>
            <Link 
              href="/become-a-guide" 
              className="px-5 py-2.5 rounded-full bg-primary text-white font-bold hover:bg-accent transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Become a Guide
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-primary focus:outline-none bg-white p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
           <Link onClick={() => setIsOpen(false)} href="/guides" className="text-gray-700 hover:text-primary font-bold text-lg block border-b border-gray-50 pb-2 px-2">Browse Locals</Link>
           <Link onClick={() => setIsOpen(false)} href="/counties" className="text-gray-700 hover:text-primary font-bold text-lg block border-b border-gray-50 pb-2 px-2">Counties</Link>
           <Link onClick={() => setIsOpen(false)} href="/how-it-works" className="text-gray-700 hover:text-primary font-bold text-lg block border-b border-gray-50 pb-2 px-2">How it Works</Link>
           <Link onClick={() => setIsOpen(false)} href="/login" className="text-gray-700 hover:text-primary font-bold text-lg block border-b border-gray-50 pb-2 px-2">Log In</Link>
           <Link onClick={() => setIsOpen(false)} href="/become-a-guide" className="bg-primary hover:bg-accent text-white text-center py-3 rounded-xl font-bold block shadow-md mx-2">
              Become a Guide
           </Link>
        </div>
      )}
    </nav>
  );
}
