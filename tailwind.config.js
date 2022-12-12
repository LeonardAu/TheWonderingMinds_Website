/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/contactus.html", "./src/quarter1.html"],
  theme: {
    extend: {
      margin: {
        100: "28rem",
        105: "30rem",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
