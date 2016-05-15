const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common.js');

const DefinePlugin = require('webpack/lib/DefinePlugin');
const DedupePlugin = require('webpack/lib/optimize/DedupePlugin');
const UglifyJsPlugin = require('webpack/lib/optimize/UglifyJsPlugin');

module.exports = webpackMerge(commonConfig, {
  output: {
    filename: '[name].[chunkhash].bundle.js',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },
  plugins: [
    new DefinePlugin({
      ENV: JSON.stringify('prod')
    }),
    new DedupePlugin(),
    new UglifyJsPlugin({
      beautify: false,
      mangle: {
        screw_ie8 : true,
        keep_fnames: true
      },
      compress: {
        screw_ie8: true,
        warnings: false
      },
      comments: false
    }),
  ]
});
