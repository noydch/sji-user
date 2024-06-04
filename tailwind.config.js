/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // 'bg-overlay': "url"
    },
    screens: {
      'xs': { 'min': '320px', 'max': '480px' },
      'sm': { 'min': '480px', 'max': '680px' },
      'md': { 'min': '680px', 'max': '1024px' },
      'lg': { 'min': '1024px', 'max': '1280px' },
      'xl': { 'min': '1280px', 'max': '1536px' }
    }
  },
  plugins: [],
}