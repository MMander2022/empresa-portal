import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div
      style={{
        background: "radial-gradient(circle at top,#1e3a8a 0%,#020617 45%)",
        minHeight: "100vh",
        overflowX: "hidden"
      }}
    >
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}