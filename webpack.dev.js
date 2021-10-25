const HtmlWebPackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: './src/client/index.js',
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
            template: './src/client/views/index.html',
            filename: './index.html'
        }),
        new CleanWebpackPlugin({
            dry: true,
            verbose: true,
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false
        })
    ]
}
