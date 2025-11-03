import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/utils/SmoothScroll";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import QueryProvider from "@/utils/QueryProvider";
import Sponsor from "@/components/Sponsor";
import ContactButton from "@/components/ContactButton";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Ecoqual Healthcare Solutions",
  description: "Ecoqual Healthcare Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/images/logo/logo.svg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </head>
      <body className="overflow-x-hidden relative">
        <SmoothScrollProvider>
          <QueryProvider>
            <NavBar />
            {children}
            <Sponsor />
            <Footer />
            <ContactButton/>
          </QueryProvider>
        </SmoothScrollProvider>
        <GoogleAnalytics gaId="G-2DNJTNEBFH" />
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </body>
    </html>
  );
}
