/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'white': "url('/src/assets/fundobranco.png')",
        'black': "url('/src/assets/fundopreto.png')",
      }
    },
  },
  plugins: [],
}