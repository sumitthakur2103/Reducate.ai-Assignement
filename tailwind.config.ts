import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050a14",
          900: "#0a1628",
          800: "#0f2240",
          700: "#163058",
          600: "#1e3d6e",
        },
        gold: {
          300: "#f5d78e",
          400: "#e8c060",
          500: "#d4a84b",
          600: "#b8892f",
        },
        cream: "#f7f4ef",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "mesh-hero":
          "radial-gradient(ellipse 80% 50% at 20% 40%, rgba(212,168,75,0.15), transparent 50%), radial-gradient(ellipse 60% 40% at 80% 20%, rgba(30,61,110,0.4), transparent 50%), radial-gradient(ellipse 50% 60% at 60% 80%, rgba(212,168,75,0.08), transparent 50%)",
        "cta-gradient":
          "linear-gradient(135deg, #0a1628 0%, #163058 40%, #1e3d6e 70%, #0f2240 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(212, 168, 75, 0.25)",
        "card-hover": "0 20px 50px rgba(0, 0, 0, 0.35), 0 0 30px rgba(212, 168, 75, 0.12)",
      },
      animation: {
        "blob-float": "blob-float 12s ease-in-out infinite",
        "blob-float-delayed": "blob-float 14s ease-in-out 3s infinite",
      },
      keyframes: {
        "blob-float": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -40px) scale(1.05)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.95)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
