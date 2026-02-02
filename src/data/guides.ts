export interface Guide {
  id: number;
  name: string;
  county: string;
  rating: number;
  reviews: number;
  rate: number;
  unit: string;
  services: string[];
  bio: string;
  fullBio?: string;
  source: string; // The platform they are verified on (ToursByLocals, etc.)
  image: string | null;
  languages?: string[];
  verified?: boolean;
}

export const GUIDES: Guide[] = [
  {
    id: 1,
    name: "Kabiru W.",
    county: "Nairobi",
    rating: 5.0,
    reviews: 9,
    rate: 30,
    unit: "hr",
    services: ["Guide", "Bargaining", "Logistics", "Virtual"],
    bio: "Nairobi expert helping with city exploration, markets, wildlife spots like Nairobi National Park, and avoiding tourist traps.",
    fullBio: "Hello! I am Kabiru, born and raised in Nairobi. I specialize in showing you the real Nairobi beyond the headlines. Whether you want to safely navigate Gikomba market, feed giraffes, or just have a reliable friend to help you get around, I am your guy. I have 5 years of experience guiding tourists from the USA and Europe.",
    source: "ToursByLocals",
    image: null, 
    languages: ["English", "Swahili", "Kikuyu"],
    verified: true
  },
  {
    id: 2,
    name: "Jacqueline N.",
    county: "Nairobi",
    rating: 5.0,
    reviews: 47,
    rate: 35,
    unit: "hr",
    services: ["Guide", "Virtual", "Culture", "Logistics"],
    bio: "Multilingual (German, English) Nairobi pro for personalized city tours, cultural immersion, and full trip planning.",
    fullBio: "Herzlich Willkommen! I'm Jacqueline. If you need a German-speaking guide in Nairobi or planning a full Kenya safari, I can help. I have planned over 200 successful trips and love sharing our deep cultural heritage.",
    source: "ToursByLocals",
    image: null,
    languages: ["English", "German", "Swahili"],
    verified: true
  },
  {
    id: 3,
    name: "Kevin L.",
    county: "Nanyuki",
    rating: 5.0,
    reviews: 19,
    rate: 60,
    unit: "hr",
    services: ["Safari", "Guide", "Virtual", "Logistics"],
    bio: "Covers Nairobi, Mount Kenya areas, and safaris. Multilingual. Great for off-beaten-path adventures and family trips.",
    source: "ToursByLocals",
    image: null
  },
  {
    id: 4,
    name: "Daniel A.",
    county: "Malindi",
    rating: 4.8, 
    reviews: 5,
    rate: 35,
    unit: "hr",
    services: ["Guide", "Culture", "Logistics"],
    bio: "Malindi-based for Watamu beaches, marine parks, Gede Ruins, coastal culture, and authentic experiences without markup.",
    source: "ToursByLocals",
    image: null
  },
  {
    id: 5,
    name: "Swabra M.",
    county: "Mombasa",
    rating: 5.0,
    reviews: 14,
    rate: 40,
    unit: "hr",
    services: ["Guide", "Virtual", "Culture", "Bargaining"],
    bio: "Mombasa specialist (English, German+) for Old Town, Fort Jesus, beaches, Haller Park, and Swahili culture.",
    source: "ToursByLocals",
    image: null
  },
  {
    id: 6,
    name: "Joseph N.",
    county: "Nairobi",
    rating: 5.0,
    reviews: 100,
    rate: 50,
    unit: "session",
    services: ["Virtual", "Logistics", "Guide", "Safari"],
    bio: "20+ years licensed nationwide expert. Former guide turned consultant for custom planning, hidden gems, and vetted bookings.",
    source: "Go Ask A Local",
    image: null
  },
  {
    id: 7,
    name: "Raphael Rotiken",
    county: "Narok",
    rating: 4.9,
    reviews: 12,
    rate: 80,
    unit: "day",
    services: ["Safari", "Guide", "Culture"],
    bio: "Maasai community expert for real Mara experiences, wildlife, cultural villages, and avoiding big-tour overcharges.",
    source: "TourHQ",
    image: null
  },
  {
    id: 8,
    name: "Claire Gitau",
    county: "Nairobi",
    rating: 4.9,
    reviews: 30,
    rate: 45,
    unit: "hr",
    services: ["Safari", "Guide", "Logistics"],
    bio: "Passionate about Kenya's parks, coast, and personalized wildlife/cultural tours with strong traveler feedback.",
    source: "GoWithGuide",
    image: null
  }
];
