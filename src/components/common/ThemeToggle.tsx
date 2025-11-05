import React from "react";

// Simple theme toggle using Tailwind's dark mode (class strategy)
// This assumes Tailwind is set up with 'class' dark mode in tailwind.config.js

const ThemeToggle: React.FC = () => {
  const [isDark, setIsDark] = React.useState(() =>
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  React.useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  React.useEffect(() => {
    // On mount, check localStorage
    const theme = localStorage.getItem("theme");
    if (theme === "dark") setIsDark(true);
    if (theme === "light") setIsDark(false);
  }, []);

  return (
    <button
      aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      className="flex items-center gap-2 px-2 py-1 rounded-full border border-orange-400 bg-white dark:bg-carbonDark text-orange-500 dark:text-orange-300 shadow transition hover:bg-orange-50 dark:hover:bg-carbonDark/80 focus:outline-none"
      onClick={() => setIsDark((v) => !v)}
      type="button"
    >
      <span className="sr-only">{isDark ? "Modo oscuro activado" : "Modo claro activado"}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        {isDark ? (
          // Moon icon
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z"
          />
        ) : (
          // Sun icon
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v1m0 16v1m8.66-13.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 5.66l-.71-.71M4.05 4.93l-.71-.71M12 5a7 7 0 100 14 7 7 0 000-14z"
          />
        )}
      </svg>
      <span className="text-xs font-medium hidden sm:inline">
        {isDark ? "Oscuro" : "Claro"}
      </span>
    </button>
  );
};

export default ThemeToggle;
