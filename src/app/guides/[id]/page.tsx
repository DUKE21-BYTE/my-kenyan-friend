"use client";

import { use } from "react";
import Link from "next/link";
import { useState } from "react";
import { GUIDES } from "@/data/guides";

export default function GuideProfile({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const guideId = Number(id);
  
  // Simple lookup
  const guide = GUIDES.find(g => g.id === guideId) || {
    ...GUIDES[0],
    name: "Guide Not Found",
    bio: "This guide profile is currently unavailable.",
    id: 0
  };

  const [contactMode, setContactMode] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-50 pt-20 pb-12">
      
      {/* Breadcrumb */}
      <div className="max-w-6xl mx-auto px-4 md:px-8 mb-6">
        <Link href="/guides" className="text-gray-500 hover:text-primary text-sm flex items-center gap-1">
          &larr; Back to Directory
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Col: Main Info */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Profile Header Card */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start">
             {/* Avatar Placeholder */}
             <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0 text-4xl font-bold text-gray-400 border-4 border-white shadow-lg">
                {guide.name.charAt(0)}
             </div>

             <div className="flex-1">
               <div className="flex justify-between items-start">
                 <div>
                    <h1 className="font-serif text-3xl font-bold text-gray-900">{guide.name}</h1>
                    <div className="flex items-center gap-2 mt-1 mb-2">
                       <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded text-xs font-bold border border-blue-100">
                         📍 {guide.county}
                       </span>
                       <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded text-xs font-bold border border-green-100 flex items-center gap-1">
                         ✓ Verified by {guide.source}
                       </span>
                    </div>
                 </div>
                 <div className="text-right">
                    <div className="text-2xl font-bold text-primary">${guide.rate}</div>
                    <div className="text-gray-400 text-sm">per {guide.unit}</div>
                 </div>
               </div>

               <p className="text-gray-600 mt-3 leading-relaxed">
                 {guide.bio}
               </p>

               <div className="flex gap-4 mt-6">
                 <div className="flex flex-col">
                   <span className="text-xs uppercase font-bold text-gray-400">Rating</span>
                   <span className="font-bold text-gray-900">★ {guide.rating} <span className="text-gray-400 font-normal">({guide.reviews} reviews)</span></span>
                 </div>
                 <div className="flex flex-col border-l pl-4">
                   <span className="text-xs uppercase font-bold text-gray-400">Languages</span>
                   <span className="font-bold text-gray-900">
                     {guide.languages?.join(", ") || "English, Swahili"}
                   </span>
                 </div>
               </div>
             </div>
          </div>

          {/* About Section */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
             <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">About Me</h2>
             <p className="text-gray-600 leading-relaxed mb-6">
               {guide.fullBio || guide.bio}
             </p>
             
             <h3 className="font-bold text-gray-900 mb-3">My Services</h3>
             <div className="flex flex-wrap gap-2">
               {guide.services.map(s => (
                 <span key={s} className="bg-neutral-100 text-gray-700 px-3 py-1 rounded-full text-sm border border-neutral-200">
                   {s}
                 </span>
               ))}
             </div>
          </div>
          
          {/* Reviews Placeholder */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Reviews ({guide.reviews})</h2>
            <div className="space-y-4">
               {/* Fake Review 1 */}
               <div className="border-b border-gray-100 pb-4">
                 <div className="flex items-center justify-between mb-2">
                   <span className="font-bold text-gray-900">Sarah from UK</span>
                   <span className="text-yellow-500 font-bold">★★★★★</span>
                 </div>
                 <p className="text-gray-600 text-sm">
                   &quot;{guide.name} was incredible! Saved us so much time and money at the market. Felt super safe the whole time.&quot;
                 </p>
               </div>
                {/* Fake Review 2 */}
                <div>
                 <div className="flex items-center justify-between mb-2">
                   <span className="font-bold text-gray-900">Mike from USA</span>
                   <span className="text-yellow-500 font-bold">★★★★★</span>
                 </div>
                 <p className="text-gray-600 text-sm">
                   &quot;Highly recommend for the virtual planning session. The itinerary was perfect.&quot;
                 </p>
               </div>
            </div>
          </div>

        </div>

        {/* Right Col: Booking/Contact Sticky */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-24">
             <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">Book {guide.name}</h3>
             
             <div className="mb-6">
               <label className="block text-sm font-bold text-gray-700 mb-1">Select Date</label>
               <input type="date" className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
             </div>

             <div className="mb-6">
               <label className="block text-sm font-bold text-gray-700 mb-1">Service Type</label>
               <select className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none bg-white">
                 <option>Virtual Consultation (1 hr) - ${guide.rate}</option>
                 <option>Full Day Guiding (8 hrs) - ${guide.rate * 8}</option>
                 <option>Custom Logistics Help - Quote</option>
               </select>
             </div>

             <button 
               onClick={() => setContactMode(true)}
               className="w-full bg-primary hover:bg-accent text-white font-bold py-3 rounded-xl transition-all shadow-md mb-3"
             >
               Request to Book
             </button>
             
             <p className="text-xs text-center text-gray-500">
               No payment charged yet. You&apos;ll chat with {guide.name} first.
             </p>

             {contactMode && (
               <div className="mt-4 p-4 bg-green-50 text-green-800 text-sm rounded-lg border border-green-200">
                 <strong>Demo Mode:</strong> In a real app, this would open a chat with {guide.name} or redirect to Stripe/M-Pesa.
               </div>
             )}
          </div>
        </div>

      </div>
    </main>
  );
}
