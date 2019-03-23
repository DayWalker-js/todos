const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['whatwg-fetch', './index.jsx'],
  output: {
    filename: '[name].bundle.[hash].js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-hot-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: [path.join(process.cwd(), "source/assets/styles/vars.scss"), path.join(process.cwd(), "source/assets/styles/responsive.scss"), path.resolve(__dirname, 'source/assets/styles/variables/**/*.scss')]
            },
          },
        ],
      },
      {
        test: /\.(js|jsx|mjs)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              name: '[hash].[ext]',
              outputPath: 'fonts',
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              outputPath: 'images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss'],
    alias: {
      components: path.resolve(__dirname, 'source/components'),
      controllers: path.resolve(__dirname, 'source/controllers'),
      common: path.resolve(__dirname, 'source/common'),
      pages: path.resolve(__dirname, 'source/pages'),
      layouts: path.resolve(__dirname, 'source/layouts'),
      assets: path.resolve(__dirname, 'source/assets'),
      router: path.resolve(__dirname, 'source/router'),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Test',
      template: path.join(process.cwd(), 'source/index.html'),
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  optimization: {},
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    compress: false,
    port: 9000,
    hot: true,
    historyApiFallback: true,
  },
};
