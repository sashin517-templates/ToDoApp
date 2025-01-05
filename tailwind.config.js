/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    gradientColorStops: {
      P1: "#5F33E1",
      P2: "#8f70ea",
      P3: "#C80036",
      P4: "#FF6969",
      O1: "#FFC21F",
      O2: "#EA8800",
    },
    colors: {
      transparent: "transparent",
      glass_light: "#BCCCDC",
      glass_dark: "#130a2d",
      ltb: "#F8FAFC",
      dtb: "#090516",
      ltf: "#EDE6FF",
      ltf2: "#efebfc",
      dtf: "#151B23",
      blendPurple: "rgba(54, 194, 206, 0.39)",
      lightBlendPurple: " rgba(255, 255, 255, 0.43)",
      lightPlusBlendPurple: "rgba(32, 116, 124, 0.7)",
      blendPurple1: "rgba(95, 51, 225, 0.7)",
      primary1: "#FDBC1C",
      primary2: "#5F33E1",
      white: "#FFFFFF",
      black: "#000000",
      red: "#F52E31",
      bb: "#0000001a",
      customPurple: "#EDE6FF", //light mode cards colour
      PrimePurple: "#5F33E1", //primary colour of site
    },
    boxShadow: {
      custom: "0 4px 30px rgba(0, 0, 0, 0.1)",
    },
    backdropFilter: {
      custom: "blur(5px)",
    },
    borderColor: {
      custom: "rgba(255, 255, 255, 0.3)",
    },
    fontWeight: {
      subtle: "300",
      semibold: "500",
      highlighted: "600",
    },
    extend: {
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "login-bg": "url('Sign In.png')",
        "custom-gradient": "linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)",
        "custom-gradient-2": "linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
