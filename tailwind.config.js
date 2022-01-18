const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Jost': ['Jost', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'purple': '#AD1FEA',
      'blue': '#4661E6',
      'dark-blue': '#373F68FF',
      'white': '#FFFFFF',
      'dark-white': '#F2F4FF',
      'light-white': '#F7F8FD',
      'deep-blue': '#3A4374',
      'light-grey': '#647196',
      'salmon': '#F49F85',
      'light-blue': '#62BCFA',
      'gradient-pink': '#E84D70',
      'gradient-purple': '#A337F6',
      'gradient-blue': '#28A7ED'
}
  },
  plugins: [],
}
