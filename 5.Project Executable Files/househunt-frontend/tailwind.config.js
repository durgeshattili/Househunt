/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"], // ← keep your existing paths
  theme: { extend: {} },
  plugins: [
    require("@tailwindcss/aspect-ratio"), // 👈 add this line
  ],
};
