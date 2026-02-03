"use client";

import { useState } from "react";
import Link from "next/link";

export default function GuideApplicationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    county: "Nairobi",
    experience: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({ fullName: "", email: "", whatsapp: "", county: "Nairobi", experience: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
          ✓
        </div>
        <h1 className="font-serif text-2xl font-bold text-gray-900 mb-2">Application Received!</h1>
        <p className="text-gray-600">
          Asante sana! We will review your profile and contact you within 48 hours via WhatsApp for a quick video interview.
        </p>
        <button 
          onClick={() => setSubmitted(false)}
          className="mt-6 text-primary hover:underline font-bold"
        >
          Submit Another Application
        </button>
        <div className="mt-4">
          <Link href="/" className="text-gray-500 hover:text-gray-900 text-sm">Return Home</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6">Apply to be a Guide</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
          <input 
            required 
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            type="text" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
          <input 
            required 
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email" 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">WhatsApp Number</label>
          <input 
            required 
            name="whatsapp"
            value={formData.whatsapp}
            onChange={handleChange}
            type="tel" 
            placeholder="+254..." 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none" 
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Base County</label>
          <select 
            name="county"
            value={formData.county}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-primary outline-none"
          >
            <option value="Nairobi">Nairobi</option>
            <option value="Mombasa">Mombasa</option>
            <option value="Kisumu">Kisumu</option>
            <option value="Nakuru">Nakuru</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">Tell us about your experience</label>
          <textarea 
            required 
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            rows={4} 
            placeholder="e.g. I have 3 years experience guiding in Maasai Market..." 
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary outline-none"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={submitting}
          className={`w-full text-white font-bold py-4 rounded-xl transition-all shadow-md mt-2 ${
            submitting ? "bg-gray-400 cursor-not-allowed" : "bg-primary hover:bg-accent"
          }`}
        >
          {submitting ? "Sending..." : "Submit Application"}
        </button>
        <p className="text-xs text-center text-gray-500 mt-2">
          By applying, you agree to our Terms and Code of Conduct.
        </p>
      </form>
    </div>
  );
}
