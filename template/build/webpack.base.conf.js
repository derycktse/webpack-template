const path = require('path')
const webpack = require('webpack')
module.exports = {
    // entry: ['./src/entry.js','./build/dev-client'],
    entry: {
        app: './src/entry.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/assets/'
    },
    plugins: [
  
    ]
}