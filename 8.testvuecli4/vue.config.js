const CopyPlugin = require("copy-webpack-plugin");

const SpritesmithPlugin = require('webpack-spritesmith')
const path = require('path');

const sprite = require('./config/sprite')

module.exports = {
    assetsDir: 'static',
    configureWebpack: config => {
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
                new SpritesmithPlugin({
                    src: {
                        cwd: path.resolve(__dirname, './src/assets/sprite/common'), // 图标根路径
                        glob: '**/*.png' // 匹配任意 png 图标
                    },
                    target: {
                        image: path.resolve(__dirname, './src/assets/images/sprites/common.png'), // 生成雪碧图目标路径与名称
                        // 设置生成CSS背景及其定位的文件或方式
                        css: [
                            [
                                path.resolve(__dirname, './src/assets/css/sprites/sprite_common.scss'),
                                {
                                    format: 'function_based_template'
                                }
                            ]
                        ]
                    },
                    customTemplates: {
                        function_based_template: sprite.SpritesmithTemplate
                    },
                    apiOptions: {
                        cssImageRef: '../images/sprites/common.png' // css文件中引用雪碧图的相对位置路径配置
                    },
                    spritesmithOptions: {
                        padding: 2
                    }
                }),
                new SpritesmithPlugin({
                    src: {
                        cwd: path.resolve(__dirname, './src/assets/sprite/home'), // 图标根路径
                        glob: '**/*.png' // 匹配任意 png 图标
                    },
                    target: {
                        image: path.resolve(__dirname, './src/assets/images/sprites/home.png'), // 生成雪碧图目标路径与名称
                        // 设置生成CSS背景及其定位的文件或方式
                        css: [
                            [
                                path.resolve(__dirname, './src/assets/css/sprites/sprite_home.scss'),
                                {
                                    format: 'function_based_template'
                                }
                            ]
                        ]
                    },
                    customTemplates: {
                        function_based_template: sprite.SpritesmithTemplate
                    },
                    apiOptions: {
                        cssImageRef: '../images/sprites/home.png' // css文件中引用雪碧图的相对位置路径配置
                    },
                    spritesmithOptions: {
                        padding: 2
                    }
                })
            ],
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