/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    gradientColorStops: {
      P1: "#5F33E1",
      P2: "#6B63F9",
      O1: "#FFC21F",
      O2: "#EA8800",
    },
    colors: {
      transparent: "transparent",
      glass_light: "rgba(27, 27, 27, 0.15)",
      glass_dark: "rgba(250, 250, 250, 0.15)",
      ltb: "#FFFFFF",
      dtb: "#161221",
      ltf: "#EDE6FF",
      blendPurple: "rgba(54, 194, 206, 0.39)",
      lightBlendPurple: " rgba(255, 255, 255, 0.43)",
      lightPlusBlendPurple: "rgba(32, 116, 124, 0.7)",
      blendPurple1: "rgba(95, 51, 225, 0.7)",
      dtf: "#2D2A37",
      primary1: "#FDBC1C",
      primary2: "#5F33E1",
      white: "#FFFFFF",
      black: "#000000",
      red: "#F52E31",
      bb: "#0000001a",
    },
    boxShadow: {
      custom: '0 4px 30px rgba(0, 0, 0, 0.1)',
    },
    backdropFilter: {
      custom: 'blur(5px)',
    },
    borderColor: {
      custom: 'rgba(255, 255, 255, 0.3)',
    },
    fontWeight: {
      subtle: '300',
      highlighted: '700',
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
<<<<<<< HEAD
        "login-bg-light": "url('SignInBgLight.svg')",
        "login-bg-dark": "url('SignInBgDark.svg')",

        "home-icon": "url('House.svg')",
        "home-icon-fill": "url('HouseFill.svg')",
=======
        "login-bg": "url('Sign_In_V2.svg')",
>>>>>>> 11f4bbfc9ee91ded09fc136e235d08b00c19df06
      },
    },
  },
  plugins: [
    
  ],
  darkMode: "class",
};