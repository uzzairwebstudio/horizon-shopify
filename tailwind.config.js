module.exports = {
  purge: {
    enabled: true,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid'
    ]
  },
  darkMode: false,
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography')
  ]
}