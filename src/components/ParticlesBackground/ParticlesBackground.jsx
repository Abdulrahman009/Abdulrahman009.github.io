import "./ParticlesBackground.css";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticlesBackground() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="particles"
      init={particlesInit}
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },

        background: {
          color: {
            value: "#050816",
          },
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#38bdf8",
          },

          links: {
            enable: true,
            color: "#38bdf8",
            distance: 150,
            opacity: 0.25,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: {
              min: 1,
              max: 4,
            },
          },

          opacity: {
            value: 0.5,
          },
        },

        detectRetina: true,
      }}
    />
  );
}

export default ParticlesBackground;