module.exports = {
    content: [
      "./pages/**/*.{jsx,tsx}",
      "./components/**/*.{jsx,tsx}",
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
            "bunting": "#141B4D", // CFS Blue Primary
            "clay": "#393D5A", // CFS Blue
            "nepal": "#8E9FBC",  // CFS Blue
            "lilac": "#F7F9FC", // Used for very light backgrounds
            "catskill": "#EDF1F7", // Used for backgrounds
            "whisper": "#F6F7FA", // Used for body background
            "monza": "#D50032", // CFS Red Secondary
            "monarch": "#860B1B", // CFS Red
            "sangria": "#A2000E", // CFS Red
            "dove": "#666", // Dark grey
            "mine": "#333", // Dark grey
            "emperor": "#999", // Dark grey
            "alto": "#DDD", // Dark grey
            "gallery": "#EBEBEB", // Light grey
            "silver": "#777780", // Used for lines
            "alabaster": "#F9F9F9", // Used for backgrounds
        },
      },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
};
