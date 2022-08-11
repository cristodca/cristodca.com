module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html,js,ts,jsx,tsx}",
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
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}