module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                //@符号已被配置为src
                'assets': '@/assets',
                'common': '@/common',
                'network': '@/network',
                'components': '@/components',
            }
        }
    }
}