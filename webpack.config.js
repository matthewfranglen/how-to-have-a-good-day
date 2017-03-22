const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    app: [
      path.resolve(__dirname, 'src/index.js'),
      path.resolve(__dirname, 'css/style.css'),
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Be Great - Feel Great',
      template: 'templates/index.html',
    }),
    new CopyWebpackPlugin([
      { from: 'static', to: 'static' },
    ]),
  ],
  module: {
    loaders: [
      {
        exclude: /(node_modules)/,
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        include: [path.resolve(__dirname, 'src')],
      },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] },
    ],
  },
};

