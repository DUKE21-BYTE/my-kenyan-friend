export default function TermsPage() {
  return (
    <main className="min-h-screen bg-neutral-50 pt-24 pb-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-8 text-sm">Last Updated: February 2026</p>

        <div className="prose prose-gray max-w-none text-gray-700 space-y-6">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">1. Introduction</h2>
            <p>
              MyKenyanFriend ("we", "our", "platform") acts solely as a connector between travelers ("Guests") and local guides ("Friends"). We do not directly provide tour services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">2. Liability Disclaimer</h2>
            <p>
              By using this platform, you acknowledge that travel involves inherent risks. MyKenyanFriend verifies the identity of guides but is <strong>not liable</strong> for:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Personal injury, theft, or accidents during trips.</li>
              <li>Cancellations or disputes directly between Guest and Guide.</li>
              <li>Services provided by third-party vendors (drivers, hotels) booked by guides.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">3. User Conduct</h2>
            <p>
              Guests must treat local guides with respect and pay agreed-upon rates. Guides must provide safe, authentic experiences without scamming or overcharging. Harassment or illegal activities will result in immediate bans.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-2">4. Payments & Refunds</h2>
            <p>
              Deposits made via the platform are refundable up to 48 hours before the trip. Remainder payments are handled directly between Guest and Guide. We are not responsible for cash transactions made off-platform.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
