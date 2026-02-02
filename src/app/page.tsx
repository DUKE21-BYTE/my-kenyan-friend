import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Content Spacer for now - Sections like "How It Works" and "Featured Guides" will go here */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto text-center">
        <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">Why Choose a Local Friend?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Skip the tourist traps. Our verified locals help you negotiate fair prices, navigate safely, and discover the real Kenya that guidebooks miss.
        </p>
      </section>
    </main>
  );
}
