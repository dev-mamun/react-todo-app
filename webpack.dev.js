/** ****************************************
 * Project: react-todo-app
 * File: webpack.dev.js
 * Created: 4/4/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3001,
    open: true,
    hot: true,
    compress: true,
  },
});