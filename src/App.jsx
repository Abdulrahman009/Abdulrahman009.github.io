import "./App.css";
import { useEffect, useState } from "react";

// Components
import Loader from "./components/Loader/Loader";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Github from "./components/Github/Github";
import Stats from "./components/Stats/Stats";
import Timeline from "./components/Timeline/Timeline";
import Certificates from "./components/Certificates/Certificates";
import PasswordChecker from "./components/PasswordChecker/PasswordChecker";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      {/* Animated Background */}
      <ParticlesBackground />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Github />
        <Stats />
        <Timeline />
        <Certificates />
        <PasswordChecker />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollTop />
    </div>
  );
}

export default App;