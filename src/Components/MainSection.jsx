import { ArrowDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export const MainSection = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Harshana";
  const [showCursor, setShowCursor] = useState(true);
  const [triggerAnimation, setTriggerAnimation] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);
  const sectionRef = useRef(null);

  // Trigger animation on mount
  useEffect(() => {
    // Start typewriter effect
    setTriggerAnimation(1);

    // Trigger card zoom animation
    const timer = setTimeout(() => {
      setCardVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect - runs whenever triggerAnimation changes
  useEffect(() => {
    if (triggerAnimation === 0) return; // Don't run on initial render before observer

    let index = 0;
    setDisplayText(""); // Reset text
    setShowCursor(true); // Show cursor

    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        // Stop cursor blinking after typing is complete
        setTimeout(() => setShowCursor(false), 500);
      }
    }, 150); // 150ms per character

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [triggerAnimation]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex justify-center items-center pt-20 overflow-hidden"
    >
      {/* ⭐ MAIN CARD CONTAINER */}
      <div
        className={`relative z-10 w-[85%] max-w-6xl h-[75vh] bg-white dark:bg-gray-900 
        backdrop-blur-xl rounded-2xl shadow-xl flex items-center justify-center
        transition-all duration-1000 ease-out ${cardVisible
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-50'
          }`}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full h-full px-10">

          {/* LEFT SIDE CONTENT */}
          <div className="text-center lg:text-left space-y-4">

            {/* TITLE – DARK ALWAYS WITH TYPEWRITER */}
            <h1 className="text-5xl font-bold text-[#301934] dark:text-[#645394]">
              {displayText}
              {showCursor && <span className="border-r-4 border-[#301934] dark:border-[#645394] ml-1"></span>}
            </h1>

            {/* SUBTITLE – DARK ALWAYS */}
            <h2 className="text-2xl md:text-3xl font-semibold text-[#CEA2FD] dark:text-[#9E7BB5] animate-fade-in-delay-1">
              I build things for the web 🌐
            </h2>

            {/* PARAGRAPH – DARK ALWAYS */}
            <p className="text-lg max-w-xl mx-auto lg:mx-0 text-[#743089] dark:text-[#743089] animate-fade-in-delay-2">
              I'm a passionate frontend developer specializing in modern,
              responsive web apps.
            </p>

            {/* BUTTON – DARK THEME BUTTON */}
            <div className="pt-4 animate-fade-in-delay-3">
              <a
                href="#projects"
                className="px-8 py-3 rounded-lg bg-[#3A025B] text-white font-semibold 
      shadow-lg hover:bg-[#000000] hover:scale-105 transition inline-block"
              >
                View My Work
              </a>
            </div>
          </div>



          {/* ⭐ RIGHT SIDE IMAGE */}
          <div className="relative flex justify-center items-center">

            {/* PERFECT CENTERED PURPLE SHADE */}
            <img
              src="/bg-shade.png"
              className="absolute inset-0 m-auto w-[380px] md:w-[550px] lg:w-[650px] opacity-80 -z-10"
            />

            {/* MAIN PHOTO PERFECTLY CENTERED */}
            <img
              src="/shana1.png"
              alt="Harshana"
              className="relative w-[48%] md:w-[52%] lg:w-[55%] drop-shadow-2xl animate-fade-in-delay-3"
            />
          </div>

        </div>
      </div>

      {/* ⭐ SCROLL INDICATOR */}
      <div className="absolute text-secondary bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span>Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
