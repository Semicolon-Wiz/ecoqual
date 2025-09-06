import About from "@/components/About";
import FourthSection from "@/components/FourthSection";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import SecondComponent from "@/components/SecondComponent";
import ThirdSection from "@/components/ThirdSection";
import WetWash from "@/components/WetWash";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <SecondComponent />
      <ThirdSection />
      {/* <FourthSection /> */}
      {/* <WetWash/> */}
      <About />
      <WhyUs />
      <Products />
    </main>
  );
}
