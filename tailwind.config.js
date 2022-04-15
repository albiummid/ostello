module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      visibility: ['group-hover'],
      width: {
        '8xl': '88rem',
      },
      boxShadow: {
        ost: '0px 4px 28px rgba(122, 129, 220, 0.2)',
        ostf: ' 0px 8px 60px rgba(122, 129, 220, 0.15)',
      },
    },
  },
  plugins: [],
  important: true,
}
