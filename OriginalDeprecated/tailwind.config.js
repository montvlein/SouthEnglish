/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{html,js,svelte,css}'],
  theme: {
    extend: {
      colors: {
        // Paleta integrada desde css/colors.css (ahora en OriginalDeprecated/)
        main: '#D8D1F2',
        secondary: '#D62B9C',
        complement: '#32105F',
        background: '#FAF9FD',
        surface: '#FFFFFF',
        ink: '#17121D',
        muted: '#716A78',
        line: '#E7E2EF'
      }
    }
  },
  plugins: []
}
