 /** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
     extend: {
  animation: {
    bounce: "bounce 3s infinite",
    pulse: "pulse 3s infinite",
  },
   fontFamily: {
        exo: ["Exo", "sans-serif"],
      },
}

   },
   plugins: [],
 }