import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens : {
      sm : "480px",
      md : "768px",
      lg : "976px",
      xl : "1440px"
    },

    extend: {
      colors : {
        brightRed : 'hsl(12, 88%, 59%)',
        brightRedLight : "hsl(12, 88%, 69%)",
        brightRedSupLight : "hsl(12, 88%, 85%)",
        darkBlue : "hsl(228, 39%, 23%)",
        darkGrayishBlue : "hsl(227, 12%, 61%)",
        veryDarkBlue : "hsl(233, 12%, 13%)",
        veryPaleRed : "hsl(13, 100%, 96%)",
        veryLightGray : "hsl(0, 0%, 98%)"
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
