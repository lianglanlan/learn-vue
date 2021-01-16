const merge = require('webpack-merge')
const common = require('./base.config')

module.exports = merge(common, {
    devServer: {
        contentBase: "./dist",   //为哪一个文件夹提供本地服务
        compress: true,
        // port: 9000  //端口号
        // inline 页面实时刷新
    }
})