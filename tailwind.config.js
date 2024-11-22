/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Kullanıcının sistem tema tercihlerine göre dark mode
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        sans: ['Arial', 'Helvetica', 'sans-serif'], // Varsayılan sans-serif yazı tipleri
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
};
