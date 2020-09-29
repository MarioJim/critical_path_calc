const path = require('path');
const common = require('./webpack.common.js');

module.exports = {
  ...common,
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    watchContentBase: true,
    compress: true,
    open: true,
    port: 8080,
  },
  stats: {
    modulesSort: 'size',
  },
};
