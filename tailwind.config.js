/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        whitePrimary: '#f0f0f0',
        purpleLogo: '#969CED',
        greenLogo: '#3ECEAB',
        blackSecundary: '#171717'
      }
    },
  },
  plugins: [],
}
