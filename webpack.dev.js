const path = require('path')
const webpack = require('webpack')
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    stats: 'verbose',
    entry: './src/client/index.js',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/client/views/index.html',
            filename: './index.html'
        })
    ]
}