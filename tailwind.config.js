/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: "768px",
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px and max-width: 1535px) { ... }
      "2xl": "1536px",
    },
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false, // false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "light", // name of one of the included themes for dark mode
  },
};
