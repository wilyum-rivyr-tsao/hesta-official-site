import type { Config } from 'tailwindcss';
const withMT = require('@material-tailwind/react/utils/withMT');

const config: Config = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        harmony: ['HarmonyOS_Sans_SC'],
        impact: ['Impact'],
        akrobat: ['Akrobat'],
      },
      screens: {
        'sm-screen': { max: '1440px' },
        '3xl': '1600px',
        '4xl': '1920px',
        hairtail: '3189px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in-out',
      },
    },
  },
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [require('daisyui'), require('@tailwindcss/aspect-ratio')],
});
export default config;
