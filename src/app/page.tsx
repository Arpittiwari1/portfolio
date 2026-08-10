import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CaseStudies from "@/components/CaseStudies";
import Skills from "@/components/Skills";
import CodingProfile from "@/components/CodingProfile";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <CaseStudies />
        <Skills />
        <CodingProfile />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
