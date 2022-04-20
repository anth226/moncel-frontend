module.exports = {
  content: ["./src/**/*.{tsx,ts}"],
  theme: {
    extend: {
      colors: {
        ink: {
          blue: "#000b8f",
        },
        "sky-blue": "#000eb8cc",
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
  plugins: [],
};
