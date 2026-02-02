import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "MyKenyanFriend | Rent a Local Guide in Kenya",
  description: "Connect with verified Kenyan locals for authentic, scam-free travel experiences. Plan your trip, find a friend, and explore 47 counties safely.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${poppins.variable} antialiased font-sans text-gray-900 bg-neutral-50`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
