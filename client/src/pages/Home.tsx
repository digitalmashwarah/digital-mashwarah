import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import LeadMagnetPopup from "@/components/LeadMagnetPopup";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Handle hash navigation when coming from other pages
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  return (
    <Layout>
      <Hero />
      <About />
      <Services />
      <Industries />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
      <LeadMagnetPopup />
    </Layout>
  );
}
