import About from "@/components/About";
import AboutUs, { OurMission, OurValues, OurVision } from "@/components/AboutUs";
import AboutWet from "@/components/AboutWet";
import BlogCard from "@/components/BlogCard";
import Hero from "@/components/Hero";
import Instagram from "@/components/Instagram";
import Products from "@/components/Products";
import ProductsCategory, { Category } from "@/components/ProductsCategory";
import SecondComponent from "@/components/SecondComponent";
import Sponsor from "@/components/Sponsor";
import WhyUs from "@/components/WhyUs";

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      {/* <About /> */}
      <AboutUs />
      {/* <OurMission /> */}
      {/* <OurVision /> */}
      {/* <OurValues /> */}
      {/* <SecondComponent/> */}
      {/* <AboutWet /> */}
      <ProductsCategory />
      {/* <Products /> */}
      {/* <Instagram /> */}
      {/* <WhyUs /> */}
      <BlogCard limit={3} />
    </main>
  );
}
