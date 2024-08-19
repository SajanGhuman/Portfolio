import type { Config } from "tailwindcss";
const plugin = require("tailwindcss/plugin");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/lib/**/*.js",
    "./public/**/*.html",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "custom-background": "rgb(55, 21, 90)",
        "custom-border": "#E11D48",
        "custom-gray": "#020617",
        "custom-text": "#BB321C",
        "custom-off-white": "#94A3B8",
        "custom-off-black": "#1E293B",
        "custom-off-black-1": "#34445e",
        "custom-rose": "#e11d48",
        "custom-white": "#f1f5f9",
        "custom-purple": "#5146E3",
        "custom-grey": "#2B2B2B",
        "custom-footer": "#ff5278",
      },
      screens: {
        "x-sm": "375px",
        "400-sm": "400px",
        "420-sm": "420px",
        "450-sm": "450px",
        "470-sm": "470px",
        "500-sm": "500px",
        "550-sm": "550px",
        "600-sm": "600px",
        "700-sm": "700px",
        "790-sm": "790px",
        "900-lg": "900px",
        "1000-lg": "1000px",
        "1200-lg": "1200px",
        "1269-lg": "1269px",
        "1300-lg": "1300px",
        "1442-lg": "1442px",
      },
      maxHeight: {
        "700h": "max-height: 600px",
      },
      fontFamily: {
        general_sans: ["General Sans"],
      },
      boxShadow: {
        "button-shadow":
          "0 10px 20px rgba(225, 29, 72, 0.5), 0 6px 10px rgba(225, 29, 72, 0.5), 0 0 100px -10px #e11d48",
      },
      keyframes: {
        glowingBorder: {
          "0%": {
            boxShadow: "0 0 30px #E11D48",
            borderColor: "#E11D48",
          },
          "50%": {
            boxShadow: "0 0 80px #E11D48",
            borderColor: "#E11D48",
          },
          "100%": {
            boxShadow: "0 0 30px #E11D48",
            borderColor: "#E11D48",
          },
        },
      },
      animation: {
        glowingBorder: "glowingBorder 2s ease-in-out infinite",
      },
      borderRadius: {
        custom: "100px",
      },
      spacing: {
        offset: "100px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
