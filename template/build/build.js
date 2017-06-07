let webpackConfig = require('./webpack.prod.conf')
let webpack = require('webpack')

console.log(webpackConfig)

webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    // console.log(stats)
    console.log('build completed')
})