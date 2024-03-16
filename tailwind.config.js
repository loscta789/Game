/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'gray-to-transparent': 'linear-gradient(to top, #d1d5db 50%, transparent 50%)',
      }),
    },
    screens: {
      'sm': '200px',
      'ssm':'577px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      // Ajout de breakpoints pour des tailles d'écran maximales
      'msm': {'max': '576px'},
      'mmd': {'max': '768px'},
      'mlg': {'max': '1024px'},
      'mxl': {'max': '1280px'},
      'm2xl': {'max': '1536px'},
    }
  },
  plugins: [],
}

