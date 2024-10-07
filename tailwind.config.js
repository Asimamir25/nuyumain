/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        PRIMARYPURPLE: "#6c45aa",
        PRIMARY: "#DAC0A7;",
        WHITE: "#FFF",
        BLACK: "#020202",
        BROWN: "#755F4B",
        ITAICTEXT: "#C6B5A4",
        GRAY:"#808586"
      },
      screens: {
        'xs': '450px', // Custom breakpoint for 300px screen
      },

      fontFamily: {
        openSans: ['OpenSans'], // Add Open Sans here
      },
    },
  },
  plugins: [],
};
