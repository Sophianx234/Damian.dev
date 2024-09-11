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
        "dark-color": '#060B10'
      },
      keyframes: {
        slidein: {
          '0%': { transform: 'translateX(-30rem)' },
          '100%': { transform: 'translateX(0)' },
        },
        slideout: {
          '0%': { transform: 'translateX(0)' },
          '100%':  { transform: 'translateX(-30rem)' },
        }
      },
      animation: {
        slidein: 'slidein .3s ease-in-out ',
        slideout: 'slideout .3s ease-out ',
      }
      
      
  },
},
  plugins: [],
  darkMode: 'class',
};
