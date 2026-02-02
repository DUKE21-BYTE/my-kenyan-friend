"use client";

import { useState } from "react";

export default function BecomeGuidePage() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // Simulate API call
    setSubmitted(true);
    setTimeout(() => alert("Application simulation: Data sent!"), 100);
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-neutral-50 flex items-center justify-center px-4">
        <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
            ✓
          </div>
          <h1 className="font-serif text-2xl font-bold text-gray-900 mb-2">Application Received!</h1>
          <p className="text-gray-600">
            Asante sana! We will review your profile and contact you within 48 hours for a quick video interview.
          </p>
          <button 
            onClick={() => window.location.href = '/'}
            className="mt-6 text-primary hover:underline font-bold"
          >
            Return Home
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Copy & Benefits */}
        <div>
           <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
             Share Your Kenya, <br/>
             <span className="text-primary">Earn on Your Terms.</span>
           </h1>
           <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             Join the fastest-growing community of local experts. Whether you are a professional guide, a history buff, or just a friendly local who knows the best spots, MyKenyanFriend helps you monetize your knowledge.
           </p>

           <div className="space-y-6">
             <div className="flex gap-4">
               <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">
                 $
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 text-lg">Set Your Own Rates</h3>
                 <p className="text-gray-600 text-sm">You decide how much you charge per hour or per day. We take a small commission only when you get booked.</p>
               </div>
             </div>

             <div className="flex gap-4">
               <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">
                 📅
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 text-lg">Flexible Schedule</h3>
                 <p className="text-gray-600 text-sm">Work when you want. Block out dates on your calendar instantly.</p>
               </div>
             </div>

             <div className="flex gap-4">
               <div className="w-12 h-12 bg-green-50 text-green-600 rounded-xl flex items-center justify-center text-xl font-bold flex-shrink-0">
                 🔒
               </div>
               <div>
                 <h3 className="font-bold text-gray-900 text-lg">Safe & Scam-Free</h3>
                 <p className="text-gray-600 text-sm">We verify all guests and handle payments securely, so you never have to chase clients for money.</p>
               </div>
             </div>
           </div>
        </div>

        {/* Right Column: Application Form */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Apply to be a Guide</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">First Name</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Last Name</label>
                <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
              <input required type="email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp Number</label>
              <input required type="tel" placeholder="+254..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" />
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Base County</label>
              <select className="w-full p-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-primary outline-none">
                <option>Nairobi</option>
                <option>Mombasa</option>
                <option>Kisumu</option>
                <option>Nakuru</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Tell us about your experience</label>
              <textarea required rows={4} placeholder="e.g. I have 3 years experience guiding in Maasai Market..." className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary hover:bg-accent text-white font-bold py-4 rounded-xl transition-all shadow-md mt-2">
              Submit Application
            </button>
            <p className="text-xs text-center text-gray-500 mt-2">
              By applying, you agree to our Terms and Code of Conduct.
            </p>
          </form>
        </div>

      </div>
    </main>
  );
}
