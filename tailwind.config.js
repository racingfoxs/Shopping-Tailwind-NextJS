/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    // colors: {
    //   'primarys-bg': '#ddacf5',
    //   'primarys-font': 'white',
    //   'darks-bg': '#ert444',
    //   'secondarys-font': 'black',
    // },
  },
  
  plugins: [],
}
