
import { Metadata } from 'next';

const baseUrl = 'https://mykenyanfriend.com'; // Replace with your actual domain

export default function Sitemap() {
  const staticRoutes = [
    '',
    '/how-it-works',
    '/become-a-guide',
    '/counties',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // In a real scenario, you would fetch counties dynamically here
  // For now, we can hardcode key ones or map the data
  const countyRoutes = Array.from({ length: 47 }, (_, i) => ({
    url: `${baseUrl}/counties/${i + 1}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...countyRoutes];
}
