const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'none',
  devtool: 'source-map',
  entry: {
    filename: './src/index',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'spotifyWrapper',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin({
      test: /\.js(\?.*)?$/i,
    })],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [path.resolve(__dirname, './node_modules/@babel/preset-env')],
          },
        },
      },
    ],
  },
};
