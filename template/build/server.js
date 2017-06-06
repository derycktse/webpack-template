const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const express = require('express')
const webpack = require('webpack')
let webpackConfig = require('./webpack.config')
let compiler = webpack(webpackConfig)

const PORT = process.env.PORT || 8081

const app = express()

// const template = fs.readFileSync(resolve('../pages/index.html'))

var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    quiet: false
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
    log: false,
    path: "/",
    heartbeat: 2000, reload: true
})
const serve = (path, cache) => express.static(resolve(path), {
    maxAge: 0
})
// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)


// app.use('*', (req, res) => {
//     res.write(template)
// })
app.use('/', serve('../', true))

app.listen(PORT, function () {
    console.log(`server is started at ${PORT}`)
})