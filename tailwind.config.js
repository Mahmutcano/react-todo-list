module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-dark-color": "#424245",
        "brand-white-color": "#f5f5f7",
        "secondary-brand-color": "#7849f7",
        "brand-yellow": "#ffd300",
        "primary-white-color": "rgba(255, 255, 255, 0.92)"
      },
      variants: {
        display: ["responsive", "group-hover", "group-focus"],
      },
    },
  },
  plugins: [],
};