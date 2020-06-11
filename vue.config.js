module.exports = {
  devServer: {
    host: 'localhost',
    // host: '10.30.138.97',
    port: 8088,
    https: false,
    open: true,
    hotOnly: true,
  },
  outputDir: './dist',
  assetsDir: './assets/',
  publicPath: './',
  indexPath: './index.html',
  transpileDependencies: ['vuetify'],
}
