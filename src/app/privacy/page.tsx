export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8 text-sm">Last Updated: February 2026</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Data Collection</h2>
            <p>
              We collect minimal personal information necessary to facilitate bookings, including your name, email address, and trip details. We comply with the <strong>Kenya Data Protection Act, 2019</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. How We Use Data</h2>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>To connect you with your selected local guide.</li>
              <li>To process secure payments.</li>
              <li>To send booking Confirmations and safety tips.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. Data Sharing</h2>
            <p>
              We do <strong>not</strong> sell your data. We share your contact details <em>only</em> with the confirmed guide you book, strictly for coordination purposes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
