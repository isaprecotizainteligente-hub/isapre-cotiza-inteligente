import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Isapres from "@/components/home/Isapres";
import Navbar from "@/components/home/Navbar";
import Stats from "@/components/home/Stats";
import Testimonials from "@/components/home/Testimonials";
import WhyUs from "@/components/home/WhyUs";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <WhyUs />

      <Stats />

      <Isapres />

      <HowItWorks />

      <Testimonials />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}