const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        // path: './dist', //这样写会报错，需要写绝对路径
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    }
}