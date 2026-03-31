/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pet: ['Poppins', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#2F4156',
        lightPrimary:'#2f415677',
        warm: '#FD7E14',
        warmHover: '#e76c0a',
        font: '#F5EFED',
        back: '#F8F9FA',
        back2:'#417481'
      },
    },
  },
  plugins: [],
}
