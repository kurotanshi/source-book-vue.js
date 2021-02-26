// vue.config.js
module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'https://data.ntpc.gov.tw/api/',
        pathRewrite: { '^/api': '' },
        changeOrigin: true,
        ws: true
      },
    }
  }
}