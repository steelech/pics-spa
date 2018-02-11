var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public/');
var APP_DIR = path.resolve(__dirname, 'src/client/app/');
var STYLES_DIR = path.resolve(__dirname, 'src/client/styles')
var ASSETS_DIR = path.resolve(__dirname, 'src/client/assets')

var config = {
  entry: APP_DIR + '/app.js',
  output: {
    path: BUILD_DIR,
    filename: 'js/bundle.js',
  },
  devServer: {
    historyApiFallback: true
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
      {
        test: /\.less$/,
        include: [STYLES_DIR, path.resolve(__dirname, 'node_modules/font-awesome/less')],
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader"
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        include: ASSETS_DIR,
        loader: "file-loader"
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "url-loader"
      },
      {
        test: /\.(jpeg)$/,
        loader: "url-loader"
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: "file-loader"
      }
    ]
  }
}

module.exports = config;
