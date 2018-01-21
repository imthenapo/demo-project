const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootDir = path.resolve(__dirname, '../');

module.exports = {
  entry: ['react-hot-loader/patch', path.resolve(rootDir, 'src/js/index.js')],
  output: {
    path: path.resolve(rootDir, 'build'),
    filename: 'demo.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.json'],
    modules: [path.resolve('./src/js'), 'node_modules'],
    alias: {
      public: path.resolve('./dist'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
        exclude: [/node_modules/],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url-loader',
      },
    ],
  },
  devServer: {
    contentBase: path.resolve(rootDir, 'build'),
    hot: true,
    // inline: true,
    // https: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    port: '3000',
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'demo',
      template: path.resolve(rootDir, 'src/ejs/index.ejs'),
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
      __DEV__: true,
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'source-map',
};
