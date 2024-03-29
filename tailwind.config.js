/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        bounceUp: {
          '0%, 100%': { transform: 'translateY(10%)' },
          '50%': { transform: 'translateY(0)' }
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(-10%)' },
          '50%': { transform: 'translateY(0)' }
        }
      },

      animation: {
        bounceUp: 'bounceUp 1.3s ease-in-out infinite',
        bounceDown: 'bounceDown 1.3s ease-in-out infinite'
      },

      boxShadow: {
        sides: '10px 15px 15px 3px'
      }
    },
  },
  plugins: [],
}
