/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{vue,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Semantic color mapping
        elevated: 'var(--color-elevated)',
      },
      backgroundColor: {
        elevated: 'var(--bg-elevated)',
        default: 'var(--bg-default)',
      },
      textColor: {
        highlighted: 'var(--text-highlighted)',
        muted: 'var(--text-muted)',
      }
    }
  }
}
