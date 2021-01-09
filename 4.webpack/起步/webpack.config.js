const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        // path: './dist', //这样写会报错，需要写绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                //css-loader负责将css文件进行加载
                //style-loader负责将样式添加到DOM中
                //webpack使用多个loader时是从右向左执行，所以应该把css-loader放在右边
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "less-loader"
                    }
                ]
            }
        ]
    }
}