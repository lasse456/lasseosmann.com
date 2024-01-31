/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        heading: "66px",
        description: "22px",
        sectionheading: "50px",
      },
      colors: {
        main: "#10192e",
        second: "#636363",
      },
      fontFamily: {
        italic: "Times new roman",
      },
      borderRadius: {
        main: "8px",
      },
      padding: {
        button: "10px 26px 10px 26px",
        button02: "16px 30px",
      },
      maxWidth: {
        main: "1300px",
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        mde: { max: "768px" },
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",

        skillsOne: { max: "1124px" },
        teamOne: { max: "1000px" },
        ctaOne: { max: "1100px" },
      },
      gridTemplateColumns: {
        footermain: "20% 1fr",
      },
    },
  },
  plugins: [],
};
