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

    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js$/,
                loader : 'babel-loader',
                options : {
                    presets: ["es2015"]
                }
            }
        ]
    }
}