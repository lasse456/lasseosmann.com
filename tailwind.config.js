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
        heading: "76px",
        description: "26px",
        sectionheading: "50px",
      },
      colors: {
        main: "#001030",
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
    },
  },
  plugins: [],
};
