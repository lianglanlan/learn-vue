const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const merge = require('webpack-merge')
const common = require('./base.config')

module.exports = merge(common, {
    plugins: [
        new UglifyJsPlugin()
    ]
})