/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      screens: {
        'us': '320px',
      },
      fontFamily: {
        "nukasa_logo": ["var(--font-nukasa_logo)"],
        "nukasa_body": "Inter",
        "nukasa_title": "Oswald",
      },
    },
  },
  plugins: [],
}

