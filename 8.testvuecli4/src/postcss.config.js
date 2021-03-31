module.exports = {
    plugins: {
        "postcss-px-to-viewport": {
            viewportWidth: 375, //视窗宽度，对应的是设计稿的宽度
            unitPrecision: 5,   //指定'px'转换为视窗单位值的小数位数（很多时候无法整除）
            viewportUnit: 'vw', //指定需要转换成的视窗单位，建议使用vw
            selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'],    //指定不需要转换的类
            minPixelValue: 1, //小于或等于'1px'时不转换为视窗单位
            mediaQuery: false   //允许在媒体查询中转换px
        }
    }
}