var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

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
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.scss$/,
            loader: ["style", "css", "sass"]
        }
      ]
    },

    sassResources: "./node_modules/compass-mixins/lib",
    sassLoader: {    
        includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib"), path.resolve(__dirname, "./node_modules/owl.carousel/dist/assets")],
        devtool: 'source-map',
        cache: true,
        debug: true,
        'output-pathinfo': true,
    },

    plugins: [
        new ExtractTextPlugin('style.css', {
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