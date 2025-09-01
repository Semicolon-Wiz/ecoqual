import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SecondComponent from "@/components/SecondComponent";
import ThirdSection from "@/components/ThirdSection";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <SecondComponent />
      <ThirdSection />
      <FourthSection />
      <About />
      <WhyUs />
      <Products />
      <ContactForm />
      <Footer />
    </main>
  );
}
