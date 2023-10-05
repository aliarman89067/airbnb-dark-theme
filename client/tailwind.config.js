/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Dark Theme
        primary: "#c77dff",
        dark: "#212529",
        // Light Theme
        lPrimary: "#f5385d",
        light: "#fff",
      },
    },
  },
  plugins: [],
};
