var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
    
    entry:  "./app/js/app.js",

    output: { 
        path: path.join(__dirname, 'public'), 
        filename: 'js/app.bundle.js', 
        publicPath: './'
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
            loader: ExtractTextPlugin.extract('css!sass!resolve-url'),
        },
        {
            test: /\.html$/,
            loader: 'file-loader?name=[name].[ext]!extract-loader!html-loader'
        },
        { test: /\.(png|jpg|svg|gif)$/, loader: 'file?name=img/[name].[ext]' },
      ]
    },

    sassResources: "./node_modules/compass-mixins/lib",
    sassLoader: {    
        includePaths: [path.resolve(__dirname, "./node_modules/compass-mixins/lib")],
        devtool: 'source-map',
        cache: true,
        debug: true,
        'output-pathinfo': true,
    },

    plugins: [
        new ExtractTextPlugin('[name].css', {
            allChunks: true
        }),
        new BrowserSyncPlugin({
          // browse to http://localhost:3000/ during development,
          // ./public directory is being served
          host: 'localhost',
          port: 3000,
          server: { baseDir: ['public'] }
        }),
    ]
};