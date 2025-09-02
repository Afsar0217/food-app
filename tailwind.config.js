/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Light mode colors
        light: {
          text: '#000',
          background: '#fff',
          tint: '#2f95dc',
          tabIconDefault: '#ccc',
          tabIconSelected: '#2f95dc',
        },
        // Dark mode colors
        dark: {
          text: '#fff',
          background: '#000',
          tint: '#fff',
          tabIconDefault: '#ccc',
          tabIconSelected: '#fff',
        }
      }
    },
  },
  plugins: [],
}