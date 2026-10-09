import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ChatWidget } from "@/components/widgets/ChatWidget";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} - ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: "AI-first digital transformation for life sciences, manufacturing, consumer products, financial services and growth-stage SMBs.",
  openGraph: {
    title: siteConfig.name,
    description: "AI-first digital transformation for life sciences, manufacturing, consumer products, financial services and growth-stage SMBs.",
    url: 'https://www.maticglobal.com',
    siteName: siteConfig.name,
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: "AI-first digital transformation",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: 'https://www.maticglobal.com',
    logo: 'https://www.maticglobal.com/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteConfig.contactPhone,
      contactType: 'customer service',
      email: siteConfig.contactEmail
    },
    sameAs: [
      siteConfig.socialLinks.linkedin,
      siteConfig.socialLinks.x,
      siteConfig.socialLinks.facebook
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col pt-20 relative">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1 flex flex-col relative z-0">
          {children}
        </main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
