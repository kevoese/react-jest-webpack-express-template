/* eslint-disable no-undef */
require('dotenv').config();
const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

module.exports = (env, arg) => {
  let isDevelopment = false;
  if (['staging', 'review', 'production'].includes(process.env.NODE_ENV) || (arg && arg.mode === 'production')) {
    isDevelopment = false;
  } else isDevelopment = true;

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: ['webpack-hot-middleware/client?reload=true', './client/App.js'],
    devtool: isDevelopment && 'inline-source-map',
    output: {
      path: path.join(__dirname, 'build/public'),
      filename: '[name].bundle.js',
      publicPath: '/',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              sourceMap: isDevelopment,
            },
          },
        },
        {
          test: /\.s(a|c)ss$/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            'css-loader',
            {
              loader: 'sass-loader',
              options: {
                sourceMap: isDevelopment,
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|otf|ttf|svg)$/,
          use: [
            {
              loader: 'file-loader',
              options: {},
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.scss'],
    },
    devServer: {
      contentBase: './public',
      watchContentBase: true,
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'client', 'index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: isDevelopment ? '[name].css' : '[name].[hash].css',
        chunkFilename: isDevelopment ? '[id].css' : '[id].[hash].css',
      }),
      new webpack.HotModuleReplacementPlugin(),
    ],
    optimization: {
      minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
    },
  };
};
