/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        "light-gray": "#dddddd",
        "dark-purple": "#111827",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
