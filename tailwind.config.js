// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#1A202C', // Dark Gray
        secondary: '#2D3748', // Darker Gray
        accent: '#3182CE', // Blue
        success: '#38A169', // Green
        warning: '#DD6B20', // Orange
        danger: '#E53E3E', // Red
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
