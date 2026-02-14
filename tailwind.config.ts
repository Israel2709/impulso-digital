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
        /* Paleta IDE: azul oscuro #002371 + azul claro #00AAE6 */
        ide: {
          blue: "#002371",
          "blue-light": "#003380",
          "blue-bright": "#004099",
          mint: "#00AAE6",
          "mint-light": "#33bbe9",
          "mint-dark": "#008fc7",
        },
        /* Modo oscuro tipo Cursor/VS Code */
        cursor: {
          bg: "#1e1e1e",
          surface: "#252526",
          "surface-elevated": "#2d2d2d",
        },
      },
    },
  },
  plugins: [],
};

export default config;
