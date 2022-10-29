module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      fontFamily: {
        'sans': ['proxima-soft', 'sans-serif'],
        'serif': ['museo-sans-rounded', 'sans-serif'],
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0px",
        1: "1px",
        2: "2px",
        6: "6px",
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
      },
      screens: {
        'sm': '576px',
        // => @media (min-width: 576px) { ... }
        'md': '768px',
        // => @media (min-width: 768px) { ... }
        'lg': '992px',
        // => @media (min-width: 992px) { ... }
        'xl': '1200px',
        // => @media (min-width: 1200px) { ... }
        '2xl': '1400px',
        // => @media (min-width: 1400px) { ... }
      },
      extend: {
        colors: {
          "afs-green": "#099",
          "afs-green-light": "#0badad",
          "afs-blue": "#2e84b3",
          "afs-gray": "#999",
          "afs-dark-gray": "#333",
          "afs-light-gray": "#ecf3f3",
          "crystal-blue": "#5db9e8",
          "curious-blue": "#39c",
          "metallic-blue": "#467186",
          "teal": "#099", // AFS Green
          "niagara": "#0BADAD", // AFS Green - hovers
          "pasture": "#50B2AD", // AFS Green - light borders
          "mint":" #C7E2E2", // AFS Green - backgrounds
          "haze": "#ECF3F3", // AFS Green - backgrounds
          "shakespeare": "#39C", // AFS Blue
          "venice": "#0A6A9A", // AFS Blue - text shadows
          "horizon": "#57829A", // AFS Blue - borders
          "mystic": "#E1E8ED", // AFS Blue - backgrounds and line breaks
          "dove": "#666", // Dark grey
          "mine": "#333", // Dark grey
          "emperor": "#999", // Dark grey
          "alabaster": "#F9F9F9", // Light grey - backgrounds
          "silver": "#CCC", // Light grey - borders
          "alto": "#E0E0E0", // dividers
          "sand": "#F5F5F5", // Light grey - borders
          "robin": "#00B9B9", // button hover
        },
      },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
};
