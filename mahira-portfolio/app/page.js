import EmberField from "@/components/EmberField";
import Butterflies from "@/components/Butterflies";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import Stats from "@/components/Stats";
import Certificates from "@/components/Certificates";
import Profiles from "@/components/Profiles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-bg min-h-screen">
      <EmberField />
      <Butterflies />
      <Nav />
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Stats />
      <Certificates />
      <Profiles />
      <Contact />
      <Footer />
    </main>
  );
}