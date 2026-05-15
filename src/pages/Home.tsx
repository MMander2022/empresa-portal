import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Services from "../components/Services";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function Home() {

    return (

        <div
            className="min-h-screen"
            style={{
                background:
                    "linear-gradient(180deg,#020617 0%,#0f172a 100%)"
            }}
        >

            <Navbar />

            <Hero />

            <TechStack />

            <Services />

            <Projects />
            <Contact />
            <Footer />

        </div>

    );

}