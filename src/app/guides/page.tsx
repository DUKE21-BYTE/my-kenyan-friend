"use client";

import { useState } from "react";
import Link from "next/link";
import { GUIDES } from "@/data/guides";

const COUNTIES = ["Nairobi", "Mombasa", "Narok", "Lamu", "Kilifi", "Malindi", "Nanyuki"];
const SERVICES = ["Virtual", "Guide", "Logistics", "Bargaining", "Safari", "Culture"];

export default function GuidesPage() {
  const [selectedCounty, setSelectedCounty] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [maxPrice, setMaxPrice] = useState(100);

  // Filter Logic
  const filteredGuides = GUIDES.filter((guide) => {
    const matchCounty = selectedCounty ? guide.county === selectedCounty : true;
    const matchService = selectedService ? guide.services.includes(selectedService) : true;
    const matchPrice = guide.rate <= maxPrice; // Simplified price logic
    return matchCounty && matchService && matchPrice;
  });

  return (
    <main className="min-h-screen pt-20 bg-neutral-50 px-4 md:px-8 pb-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Page Header */}
        <div className="mb-8 text-center md:text-left">
          <h1 className="font-serif text-4xl font-bold text-gray-900">Find a Local Friend</h1>
          <p className="text-gray-600 mt-2">Connect with verified experts for planning, guiding, or logistics.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          
          {/* Sidebar Filters */}
          <aside className="w-full md:w-64 flex-shrink-0 space-y-8 bg-white p-6 rounded-xl shadow-sm h-fit border border-gray-100 sticky top-24">
            <div>
              <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">Location</h3>
              <select 
                className="w-full p-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-primary focus:outline-none"
                value={selectedCounty}
                onChange={(e) => setSelectedCounty(e.target.value)}
              >
                <option value="">All Counties</option>
                {COUNTIES.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>

            <div>
              <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">Service Type</h3>
              <div className="space-y-2">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input 
                    type="radio" 
                    name="service" 
                    value="" 
                    checked={selectedService === ""}
                    onChange={() => setSelectedService("")}
                    className="text-primary focus:ring-primary"
                  />
                  <span className="text-gray-600">All Services</span>
                </label>
                {SERVICES.map(s => (
                  <label key={s} className="flex items-center space-x-2 cursor-pointer">
                    <input 
                      type="radio" 
                      name="service" 
                      value={s}
                      checked={selectedService === s}
                      onChange={() => setSelectedService(s)}
                      className="text-primary focus:ring-primary"
                    />
                    <span className="text-gray-600">{s}</span>
                  </label>
                ))}
              </div>
            </div>

             <div>
              <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">Max Price ($)</h3>
              <input 
                type="range" 
                min="0" 
                max="200" 
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-primary"
              />
              <div className="text-right text-sm text-gray-600 mt-1">Under ${maxPrice}</div>
            </div>
          </aside>

          {/* Guide Grid */}
          <div className="flex-1">
            {filteredGuides.length === 0 ? (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg">No guides found matching your filters.</p>
                <button 
                  onClick={() => {setSelectedCounty(""); setSelectedService("");}}
                  className="mt-4 text-primary hover:underline font-medium"
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredGuides.map((guide) => (
                  <div key={guide.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col group">
                    {/* Card Header (Image Placeholder) */}
                    <div className="h-48 bg-gray-200 relative overflow-hidden group-hover:opacity-95 transition-opacity">
                      {/* Placeholder Avatar - would be next/image typically */}
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 text-gray-400 font-bold text-4xl">
                        {guide.name.charAt(0)}
                      </div>
                      
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-800 shadow-sm z-10">
                         📍 {guide.county}
                      </div>
                      
                      {/* Verification Badge */}
                      <div className="absolute bottom-3 left-3 bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold shadow-sm border border-green-200 z-10 flex items-center gap-1">
                        ✓ {guide.source}
                      </div>

                      {guide.rating >= 4.9 && (
                         <div className="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded text-xs font-bold shadow-sm z-10">
                           Top Rated
                         </div>
                      )}
                    </div>

                    {/* Card Content */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-serif font-bold text-lg text-gray-900 leading-tight group-hover:text-primary transition-colors">
                          {guide.name}
                        </h3>
                        <div className="flex items-center text-yellow-500 text-sm font-bold">
                          ★ {guide.rating} <span className="text-gray-400 font-normal ml-1">({guide.reviews})</span>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">
                        {guide.bio}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {guide.services.slice(0, 3).map(tag => (
                          <span key={tag} className="text-xs bg-neutral-100 text-gray-600 px-2 py-1 rounded-full border border-neutral-200">
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex items-center justify-between mt-auto">
                        <div>
                           <span className="text-lg font-bold text-primary">${guide.rate}</span>
                           <span className="text-xs text-gray-500">/{guide.unit}</span>
                        </div>
                        <Link href={`/guides/${guide.id}`} className="bg-gray-900 hover:bg-primary text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-md">
                          View Profile
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
