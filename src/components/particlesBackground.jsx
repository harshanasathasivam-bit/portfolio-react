import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    // detect theme changes
    const observer = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark")
          ? "dark"
          : "light"
      );
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -20,
      }}
      options={{
        fpsLimit: 60,
        fullScreen: false,

        background: { color: "transparent" },

        particles: {
          number: {
            value: 80,
            density: { enable: true, area: 900 },
          },

          // ⭐ Galaxy colors change in light & dark mode
          color: {
            value:
              theme === "dark"
                ? ["#C084FC", "#A855F7", "#8B5CF6", "#E879F9"]
                : ["#A855F7", "#9333EA", "#7C3AED", "#6D28D9"],
          },

          shape: { type: "circle" },

          opacity: {
            value: 1,
            random: true,
            animation: {
              enable: true,
              speed: 0.6,
              minimumValue: 0.3,
            },
          },

          size: {
            value: 2.2,
            random: true,
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.3,
            },
          },

          twinkle: {
            particles: {
              enable: true,
              frequency: 0.05,
              opacity: 1,
            },
          },

          move: {
            enable: true,
            speed: 0.4,
            direction: "none",
            random: true,
            outModes: { default: "out" },
          },

          // 🌟 Glow aura around particles
          shadow: {
            enable: true,
            blur: 12,
            color:
              theme === "dark"
                ? "#AA66FF"
                : "#A855F7",
          },

          // ☄️ Shooting Stars
          roll: {
            enable: true,
            speed: 15,
            darken: { enable: true, value: 20 },
          },
        },

        detectRetina: true,

        // 🪐 Parallax depth feeling
        interactivity: {
          detectsOn: "window",
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
      }}
    />
  );
}
