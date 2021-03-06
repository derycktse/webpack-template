const webpack = require('webpack')
let webpackConfig = require('./webpack.dev.conf')
let compiler = webpack(webpackConfig)


var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

module.exports = (app) => {
    // serve webpack bundle output
    app.use(devMiddleware)

    // enable hot-reload and state-preserving
    // compilation error display
    app.use(hotMiddleware)

}