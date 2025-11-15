import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/utils/SmoothScroll";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import QueryProvider from "@/utils/QueryProvider";
import Sponsor from "@/components/Sponsor";
import ContactButton from "@/components/ContactButton";
import { GoogleAnalytics } from '@next/third-parties/google'
import Providers from "@/utils/QueryProvider";
import ScrollToHashHandler from "@/utils/ScrollToHashHandler";
import { Suspense } from "react";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.ecoqual.in'),
  title: 'Ecoqual | Innovative Hygiene & Healthcare Solutions in India',
  description:
    'Ecoqual offers eco-friendly hygiene and healthcare products designed for hospitals, clinics, and homes. Trusted quality, sustainable solutions, and care.',
  alternates: {
    canonical: 'https://www.ecoqual.in',
  },
  openGraph: {
    title: 'Ecoqual | Innovative Hygiene & Healthcare Solutions in India',
    description:
      'Ecoqual offers eco-friendly hygiene and healthcare products designed for hospitals, clinics, and homes. Trusted quality, sustainable solutions, and care.',
    url: 'https://www.ecoqual.in',
    siteName: 'EcoQual Healthcare Solution',
    images: [
      {
        url: 'https://www.ecoqual.in/images/logo/logo.svg',
        width: 1200,
        height: 630,
        alt: 'EcoQual Healthcare Solution',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ecoqual | Innovative Hygiene & Healthcare Solutions in India',
    description:
      'Ecoqual offers eco-friendly hygiene and healthcare products designed for hospitals, clinics, and homes. Trusted quality, sustainable solutions, and care.',
    images: ['https://www.ecoqual.in/images/logo/logo.svg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo/logo.svg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="overflow-x-hidden relative">
        <SmoothScrollProvider>
          <Suspense fallback={null}>
            <ScrollToHashHandler />
          </Suspense>
          <Providers>
            <NavBar />
            {children}
            <Sponsor />
            <Footer />
            <ContactButton />
          </Providers>
        </SmoothScrollProvider>
        <GoogleAnalytics gaId="G-2DNJTNEBFH" />
      </body>
    </html>
  );
}
