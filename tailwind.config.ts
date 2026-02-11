import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      colors: {
        ide: {
          blue: "#0f2942",
          "blue-light": "#1a3a5c",
          mint: "#2dd4bf",
          "mint-light": "#5eead4",
          "mint-dark": "#14b8a6",
        },
      },
    },
  },
  plugins: [],
};

export default config;
