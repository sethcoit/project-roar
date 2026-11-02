/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#071633',
        bone: '#fbfaf7',
        green: {
          DEFAULT: '#0d2a55',
          dark: '#061329',
        },
        parchment: '#eee5d7',
        brass: '#b7790a',
        olive: '#102b4d',
      },
      fontFamily: {
        serif: ['Georgia', '"Times New Roman"', 'serif'],
        sans: ['Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.22em',
        nav: '0.18em',
      },
      maxWidth: {
        site: '1380px',
      },
    },
  },
  plugins: [],
};
