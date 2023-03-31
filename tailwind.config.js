/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#2294c9",
        
"secondary": "#3fffdb",
        
"accent": "#ef56ed",
        
"neutral": "#22262B",
        
"base-100": "#FAF9FB",
        
"info": "#4F71E3",
        
"success": "#5EE8CA",
        
"warning": "#EBA70A",
        
"error": "#E21D31",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

