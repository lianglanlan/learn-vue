const CopyPlugin = require("copy-webpack-plugin");

const sprite = require('./config/sprite')

module.exports = {
    assetsDir: 'static',
    configureWebpack: config => {
        const spriteRet = sprite.generateSprites()
        return {
            resolve: {
                alias: {
                    //@符号已被配置为src
                    'assets': '@/assets',
                    'common': '@/common',
                    'network': '@/network',
                    'components': '@/components',
                }
            },
            plugins: [
                new CopyPlugin({
                    patterns: [
                        { from: "./src/static", to: "./static" },
                    ],
                }),
                ...spriteRet
            ]
        }
    },
    chainWebpack: config => {
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 1000 }))
        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                mozjpeg: { progressive: true, quality: 65 },
                optipng: { enabled: false },
                pngquant: { quality: [0.75, 0.90], speed: 4 },
                gifsicle: { interlaced: false },
                webp: { quality: 75 }
            });
        if (process.env.NODE_ENV === 'production') {
            config.plugin('webpack-bundle-analyzer')
                .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
                .end()
        }
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require("postcss-px-to-viewport")({
                        viewportWidth: 375, //视窗宽度，对应的是设计稿的宽度
                        unitPrecision: 5,   //指定'px'转换为视窗单位值的小数位数（很多时候无法整除）
                        viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw
                        selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],    //指定不需要转换的类
                        minPixelValue: 1, //小于或等于'1px'时不转换为视窗单位
                        mediaQuery: false   //允许在媒体查询中转换px
                    })
                ]
            }
        }
    }

}