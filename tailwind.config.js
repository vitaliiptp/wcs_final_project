const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Jost", ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      'body-background': '#F2F2F2',
      'blue-normal': '#4661E6',
      'blue-normal-hover': '#7C91F9',
      'blue-light': '#62BCFA',
      'blue-dark': '#373F68',
      'blue-deep': '#3A4374',
      'blue-deep-hover': '#656EA3',
      'blue-gradient': '#28A7ED',
      'grey-light': '#647196',
      'pink-gradient': '#E84D70',
      'purple-normal': '#AD1FEA',
      'purple-normal-hover': '#C75AF6',
      'purple-gradient': '#A337F6',
      'red-normal': '#D73737',
      'red-normal-hover': '#E98888',
      'salmon-normal': '#F49F85',
      'white-normal': '#FFFFFF',
      'white-light': '#F7F8FD',
      'white-dark': '#F2F4FF',
      'white-dark-hover': '#CFD7FF',
    }
      'body-background': '#F2F2F2'
    },
  },
  plugins: [],
};
