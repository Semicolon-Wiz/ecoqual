import About from "@/components/About";
import FourthSection from "@/components/FourthSection";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SecondComponent from "@/components/SecondComponent";
import WetWash from "@/components/WetWash";
import WhyUs from "@/components/WhyUs";
import AboutWet from "./wet-wash-gloves/AboutWet";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <SecondComponent />
      <AboutWet/>
      <FourthSection />
      <WetWash/>
      <About />
      <WhyUs />
      <Products />
    </main>
  );
}
