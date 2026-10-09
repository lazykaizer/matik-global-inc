import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://www.maticglobal.com';

  const routes = [
    '',
    '/applications',
    '/aiml',
    '/erp',
    '/cybersecurity',
    '/cloudstrategy',
    '/compliances',
    '/accountingtax',
    '/ourcompany',
    '/contactus',
    '/privacypolicy',
    '/disclaimer',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
