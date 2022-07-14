module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        light: '#f4eded',
        dark: '#464d77',
        primary: '#36827f',
        secondary: '#f9db6d',
      }
    },
  },
  plugins: [],
}