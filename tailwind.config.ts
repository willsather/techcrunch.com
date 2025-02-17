import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "tc-green": "#0A8B3C",
        "tc-green-700": "#0d7a32",
        "tc-green-300": "#0AA43E",
        "tc-green-100": "#68F176",
        "tc-black": "#1D1D1D",
        "tc-purple": "#6E3AEA",
        "tc-yellow": "#FFF167",
      },
    },
  },
};
export default config;
