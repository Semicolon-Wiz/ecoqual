import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FourthSection from "@/components/FourthSection";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SecondComponent from "@/components/SecondComponent";
import ThirdSection from "@/components/ThirdSection";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <SecondComponent />
      <ThirdSection/>
      <FourthSection/>
      <Products />
      <ContactForm/>
      <Footer />
    </main>
  );
}
