module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Poppins", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    extend: {
      keyframes: {
        bgSlideUp: {
          "0%": { backgroundPosition: "center bottom -2rem" },
          "50%": { backgroundPosition: "center top 2rem" },
          "100%": { backgroundPosition: "center bottom -2rem" },
        },
      },
      animation: {
        bgSlideUp: "bgSlideUp 6s ease infinite",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
