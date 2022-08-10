/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#512A10',
        secondary: '#F9F5EB',
        tersier: '#F0EABE',
        fourth: '#525252',
      },
      backgroundImage: {
        home: "url('/src/Assets/images/bg-home.jpg')",
        breakSection: 'url(/src/Assets/images/break-1.jpg)',
      },
      boxShadow: {
        randomShadow: '1px 1px 2px black, 0 0 25px rgb(255, 255, 255), 0 0 5px rgb(77, 77, 147)',
        reviewShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
