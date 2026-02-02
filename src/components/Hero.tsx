"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const HERO_IMAGES = [
  {
    src: "/images/hero-sunset.png",
    alt: "Maasai Mara Sunset",
  },
  {
    src: "/images/hero-dhow.png",
    alt: "Lamu Dhow Sailing",
  },
  {
    src: "/images/hero-beach.png",
    alt: "Diani Beach",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[85vh] w-full overflow-hidden bg-gray-900">
      {/* Carousel Images */}
      {HERO_IMAGES.map((image, index) => (
        <div
          key={image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover object-center"
            priority={index === 0}
          />
          {/* Dark Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
        </div>
      ))}

      {/* Content Overlay - Added pt-32 to clear navbar */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center z-10 pt-32">
        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 drop-shadow-2xl max-w-5xl leading-tight">
          Your Trusted Local Friend <br/><span className="text-white">in </span><span className="text-primary">Kenya</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-neutral-50 mb-10 max-w-2xl drop-shadow-lg font-medium">
          Authentic Experiences, Fair Prices, Zero Scams. Connect with verified locals for trip planning, guiding, and logistics.
        </p>

        {/* Search / Filter Box */}
        <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-2xl w-full max-w-3xl flex flex-col md:flex-row gap-4 items-center">
          <div className="flex-1 w-full">
            <label className="text-xs uppercase font-bold text-gray-500 mb-1 block text-left">Where to?</label>
            <select className="w-full bg-gray-50 border-b-2 border-transparent focus:border-primary focus:bg-white outline-none py-2 text-gray-800 transition-colors cursor-pointer appearance-none rounded px-2">
              <option value="">Any County</option>
              <option value="nairobi">Nairobi</option>
              <option value="mombasa">Mombasa</option>
              <option value="narok">Narok (Maasai Mara)</option>
              <option value="lamu">Lamu</option>
              <option value="kilifi">Kilifi (Diani)</option>
              {/* Add more counties later */}
            </select>
          </div>
          
          <div className="flex-1 w-full">
            <label className="text-xs uppercase font-bold text-gray-500 mb-1 block text-left">Service Type</label>
            <select className="w-full bg-gray-50 border-b-2 border-transparent focus:border-primary focus:bg-white outline-none py-2 text-gray-800 transition-colors cursor-pointer appearance-none rounded px-2">
              <option value="">All Services</option>
              <option value="virtual">Virtual Consultation</option>
              <option value="guide">On-Ground Guide</option>
              <option value="logistics">Logistics & Booking</option>
            </select>
          </div>

          <button className="w-full md:w-auto bg-primary hover:bg-red-500 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Find Locals
          </button>
        </div>

        {/* Quick Links */}
        <div className="mt-10 flex gap-4">
          <Link href="/become-a-guide" className="text-white border border-white/30 bg-black/20 hover:bg-white hover:text-primary px-6 py-2 rounded-full backdrop-blur-sm transition-all text-sm font-medium">
            Become a Guide
          </Link>
          <Link href="/how-it-works" className="text-white hover:text-neutral transition-colors text-sm font-medium flex items-center gap-1">
             How it works &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
