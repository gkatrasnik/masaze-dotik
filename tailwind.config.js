// tailwind.config.js
module.exports = {
  future: {},
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dotikLogoGreen: "#007a7e",
        dotikBannerGreen: "#3a8289",
        dotikDarkBrown: "#c98b64",
        dotikExtraDarkBrown: "#a06f50",
        dotikHeaderBrown: "#3b332e",
      },
      fontFamily: {
        playfairDisplay: ["playfair-display", "serif"],
        crimsonPro: ["crimson-pro", "serif"],
      },
    },
  },
  variants: {},
  plugins: [],
}
