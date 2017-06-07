const merge = require('webpack-merge')

let baseWebpackConfig = require('./webpack.base.conf')

let webpackConfig = merge(baseWebpackConfig, {
    output: {
        filename: 'js/[name].[chunkhash].js',
        chunkFilename: 'js/[id].[chunkhash].js'
    }
})

module.exports = webpackConfig

