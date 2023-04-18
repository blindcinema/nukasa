/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
        "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    extend: {
      fontFamily: {
        "nukasa_logo": ["var(--font-nukasa_logo)"],
        "nukasa_body": ["var(--font-Inter)"],
        "nukasa_title": ["var(--font-Oswald)"],
      },
    },
  },
  plugins: [],
}

