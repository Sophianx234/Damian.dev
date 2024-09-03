/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "Montserrat", "Mulish"],
    },
    extend: {
      colors: {
        "secondary-purple": "#4F46E5",
        "secondary-purple-700":"#282373",
        "secondary-purple-950":'#080717',
      },
    },
  },
  plugins: [],
};
