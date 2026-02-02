import Link from "next/link";

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Find Your Local Friend",
      desc: "Browse our directory of verified guides across 47 counties. Filter by language, specialty (safari, nightlife, shopping), and price to find your perfect match."
    },
    {
      num: "02",
      title: "Connect & Plan",
      desc: "Message them directly to discuss your trip. You can book a 'Virtual Coffee' (Zoom) to plan your itinerary or hire them for on-ground support before you arrive."
    },
    {
      num: "03",
      title: "Book Securely",
      desc: "Pay a small deposit through our secure platform to reserve their time. The remaining fee is paid directly to the guide upon arrival. No hidden agency markups."
    },
    {
      num: "04",
      title: "Explore Like an Insider",
      desc: "Land in Kenya knowing you have a trusted friend. Get airport pickups, negotiate fair prices at markets, and see hidden gems safely."
    }
  ];

  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How <span className="text-primary">MyKenyanFriend</span> Works
          </h1>
          <p className="text-lg text-gray-600">
            We are not a typical tour agency. We connect you directly with independent Kenyan experts who act as your personal fixers, guides, and friends.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {steps.map((step) => (
            <div key={step.num} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 text-9xl font-bold text-gray-50 opacity-50 -mr-4 -mt-4 group-hover:text-primary/5 transition-colors">
                {step.num}
              </div>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center font-bold text-xl mb-6">
                  {step.num}
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section (Simplified) */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-16">
          <h2 className="font-serif text-2xl font-bold text-gray-900 mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div>
              <h4 className="font-bold text-gray-800 mb-1">Is it safe?</h4>
              <p className="text-sm text-gray-600">Yes. All guides undergo a strict verification process including ID checks and video interviews. You can also read reviews from past travelers.</p>
            </div>
            <div>
              <h4 className="font-bold text-gray-800 mb-1">What happens if I cancel?</h4>
              <p className="text-sm text-gray-600">Deposits are 100% refundable if you cancel at least 48 hours before your booked date.</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href="/guides" className="inline-block bg-primary hover:bg-accent text-white font-bold text-lg px-8 py-4 rounded-full transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Browse Available Locals &rarr;
          </Link>
        </div>

      </div>
    </main>
  );
}
