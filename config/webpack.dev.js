var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

module.exports = webpackMerge(commonConfig, {
  devtool: 'cheap-module-eval-source-map',

  output: {
    path: helpers.root('dist'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },

  plugins: [
    new ExtractTextPlugin('[name].css'),
    new CopyWebpackPlugin([{ from: './public/assets', to: './assets' },{ from: './public/params', to: './params' }])
  ],

  devServer: {
    historyApiFallback: true,
    stats: 'minimal',
    inline: true,
    colors: true,
    contentBase: './dist',
    port:7003,
    publicPath: '/'
  }

});
