const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: "./src/client/index.js",
    output: {
    libraryTarget: 'var',
    library: 'Client',
  },
	mode: "production",
    module: {
        rules: [
            // Babel Loader that match js files as development
            {test: '/\.js$/', exclude: /node_modules/, loader: "babel-loader"},
            // loader to convert scss => css => DOM
            {test: /\.scss$/, use: [ MiniCssExtractPlugin.loader,'css-loader', 'sass-loader' ]}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({template: './src/client/views/index.html', filename: './index.html'}),
        new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' }),
        new CleanWebpackPlugin({dry: true, verbose: false, cleanStaleWebpackAssets: true, protectWebpackAssets: false}),
        //service worker plugin
        new WorkboxPlugin.GenerateSW()
    ],
    optimization:
        {// Optimization for JS and CSS
        minimizer: [new TerserPlugin({}), new OptimizeCSSAssetsPlugin({})],
        }
}
