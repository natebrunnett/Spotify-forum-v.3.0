/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**/*.{js,jsx}",
    "./src/views/**/*.{js,jsx}",
    "./src/**/*.{js, jsx}",
  ],
  theme: {
    extend: {
        colors: {
        'green-yellow': '#adff2f',
        }
    },
  },
  plugins: [],
}

