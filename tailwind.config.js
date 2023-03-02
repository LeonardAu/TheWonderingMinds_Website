/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/contactus.html",
    "./src/quarter1.html",
    "./src/quarter2.html",
    "./src/quarter3.html",
    "./src/events.html",
  ],
  theme: {
    extend: {
      margin: {
        100: "28rem",
        105: "30rem",
      },
      fontFamily: {
        Literata: ["Literata", "serif"],
        PolySansM: ["polysansmedian"],
        PolySansN: ["polysansneutral"],
        PolySansB: ["polysansbulky"],
        PolySansS: ["polysansslim"],
        BebasNeue: ["Bebas Neue", "cursive"],
        OpenSans: ["Open Sans", "sans-serif"],
        Blanka: ["blanka"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
