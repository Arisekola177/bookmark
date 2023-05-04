/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('../assets/images/bg-dots.svg')",
      },
      backgroundColor: {
        'soft-blue': 'hsl(231, 69%, 60%)',
      },
    },
  },
  plugins: [],
};
