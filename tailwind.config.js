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
      dtf: "#2D2A37",
      primary1: "#FDBC1C",
      primary2: "#5F33E1",
      white: "#FFFFFF",
      black: "#000000",
      red: "#F52E31",
      bb: "#0000001a",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "login-bg-light": "url('SignInBgLight.svg')",
        "login-bg-dark": "url('SignInBgDark.svg')",

        "home-icon": "url('House.svg')",
        "home-icon-fill": "url('HouseFill.svg')",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
