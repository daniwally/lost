/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: '#121212',
        'surface-highlight': '#1E1E1E',
        primary: '#722F37',
        secondary: '#C5A059',
        'text-primary': '#F5F5F0',
        'text-secondary': '#A1A1AA',
        border: '#27272A',
        accent: '#591C23',
        gold: {
          300: '#D4AF37',
          400: '#C5A059',
        },
        wine: {
          900: '#722F37',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Manrope', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
