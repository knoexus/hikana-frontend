import type { Config } from 'tailwindcss';

const config: Config = {
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
        gelatine: {
          'from, to': { transform: 'scale(1, 1)' },
          '25%': { transform: 'scale(0.8, 1.2)' },
          '50%': { transform: 'scale(1.2, 0.8)' },
          '75%': { transform: 'scale(0.90, 1.1)' },
        },
      },
      animation: {
        'gelatine-finite': 'gelatine 0.69s linear',
      },
    },
  },
  plugins: [],
};
export default config;
