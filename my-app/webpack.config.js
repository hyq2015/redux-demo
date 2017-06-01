var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://192.168.31.204:' + 3000,
    'webpack-hot-middleware/client',
    './index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devServer: {
    noInfo: false,
    historyApiFallback: true,
    hot: true,
    publicPath: '/',
    proxy: {
        '/alpha/api/': {
            target: 'http://42.159.244.26',
            changeOrigin: true,
            pathRewrite: {'^/alpha/api/' : '/alpha/api/'},
          }
    }
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [ 'babel' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  }
}
