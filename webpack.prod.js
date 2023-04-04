/** ****************************************
 * Project: react-todo-app
 * File: webpack.prod.js
 * Created: 4/4/23
 * Author: Abdullah Al Mamun <mamun1214@gmail.com>
 ****************************************** */
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
});