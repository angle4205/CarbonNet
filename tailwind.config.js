const { heroui } = require("@heroui/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  plugins: [heroui()],
  theme: {
    extend: {
      colors: {
        carbonGreen: {
          DEFAULT: '#059669',
          dark: '#047857',
          light: '#34d399',
        },
        carbonDark: '#0a192f',
        carbonGray: {
          light: '#f3f4f6',
          DEFAULT: '#6b7280',
          dark: '#111827',
        },
        carbonBlue: {
          DEFAULT: '#2563eb',
          dark: '#1e3a8a',
        },
        carbonYellow: {
          DEFAULT: '#facc15',
        },
        carbonRed: {
          DEFAULT: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Roboto', 'Arial', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'carbon': '0 4px 24px 0 rgba(34,197,94,0.08)',
        'carbon-dark': '0 4px 24px 0 rgba(10,25,47,0.24)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      screens: {
        'xs': '400px',
        '3xl': '1920px',
      },
    },
  },
};