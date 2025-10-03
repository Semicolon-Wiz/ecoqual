import About from "@/components/About";
import AboutWet from "@/components/AboutWet";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Products from "@/components/Products";
import ProductsCategory from "@/components/ProductsCategory";
import Sponsor from "@/components/Sponsor";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <About />
      <AboutWet />
      <ProductsCategory />
      <Products />
      <Instagram/>
      <WhyUs />
      <Sponsor />
    </main>
  );
}
