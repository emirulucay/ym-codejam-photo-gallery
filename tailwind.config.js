/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      animation: {
        explore: "explore 12s linear infinite",
        aquaText: "aquaText 12s linear infinite",
        orangeText: "orangeText 12s linear infinite",
      },
      // burada explore butonunun animasyonu yer alıyor.
      keyframes: {
        explore: {
          "0%": {
            color: "#fff",
            background: "#27B391",
          },
          "46%": {
            color: "#fff",
            background: "#27B391",
          },
          "50%": {
            background: "#DF972A",
            color: "#080808",
          },
          "96%": {
            color: "#080808",
            background: "#DF972A",
          },
          "100%": {
            color: "#fff",
            background: "#27B391",
          },
        },
        aquaText: {
          "0%": {
            filter: "drop-shadow(0 0 16px rgba(41, 200, 211, .3))",
          },
          "50%": {
            filter: "drop-shadow(0 0 8px rgba(41, 200, 211, .3))",
          },
          "60%": {
            filter: "drop-shadow(0 0 0px rgba(41, 200, 211, .3))",
          },
          "100%": {
            filter: "drop-shadow(0 0 16px rgba(41, 200, 211, .3))",
          },
        },
        orangeText: {
          "0%": {
            filter: "drop-shadow(0 0 0px rgba(223, 151, 42, .4))",
          },
          "40%": {
            filter: "drop-shadow(0 0 8px rgba(223, 151, 42, .4))",
          },
          "50%": {
            filter: "drop-shadow(0 0 16px rgba(223, 151, 42 .4))",
          },
          "90%": {
            filter: "drop-shadow(0 0 16px rgba(223, 151, 42 .4))",
          },
          "100%": {
            filter: "drop-shadow(0 0 0px rgba(223, 151, 42 .4))",
          },
        },
      },
    },
    // 08 renk değeri arkaplan içindir. diğer renkler ise animasyonlar için..
    colors: {
      "08": "#080808",
      aqua1: "#2E9D75",
      aqua2: "#29DEEA",
      aqua3: "#27B391",
      aqua4: "#29C8D3",
      orange1: "#C48323",
      orange2: "#F5DF13",
      orange3: "#DF972A",
      orange4: "#D9C61C",
      ...colors,
    },
  },
  plugins: [],
};
