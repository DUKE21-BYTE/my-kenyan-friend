import { Metadata } from 'next';
import GuideApplicationForm from "@/components/GuideApplicationForm";

export const metadata: Metadata = {
  title: 'Become a Guide | MyKenyanFriend',
  description: 'Join our community of local guides. Earn money by sharing your local knowledge and showing visitors the real Kenya.',
};

export default function BecomeGuidePage() {
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
        <GuideApplicationForm />

      </div>
    </main>
  );
}
