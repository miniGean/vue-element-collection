const themeConfig = require('./theme.css-config.js')
const currentCommonPath = themeConfig[process.env.CURRENT_THEME_TYPE] && themeConfig[process.env.CURRENT_THEME_TYPE]['commonPath']

module.exports = {
  plugins: {
    // autoprefixer: {},
    'postcss-import': {
      path: [ currentCommonPath || 'src/styles/themes/dark' ]
    },
    'postcss-cssnext': {}
  }
}
