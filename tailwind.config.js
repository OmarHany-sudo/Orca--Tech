module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "orca-blue": "#0A75BB",
        "orca-blue-darker": "#075a91",
        "light-blue": "#3FA9F5",
        "soft-grey": "#F5F5F5"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        cairo: ["Cairo", "sans-serif"]
      },
      animation: {
        "pulse-glow": "pulse-glow 2s infinite"
      },
      keyframes: {
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(10, 117, 187, 0.4)" },
          "50%": { boxShadow: "0 0 0 12px rgba(10, 117, 187, 0)" }
        }
      }
    }
  },
  plugins: []
};
