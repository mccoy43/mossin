import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#D4AF37",
        "deep-blue": "#0A3D62",
        "dark-bg": "#0F0F0F",
        "dark-secondary": "#1A1A1A",
      },
      fontFamily: {
        sans: ["Poppins", "Montserrat", "sans-serif"],
        heading: ["Montserrat", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-in",
        "float": "float 3s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(212, 175, 55, 0.5)" },
          "50%": { boxShadow: "0 0 20px rgba(212, 175, 55, 0.8)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
