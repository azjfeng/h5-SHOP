const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path")
module.exports = merge(common, {
   devtool: 'source-map',
   plugins: [
   //   new UglifyJSPlugin(),
     new UglifyJSPlugin({
        sourceMap: true
     }),
     new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new HtmlWebpackPlugin({
         filename: '../../common/index.html',
         template: './src/template.html',
         // inject: false,
         // SERVER_OUTPUT: '<%- JSON.stringify(output) %>'
       })
   ],
   output:{
      filename:"[name].[hash].bundle.js",
      chunkFilename: '[name].[hash].bundle.js',
      path:path.resolve(__dirname,"dist")
  },


 });