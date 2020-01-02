const path = require('path')

module.exports = {
  devServer: {
    // 设置代理
    proxy: {
      '/api': {
        target: 'http://localhost:8091',
        changeOrigin: true,
        pathRewrite: { '^/api': 'api' }
      }
    },
    port: 8999
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
        path.resolve(__dirname, './src/assets/css/index.styl'),
        path.resolve(__dirname, './src/assets/css/global.styl')
      ]
    }
  }
}
