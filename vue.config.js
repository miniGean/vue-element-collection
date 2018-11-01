
const themeConfig = require('./theme.css-config.js')

module.exports = {
  // 生产环境 eslint-loader
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    sourceMap: process.env.NODE_ENV !== 'production'
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http:xxxxx'
      }
    },
    port: '9000'
  },
  pluginOptions: {
    'theme-build': themeConfig
  }
}
