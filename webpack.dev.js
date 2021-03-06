const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin')
module.exports = {
    // entry: './src/client/index.js',
    entry: ['@babel/polyfill', './src/client/index.js'],
    output: {
        libraryTarget: 'var',
        library: 'Client'
    },
    mode: 'development',
    devtool: 'source-map',
    stats: 'minimal',
    module: {
        rules: [
            // handling js
            {test: '/\.js$/', exclude: /node_modules/, loader: "babel-loader"},
            // from scss=>css=>inject into the DOM
            {test: /\.scss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]}
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/client/views/index.html', filename: './index.html'
        }),
        //service worker plugin
        new WorkboxPlugin.GenerateSW(),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ],
}
