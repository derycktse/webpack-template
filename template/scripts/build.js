let pug = require('pug')
let path = require('path')
const fs = require('fs')

let html = pug.renderFile(path.resolve(__dirname, '../templates/temp.pug'))

// console.log(html)

fs.writeFile(path.resolve(__dirname, '../pages/index.html'), html,
    'utf-8', (err) => {
        if (err)
            throw err
        console.log('success!')
    })