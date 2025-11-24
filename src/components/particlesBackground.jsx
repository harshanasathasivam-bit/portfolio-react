import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
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
        fullScreen: false,
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: { onHover: { enable: true, mode: "trail" }, resize: true },
          modes: {
            trail: {
              delay: 0.005,
              quantity: 5,
              particles: {
                color: {
                  value:
                    theme === "dark"
                      ? ["#C084FC", "#A855F7", "#E879F9"]
                      : ["#A855F7", "#9333EA", "#7C3AED"],
                },
                move: { speed: 2, outModes: { default: "destroy" } },
                size: { value: 2 },
              },
            },
          },
        },

        particles: {
          number: { value: 120, density: { enable: true, area: 1000 } },
          color: {
            value:
              theme === "dark"
                ? ["#C084FC", "#A855F7", "#E879F9", "#7C3AED"]
                : ["#A855F7", "#8B5CF6", "#9333EA", "#6D28D9"],
          },
          shape: { type: "circle" },
          opacity: {
            value: 1,
            random: true,
            animation: { enable: true, speed: 1, minimumValue: 0.3 },
          },
          size: {
            value: 2,
            random: true,
            animation: { enable: true, speed: 4, minimumValue: 0.5 },
          },

          move: {
            enable: true,
            speed: 0.5,
            random: true,
            outModes: { default: "out" },
            parallax: { enable: true, force: 60, smooth: 15 },
          },

          shadow: {
            enable: true,
            blur: 15,
            color: theme === "dark" ? "#B06CFF" : "#A855F7",
          },
        },
      }}
    />
  );
}
