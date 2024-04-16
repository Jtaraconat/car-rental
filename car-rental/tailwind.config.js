/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        celBlue100: "#3E92CC",
        celBlue200: "#2F7BB1",
        bitterRed100: "#EF6461",
        bitterRed200: "#ED4845",
        sunglow100: "#FFD23F",
        sunglow200: "FFC60A",
        onyx: "#313638",
        ghostWhite: "#FFFAFF",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
