import About from "@/components/About";
import AboutWet from "@/components/AboutWet";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SecondComponent from "@/components/SecondComponent";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <About />
      <SecondComponent />
      <AboutWet />
      <Products />
      <WhyUs />
    </main>
  );
}
