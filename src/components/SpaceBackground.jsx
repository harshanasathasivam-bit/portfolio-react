import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

/**
 * NOTE: this component references your uploaded reference image at:
 * /mnt/data/8a7c673c-5133-4190-baee-d0741a92c2f5.png
 *
 * The path above will be transformed to an accessible URL in your environment.
 * If you prefer to put the image in /public, rename to e.g. /public/space-ref.png
 * and update the `nebulaUrl` below to "/space-ref.png".
 */
export default function SpaceBackground() {
  const nebulaUrl = "/mnt/data/8a7c673c-5133-4190-baee-d0741a92c2f5.png";

  const [theme, setTheme] = useState(
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  useEffect(() => {
    const obs = new MutationObserver(() => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    });
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  // theme-based tint colors (from your tailwind.config)
  const primaryLight = "#8b5cf6";
  const secondaryLight = "#a78bfa";
  const primaryDark = "#b794f4";
  const secondaryDark = "#d0bfff";

  return (
    <>
      {/* Nebula image overlay (subtle, centered, blurred) */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -30,
          backgroundImage: `url("${nebulaUrl}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: theme === "dark" ? 0.42 : 0.22,
          filter: "blur(28px) saturate(120%) contrast(105%)",
          transform: "scale(1.05)",
          pointerEvents: "none",
        }}
      />

      {/* subtle vignette to make center pop */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          zIndex: -25,
          pointerEvents: "none",
          background:
            theme === "dark"
              ? "radial-gradient(ellipse at 50% 40%, rgba(0,0,0,0) 35%, rgba(12,7,20,0.45) 100%)"
              : "radial-gradient(ellipse at 50% 40%, rgba(255,255,255,0) 35%, rgba(208,199,240,0.28) 100%)",
        }}
      />

      {/* Particles stars + streaks */}
      <Particles
        id="space-particles"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          zIndex: -20,
          pointerEvents: "none",
        }}
        options={{
          fullScreen: false,
          background: { color: "transparent" },
          fpsLimit: 60,
          particles: {
            number: { value: 100, density: { enable: true, area: 1000 } },

            color: {
              value:
                theme === "dark"
                  ? [primaryDark, secondaryDark, "#c084fc"]
                  : [primaryLight, secondaryLight, "#7c3aed"],
            },

            shape: { type: ["circle", "star"] },

            opacity: {
              value: 0.9,
              random: true,
              animation: { enable: true, speed: 0.8, minimumValue: 0.2 },
            },

            size: {
              value: { min: 0.6, max: 3.2 },
              random: true,
            },

            // thin motion streaks to emulate long light streaks
            move: {
              enable: true,
              speed: 0.8,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
              trail: { enable: false },
              parallax: { enable: true, force: 50, smooth: 20 },
            },

            // linked lines for subtle network effect (turned very soft)
            links: {
              enable: true,
              distance: 140,
              color: theme === "dark" ? primaryDark : primaryLight,
              opacity: 0.14,
              width: 0.9,
            },

            shadow: {
              enable: true,
              blur: 18,
              color: theme === "dark" ? primaryDark : primaryLight,
            },
          },

          interactivity: {
            detectsOn: "window",
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              repulse: { distance: 120, duration: 0.4 },
              push: { quantity: 3 },
            },
          },

          // occasional glowing streaks (shooting stars)
          emitters: [
            {
              direction: "bottom-right",
              rate: { delay: 6, quantity: 1 },
              size: { width: 0, height: 0 },
              position: { x: 0, y: 20 },
              particles: {
                life: { duration: { min: 2.8, max: 4.8 } },
                size: { value: 2 },
                move: { speed: { min: 6, max: 10 }, outModes: { default: "destroy" }, straight: true },
                color: { value: theme === "dark" ? primaryDark : primaryLight },
                shape: { type: "circle" },
                shadow: { enable: true, blur: 20, color: theme === "dark" ? primaryDark : primaryLight },
              },
            },
            // occasional drifting planet images (if you add them)
            // you can add image emitters here if you want planets/rocket sprites
          ],

          detectRetina: true,
        }}
      />
    </>
  );
}
