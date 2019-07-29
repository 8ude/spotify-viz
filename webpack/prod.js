require('dotenv').config()

const path = require('path')
const merge = require('webpack-merge')
const common = require('./common.js')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../serve'),
    filename: 'bundle.js'
    //path: path.resolve(__dirname, '../dist'),
    //filename: 'app.min.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, '../serve'),
    port: process.env.CLIENT_PORT || 8080
  }
})