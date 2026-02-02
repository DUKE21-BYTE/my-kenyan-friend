"use client";

import { useState } from "react";
import Link from "next/link";
import { COUNTIES_DATA } from "@/data/counties";

const REGIONS = ["All", "Coast", "Rift Valley", "Central", "Eastern", "Nyanza", "Western", "North Eastern", "Nairobi"];

export default function CountiesPage() {
  const [selectedRegion, setSelectedRegion] = useState("All");

  const filteredCounties = selectedRegion === "All" 
    ? COUNTIES_DATA 
    : COUNTIES_DATA.filter(c => c.region === selectedRegion);

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">Explore Kenya&apos;s 47 Counties</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the white sands of the Coast to the rugged North, every county has a story. Discover hidden gems beyond the usual tourist map.
          </p>
        </div>

        {/* Region Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {REGIONS.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-full text-sm font-bold transition-all ${
                selectedRegion === region 
                  ? "bg-primary text-white shadow-md transform scale-105" 
                  : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Counties Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCounties.map((county) => (
            <div key={county.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full">
              
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-200 relative overflow-hidden">
                <img 
                  src={county.image} 
                  alt={county.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                />
                <div className="absolute top-3 right-3 bg-black/60 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                  {county.region}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {county.id}. {county.name}
                </h3>
                <p className="text-gray-600 text-sm line-clamp-3 mb-4 flex-1">
                  {county.description}
                </p>
                
                {/* Attractions tags */}
                <div className="flex flex-wrap gap-1 mb-4 h-16 overflow-hidden content-start">
                   {county.attractions.slice(0, 3).map((attr, i) => (
                     <span key={i} className="text-xs bg-neutral-100 text-gray-500 px-2 py-1 rounded border border-neutral-200">
                       {attr}
                     </span>
                   ))}
                   {county.attractions.length > 3 && (
                     <span className="text-xs text-gray-400 px-1 py-1">+{county.attractions.length - 3} more</span>
                   )}
                </div>

                <Link href={`/counties/${county.id}`} className="block text-center w-full border border-gray-200 hover:border-primary hover:text-primary text-gray-700 font-bold py-2 rounded-lg transition-colors text-sm">
                  View Attractions
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
