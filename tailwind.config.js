/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        projeto: {
          roxo: "#613967",
          azul: "#4397BB",
          rosa: '#CB7B64',
        },
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        
        
    },
    },
  },

  plugins: [],
};