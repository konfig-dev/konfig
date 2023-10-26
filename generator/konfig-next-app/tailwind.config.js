/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      'mantine-gray': '#868e96',
      'mantine-gray': {
        0x000: '#F8F9FA',
        100: '#F1F3F5',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#868E96',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
      },
    },
    extend: {},
  },
  plugins: [],
}
