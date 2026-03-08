import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0066FF',
        surface: '#FFFFFF',
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          900: '#132240'
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'PingFang SC', 'system-ui', 'sans-serif']
      },
      maxWidth: {
        content: '1200px'
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 102, 255, 0.1)'
      }
    }
  },
  plugins: []
}

export default config
