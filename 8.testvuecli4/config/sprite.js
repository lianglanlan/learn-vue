const fs = require('fs')
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
    generateSprites() {
        const spritesDir = fs.readdirSync(path.resolve(__dirname, '../src/assets/sprite'))
        const result = []
        if (spritesDir.length) {
            spritesDir.forEach(dir => {
                result.push(
                    new SpritesmithPlugin({
                        src: {
                            cwd: path.resolve(__dirname, `../src/assets/sprite/${dir}`), // 图标根路径
                            glob: '**/*.png' // 匹配任意 png 图标
                        },
                        target: {
                            image: path.resolve(__dirname, `../src/assets/img/sprites/${dir}@1x.png`), // 生成雪碧图目标路径与名称
                            // 设置生成CSS背景及其定位的文件或方式
                            css: [
                                [
                                    path.resolve(__dirname, `../src/assets/css/sprites/_sprite_${dir}.scss`),
                                    {
                                        format: 'function_based_template'
                                    }
                                ]
                            ]
                        },
                        customTemplates: {
                            function_based_template: this.SpritesmithTemplate,
                            function_based_template_retina: this.SpritesmithTemplate
                        },
                        apiOptions: {
                            cssImageRef: `~@/assets/img/sprites/${dir}@1x.png?v=[hash:5]` // css文件中引用雪碧图的相对位置路径配置
                        },
                        retina: {
                            classifier: (data) => {
                                return {
                                    normalName: data.replace(/@2x/, '@1x'),
                                    retinaName: data.replace(/@1x/, '@2x')
                                }
                            },
                            cssImageRef: `~@/assets/img/sprites/${dir}@2x.png?v=[hash:5]`, // css文件中引用雪碧图的相对位置路径配置,
                            targetImage: path.resolve(__dirname, `../src/assets/img/sprites/${dir}@2x.png`),
                        },
                        spritesmithOptions: {
                            padding: 2
                        }
                    }),
                )
            })
        }
        return result
    },
    // 雪碧图样式处理模板
    SpritesmithTemplate(data) {
        // pc
        let tpl = `
%icon { 
    background-image: -webkit-image-set(url(${data.spritesheet.image}) 1x,url(${data.retina_spritesheet.image}) 2x);
    background-size: ${data.spritesheet.width}px ${data.spritesheet.height}px; 
}
`

        data.sprites.forEach(sprite => {
            const name = '' + sprite.name.toLocaleLowerCase().replace(/_/g, '-').replace(/@1x/, '')
            tpl = `
${tpl}
%icon-${name}{
    width: ${sprite.width}px; 
    height: ${sprite.height}px; 
    background-position: ${sprite.offset_x}px ${sprite.offset_y}px;
}
                `
        })

        return tpl
    }
}