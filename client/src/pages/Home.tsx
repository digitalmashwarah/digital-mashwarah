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

export default function Home() {
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
