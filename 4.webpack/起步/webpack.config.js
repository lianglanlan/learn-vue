const path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        // path: './dist', //这样写会报错，需要写绝对路径
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: 'dist/' //给url加路径
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
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    //当加载的图片小于limit时，会将图片编辑成base64格式。大于时，需要使用file-loader进行加载
                            name: 'img/[name].[hash:8].[ext]'
                        }
                    }
                ],
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/, //排除
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    }
}