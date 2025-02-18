import type {Config} from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B4157',
        accent: '#FF7F50',
        mint: '#A8D5D0',
      },
    },
  },
  plugins: [],
} satisfies Config;
