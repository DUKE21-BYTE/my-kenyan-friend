export default function ConductPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">Code of Conduct</h1>
        <p className="text-gray-500 mb-8 text-sm">For Guests and Guides</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">Our Promise: Authenticity & Respect</h2>
            <p>
              MyKenyanFriend is built on trust. Both travelers and locals are expected to adhere to these core principles.
            </p>
          </section>

          <div className="grid md:grid-cols-2 gap-8 mt-6">
             <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-900 text-lg mb-2">For Guests</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-blue-800">
                   <li>Respect local culture and dress codes (especially in coastal/religious areas).</li>
                   <li>Pay fair prices as agreed. Do not aggressively under-haggle services.</li>
                   <li>Be communicated clearly about expectations before the trip.</li>
                </ul>
             </div>

             <div className="bg-green-50 p-6 rounded-xl border border-green-100">
                <h3 className="font-bold text-green-900 text-lg mb-2">For Guides</h3>
                <ul className="list-disc pl-5 space-y-2 text-sm text-green-800">
                   <li>Zero scam policy: No hidden commissions or forced shop visits.</li>
                   <li>Punctuality and professionalism are mandatory.</li>
                   <li>Ensure guest safety at all times.</li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
