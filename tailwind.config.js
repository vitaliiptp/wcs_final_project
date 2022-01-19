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
      'blue-normal': '#4661E6',
'blue-light': '#62BCFA',
'blue-dark': '#373F68FF',
'blue-deep': '#3A4374',
'blue-gardient': '#28A7ED',
'grey-light': '#647196',
'pink-gardient': '#E84D70',
'purple-normal': '#AD1FEA',
'purple-gardient': '#A337F6',
'salmon-normal': '#F49F85',
'white-normal': '#FFFFFF',
'white-light': '#F7F8FD',
'white-dark': '#F2F4FF'
}
  },
  plugins: [],
}
