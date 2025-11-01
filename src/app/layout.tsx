import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollProvider from "@/utils/SmoothScroll";
import NavBar from "@/components/NavBar";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import QueryProvider from "@/utils/QueryProvider";
import Sponsor from "@/components/Sponsor";

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
      <body className="overflow-x-hidden">
        <SmoothScrollProvider>
          <QueryProvider>
            <NavBar />
            {children}
            <Sponsor />
            <ContactForm />
            <Footer />
          </QueryProvider>
        </SmoothScrollProvider>
        <script src="https://elfsightcdn.com/platform.js" async></script>
      </body>
    </html>
  );
}
