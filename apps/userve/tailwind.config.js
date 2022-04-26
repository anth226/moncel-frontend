module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: {
          blue: "#000b8f",
        },
        "navy":"#000B8F", // primary
        "bluewood": "#35425B", // titles
        "sky-blue": "#000EB8CC", // bright blue, stats
        "lynch": "#72809D", // text
        "mischka": "#D5D9E1", // header border
        "lilac": "#F1F1F9", // light primary
        "athens": "#F5F7F9", // footer bg
        "dodger": "#4756FF", // highlight
        "cornflower": "#707bFF", // tags
        "melrose": "#C2C7FF", // accreditation
      },
    },
    borderWidth: {
      DEFAULT: "1px",
      1: "1px",
    },
    fontWeight: {
        hairline: 100,
        thin: 200,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
};
