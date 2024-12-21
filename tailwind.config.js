/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {
            fontFamily: {
              montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
              bodyBg: '#000',
              customPurple: '#EDE6FF', //light mode cards colour
              PrimePurple: '#5F33E1', //primary colour of site
            },
        }
      },
    plugins: [],
  }
  