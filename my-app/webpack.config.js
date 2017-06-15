var path = require('path')
var webpack = require('webpack')
// let proxy='http://42.159.244.26'
let proxy='http://139.219.189.2'
module.exports = {
  // devtool: 'eval',
  devtool: 'sourcemap',
  entry: [
    'webpack-dev-server/client?http://192.168.31.204:' + 3000,
    'webpack/hot/only-dev-server',
    'babel-polyfill',
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
    progress: true,
    inline: false,
    publicPath: '/',
    proxy: {
        '/alpha/api/': {
            target: proxy,
            changeOrigin: true,
            pathRewrite: {'^/alpha/api/' : '/alpha/api/'},
          }
    }
  },
  plugins: [
    // new webpack.DefinePlugin({
    //   'process.env': {
    //     'NODE_ENV': '"production"'
    //   }
    // }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: [
          'react-hot', 'babel?' +JSON.stringify({
            plugins: [
              'transform-runtime'
            ],
            presets: ['es2015', 'react', 'stage-0'],
          })
        ],
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(woff|woff2|ttf)\??.*$/,
        loader: 'url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]'
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.js', '.json']
  }
}
