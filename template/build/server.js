const fs = require('fs')
const path = require('path')
const resolve = file => path.resolve(__dirname, file)
const express = require('express')

const PORT = process.env.PORT || 8081

console.log(`environment:${process.env.NODE_ENV}`)
const app = express()

if (process.env.NODE_ENV === 'dev') {
    require('./dev-server')(app)
}

// const template = fs.readFileSync(resolve('../pages/index.html'))

const serve = (path, cache) => express.static(resolve(path), {
    maxAge: 0
})



app.use('/', serve('../', true))

app.listen(PORT, function () {
    console.log(`server is started at ${PORT}`)
})