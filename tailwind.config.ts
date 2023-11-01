import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        text: "#070604",
        background: "#fffdf9",
        primary: "#b4bd89",
        secondary: "#c4cdde",
        accent: "#574d89"
      },
      backgroundImage: {
        "hero-bg": "url('/hero.jpg')"
      }
    }
  },
  plugins: []
};
export default config;
