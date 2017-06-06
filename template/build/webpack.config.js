const path = require('path')
let HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        })
    ]
}