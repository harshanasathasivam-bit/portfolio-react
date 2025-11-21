import React, { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") return true;
    if (saved === "light") return false;
    return false;
  });

  // Sync initial state with document
  useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggle = () => {
    const newDark = document.documentElement.classList.toggle("dark"); 
    setIsDark(newDark);
    localStorage.setItem("theme", newDark ? "dark" : "light");

    const el = document.getElementById("theme-toggle");
    if (el) {
      el.classList.add("spin", "glow-flash");
      setTimeout(() => el.classList.remove("spin", "glow-flash"), 800);
    }
  };

  return (
    <button
      id="theme-toggle"
      onClick={toggle}
      className="ml-4 text-2xl text-violet-500 dark:text-violet-300 hover:scale-110 transition"
    >
      {isDark ? "🌙" : "☀"}
    </button>
  );
}
