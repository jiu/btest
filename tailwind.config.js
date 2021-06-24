
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      heading: ['Dosis', 'sans-serif'],
    },
    extend: {
      colors : {
        blue: "#384551",
        gray: {
          200 : "#EFEFEF"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
};
