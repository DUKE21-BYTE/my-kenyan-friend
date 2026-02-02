import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
             <div className="relative w-8 h-8 overflow-hidden rounded-full border border-gray-600">
               <Image 
                 src="/images/logo.png" 
                 alt="Logo" 
                 width={32} 
                 height={32} 
                 className="object-cover"
               />
             </div>
             <span className="font-serif font-bold text-xl text-white">
               MyKenyan<span className="text-primary">Friend</span>
             </span>
          </div>
          <p className="text-sm text-gray-400">
            Connecting authentic travelers with trusted local friends in Kenya for safe, scam-free experiences.
          </p>
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} MyKenyanFriend. Made in Nairobi 🇰🇪
          </div>
        </div>

        {/* Explore */}
        <div>
          <h3 className="font-bold text-white mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/guides" className="hover:text-primary transition-colors">Browse Guides</Link></li>
            <li><Link href="/counties" className="hover:text-primary transition-colors">Counties</Link></li>
            <li><Link href="/how-it-works" className="hover:text-primary transition-colors">How it Works</Link></li>
            <li><Link href="/become-a-guide" className="hover:text-primary transition-colors">Become a Guide</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-bold text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
            <li><Link href="/safety" className="hover:text-primary transition-colors">Safety Tips</Link></li>
            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-bold text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link href="/conduct" className="hover:text-primary transition-colors">Code of Conduct</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
