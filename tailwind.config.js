/** @type {import('tailwindcss').Config} */
module.exports = {
  important: '#__next', // গুরুত্বপূর্ণ লাইন
  corePlugins: {
    preflight: false, // Chakra-এর সাথে কনফ্লিক্ট এড়াতে
  },
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
      "./app/**/*.{js,ts,jsx,tsx}", // if using app directory
    ],
theme: {
  fontFamily: {
    sans: ['Inter', 'sans-serif'], // আপনার পছন্দের ফন্ট
  },
},
    plugins: [],
  }
  