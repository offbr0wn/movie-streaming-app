/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./ui/**/*.{js,jsx,ts,tsx}",    
    "./components/**/*.{js,jsx,ts,tsx}",
    
  ],
  theme: {
    extend: {
      colors: {
        redAccent: "#DD0404",
      },
      fontFamily: {
        AlexBold: ["Alexandria-Bold"],
        AlexExtraBold: ["Alexandria-ExtraBold"],
        AlexExtraLight: ["Alexandria-ExtraLight"],
        AlexLight: ["Alexandria-Light"],
        AlexMedium: ["Alexandria-Medium"],
        AlexRegular: ["Alexandria-Regular"],
        AlexSemiBold: ["Alexandria-SemiBold"],
      },
    },
  },
  plugins: [],
};
