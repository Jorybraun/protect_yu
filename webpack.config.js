var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry:  "./app/js/app.js",

    output: {
        path: './public',
        filename: 'app.bundle.js',
    },

    module: {
        loaders: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.scss$/,
            loaders: ['style', 'css', 'sass'],
        }
      ]
    },

    plugins: [
        new ExtractTextPlugin("style.css", {
            allChunks: true
        }),
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['public'] }
        }),
        new HtmlWebpackPlugin({
            template: './app/index.html',
            inject: 'body',
        })
    ]
};