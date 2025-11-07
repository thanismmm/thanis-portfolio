import type { Config } from 'tailwindcss';

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', 'Apple Color Emoji', 'Segoe UI Emoji'],
      },
      colors: {
        brand: {
          DEFAULT: '#0ea5e9',
          dark: '#0284c7',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(1200px 800px at 100% 0%, rgba(14,165,233,0.15), transparent 60%), radial-gradient(1200px 800px at 0% 100%, rgba(59,130,246,0.15), transparent 60%)'
      }
    },
  },
  plugins: [],
} satisfies Config;


