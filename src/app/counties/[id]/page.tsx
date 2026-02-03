"use client";

import { use } from "react";
import Link from "next/link";
import { COUNTIES_DATA } from "@/data/counties";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const { id } = await params;
  const countyId = Number(id);
  const county = COUNTIES_DATA.find(c => c.id === countyId);
 
  if (!county) {
    return {
      title: 'County Not Found',
    }
  }
 
  return {
    title: `${county.name} County - Attractions & Guides`,
    description: county.description,
    openGraph: {
      title: `Explore ${county.name} County | MyKenyanFriend`,
      description: county.description,
      images: [county.image],
    },
  }
}

export default function CountyDetail({ params }: Props) {
  const { id } = use(params);
  const countyId = Number(id);

  const county = COUNTIES_DATA.find(c => c.id === countyId);

  if (!county) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">County Not Found</h1>
          <Link href="/counties" className="text-primary hover:underline mt-4 block">Return to Counties</Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumb */}
        <Link href="/counties" className="text-gray-500 hover:text-primary text-sm flex items-center gap-1 mb-6">
          &larr; Back to Counties
        </Link>
        
        {/* Banner */}
        <div className="relative h-64 md:h-80 w-full rounded-2xl overflow-hidden mb-8 group">
          <img 
            src={county.image} 
            alt={county.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
             <div className="flex items-center gap-3 mb-2">
               <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">Code {county.id}</span>
               <span className="text-white/80 font-bold uppercase tracking-wider text-sm">{county.region} Region</span>
             </div>
             <h1 className="font-serif text-4xl md:text-5xl font-bold text-white shadow-sm">{county.name} County</h1>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Left: Main Info */}
           <div className="md:col-span-2 space-y-8">
              <section className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <h2 className="font-serif text-2xl font-bold text-gray-900 mb-4">Overview</h2>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {county.description}
                </p>
              </section>

              <section>
                <h2 className="font-bold text-gray-900 text-xl mb-4 flex items-center gap-2">
                  <span>Top Attractions</span>
                  <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">{county.attractions.length}</span>
                </h2>
                <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
                  {county.attractions.map((attraction, index) => (
                    <div key={index} className="p-4 border-b border-gray-100 last:border-0 hover:bg-neutral-50 transition-colors flex items-start gap-4">
                       <span className="text-primary font-bold bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-sm">
                         {index + 1}
                       </span>
                       <div>
                         <h3 className="font-bold text-gray-900">{attraction}</h3>
                         <p className="text-sm text-gray-500 mt-1">
                           One of the key landmarks in {county.name}, popular for visitors.
                         </p>
                       </div>
                    </div>
                  ))}
                </div>
              </section>
           </div>

           {/* Right: Actions */}
           <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-md sticky top-24">
                 <h3 className="font-bold text-gray-900 text-lg mb-4">Visit {county.name}</h3>
                 <p className="text-sm text-gray-600 mb-6">
                   Want to explore {county.name}? Find a local guide who knows this area best.
                 </p>
                 <Link 
                   href="/guides" 
                   className="block w-full bg-primary hover:bg-accent text-white font-bold py-3 rounded-lg text-center transition-all shadow-sm mb-3"
                 >
                   Find a Local Guide
                 </Link>
                 <button className="block w-full bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-lg transition-all">
                   Save for Later
                 </button>
              </div>
           </div>
        </div>

      </div>
    </main>
  );
}
