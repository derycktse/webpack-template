const connectSSI = require('connect-ssi')
const path = require('path')
console.log('ssi setup!')
module.exports = (app) => {
    app.use(connectSSI({
         baseDir: path.resolve(__dirname, '../')  
         
    }))
}