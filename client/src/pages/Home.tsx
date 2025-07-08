import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Blog />
      <Contact />
    </Layout>
  );
}
