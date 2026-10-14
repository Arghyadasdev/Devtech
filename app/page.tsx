import Navbar from "@/components/Navbar";
import Chatbot from "@/components/Chatbot";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import MetroHero from "@/components/ui/scroll-locked-video-hero";
import Services from "@/components/Services";
import Showcase from "@/components/Showcase";
import Projects from "@/components/Projects";
import WhyUs from "@/components/WhyUs";
import TechStack from "@/components/TechStack";
import About from "@/components/About";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main style={{ background: "var(--bg)" }}>
      <Navbar />
      <Hero />
      <Stats />
      <MetroHero
        title="BUILT TO SCALE"
        tagline="Every system we ship opens a new door for what's next."
        scrollHint="SCROLL"
        signature={{ name: "Dev Technology", url: "https://devtech.live" }}
      />
      <Services />
      <Showcase />
      <Projects />
      <WhyUs />
      <TechStack />
      <About />
      <Process />
      <CTA />
      <Contact />
      <Footer />
      <Chatbot />
    </main>
  );
}
