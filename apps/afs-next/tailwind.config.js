module.exports = {
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          "afs-green": "#099",
          "afs-green-light": "#0badad",
          "afs-blue": "#2e84b3",
          "afs-gray": "#999",
          "afs-dark-gray": "#333",
          "afs-light-gray": "#ecf3f3",
        },
      },
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
};
