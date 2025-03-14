import CaseStudy from "@/components/CaseStudy";
import About from "../components/About";
import Banner from "../components/Banner";
import Brands from "../components/Brands";
// import Pricing from "../components/Pricing";
import Service from "../components/Service";
import Testimonial from "../components/Testimonial";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Brands />
      <Service />
      {/* <Pricing /> */}
      <CaseStudy />
      <Testimonial />
      <Contact />
    </>
  );
}
