import CTA from "@/components/home/CTA";
import Footer from "@/components/home/Footer";
import FAQ from "@/components/home/FAQ";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import Isapres from "@/components/home/Isapres";
import Navbar from "@/components/home/Navbar";
import Testimonials from "@/components/home/Testimonials";
import Advisory from "@/components/home/Advisory";
import Guides from "@/components/home/Guides";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Isapres />

      <HowItWorks />

      <Advisory />

      <Testimonials />

      <Guides />

      <FAQ />

      <CTA />

      <Footer />
    </>
  );
}