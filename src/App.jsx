import "./App.css";

import Certificates from "./components/Certificates/Certificates";
import ParticlesBackground from "./components/ParticlesBackground/ParticlesBackground";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Github from "./components/Github/Github";
import Stats from "./components/Stats/Stats";
import Timeline from "./components/Timeline/Timeline";
import PasswordChecker from "./components/PasswordChecker/PasswordChecker";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./components/ScrollTop/ScrollTop";

function App() {
  return (
    <div className="App">
        <ParticlesBackground />
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="github">
          <Github />
        </section>
        <section id="certificates">
  <Certificates />
</section>
        <section id="stats">
          <Stats />
        </section>
        <section id="timeline">
          <Timeline />
        </section>
        <section id="password-checker">
          <PasswordChecker />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ScrollTop />
    </div>
  );
}

export default App;