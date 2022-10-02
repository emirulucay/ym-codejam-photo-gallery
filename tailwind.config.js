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
