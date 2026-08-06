import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  ext: ['.js', '.jsx', '.ts', '.tsx', '.md'],
  theme: {
    extend: {
      colors: {
        // Primary: Dark Green
        primary: {
          50: '#e8f5e9',
          100: '#c8e6c9',
          200: '#a5d6a7',
          300: '#81c784',
          400: '#66bb6a',
          500: '#4caf50',
          600: '#43a047',
          700: '#388e3c',
          800: '#2e7d32',
          900: '#1b5e20',
          DEFAULT: '#0D4A38',
        },
        // Accent: Vibrant Orange
        accent: {
          50: '#fff3e0',
          100: '#ffe0b2',
          200: '#ffcc80',
          300: '#ffb74d',
          400: '#ffa726',
          500: '#ff9800',
          600: '#fb8c00',
          700: '#f57c00',
          800: '#ef6c00',
          900: '#e65100',
          DEFAULT: '#F57C00',
        },
        // Background colors
        background: {
          DEFAULT: '#fafafa',
          dark: '#121212',
          card: '#ffffff',
          darkCard: '#1e1e1e',
        },
        // Surface colors
        surface: {
          DEFAULT: '#ffffff',
          dark: '#1e1e1e',
          elevated: '#f5f5f5',
          darkElevated: '#2d2d2d',
        },
        // Text colors
        text: {
          DEFAULT: '#212121',
          dark: '#e0e0e0',
          muted: '#757575',
          darkMuted: '#aaaaaa',
          inverse: '#ffffff',
        },
        // Border colors
        border: {
          DEFAULT: '#e0e0e0',
          dark: '#404040',
          light: '#bdbdbd',
        },
        // Success/Error/Warning
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
        info: '#2196f3',
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
        sm: '6px',
        md: '8px',
        lg: '12px',
        xl: '16px',
        '2xl': '20px',
      },
      boxShadow: {
        card: '0 2px 8px -1px rgba(0, 0, 0, 0.1), 0 4px 16px -4px rgba(0, 0, 0, 0.1)',
        cardDark: '0 2px 8px -1px rgba(0, 0, 0, 0.3), 0 4px 16px -4px rgba(0, 0, 0, 0.2)',
        button: '0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 8px -2px rgba(0, 0, 0, 0.1)',
        buttonHover: '0 4px 6px -1px rgba(0, 0, 0, 0.2), 0 8px 10px -3px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      fontSize: {
        h1: ['36px', { lineHeight: '1.2', fontWeight: '700' }],
        h2: ['28px', { lineHeight: '1.3', fontWeight: '600' }],
        h3: ['22px', { lineHeight: '1.4', fontWeight: '600' }],
        h4: ['18px', { lineHeight: '1.4', fontWeight: '600' }],
        body: ['16px', { lineHeight: '1.6' }],
        small: ['14px', { lineHeight: '1.5' }],
        caption: ['12px', { lineHeight: '1.4', letterSpacing: '0.5px' }],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}

export default config