const { merge } = require('webpack-merge');

const common = require('./webpack.config.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    port: 3030,
    historyApiFallback: true,
  },
});
