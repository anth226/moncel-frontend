module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./src/**/*.{html,js}", "./node_modules/tw-elements/dist/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: {
          blue: "#000b8f",
        },
        "navy":"#000B8F", // primary
        "dark-blue": "#000eb8", // button primary
        "navy-hover":"#000090", // button hover
        "half-navy":"#000b8f80", // navy with 0.5 opacity
        "titan":"#E8EAFF", // invert button hover
        "bluewood": "#35425B", // titles
        "sky-blue": "#000EB8CC", // bright blue, stats
        "lynch": "#72809D", // text
        "mischka": "#D5D9E1", // header border
        "lilac": "#F1F1F9", // light primary
        "athens": "#F5F7F9", // footer bg
        "dodger": "#4756FF", // highlight
        "cornflower": "#707bFF", // tags
        "melrose": "#C2C7FF", // accreditation
        "hawkes": "#E1E4FE66", // gradient bg
      },
    },
    fontFamily: {
      'sans': ['Inter', 'sans-serif'],
    },
    fontSize: {
      'xs': '.75rem',
      'sm': '.875rem',
      'tiny': '.875rem',
      'base': '1rem',
      'lg': '1.125rem',
      'xl': '1.25rem',
      '2xl': ['1.5rem','1.2em'],
      '3xl': ['1.875rem','1.2em'],
      '4xl': ['2.5rem','1.2em'],
      '5xl': ['3rem','1.2em'],
      '6xl': ['4rem','1.2em'],
      '7xl': ['5rem','1.2em'],
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
