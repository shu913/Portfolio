/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    fontSize: {
      xs: ['0.8rem', '1rem'], // 8 / 10
      sm: ['0.89rem', '1.25rem'], // 8 / 9
      base: ['1rem', '1.5rem'], // 8 / 8
      lg: ['1.14rem', '1.75rem'], // 8 / 7
      xl: ['1.33rem', '2rem'], // 8 / 6
      '2xl': ['1.6rem', '2.25rem'], // 8 / 5
      '3xl': ['2rem', '2.5rem'], // 8 / 4
      '4xl': ['2.67rem', '3.25rem'], // 8 / 3
      '5xl': ['4rem', '4.5rem'], // 8 / 2
      '6xl': ['8rem', '8rem'],
    },
    extend: {
      fontFamily: {
        'roboto-mono': "'Roboto Mono', monospace",
      },
      spacing: {
        'gutter-x': 'max(2.5vw, 1rem)',
        'gutter-y': 'max(2.5vw, 2rem)',
        'gutter-y-0.5': 'max(1.25vw, 1rem)',
        'gutter-y-2': 'max(5vw, 4rem)',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(var(--translate-x, -50%))' },
        }
      },
      zIndex: {
        header: 100,
      },
    },
  },
  plugins: [],
};
