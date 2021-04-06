const fs = require('fs')
const path = require('path')
const SpritesmithPlugin = require('webpack-spritesmith')

// 雪碧图样式处理模板
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
                            image: path.resolve(__dirname, `../src/assets/images/sprites/${dir}.[hash:5].png`), // 生成雪碧图目标路径与名称
                            // 设置生成CSS背景及其定位的文件或方式
                            css: [
                                [
                                    path.resolve(__dirname, `../src/assets/css/sprites/sprite_${dir}.scss`),
                                    {
                                        format: 'function_based_template'
                                    }
                                ]
                            ]
                        },
                        customTemplates: {
                            function_based_template: this.SpritesmithTemplate
                        },
                        apiOptions: {
                            cssImageRef: `../../images/sprites/${dir}.[hash:5].png` // css文件中引用雪碧图的相对位置路径配置
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
    SpritesmithTemplate(data) {
        // pc
        let icons = {}
        let tpl = `
.ico { 
    display: inline-block; 
    background-image: url(${data.sprites[0].image}); 
    background-size: ${data.spritesheet.width}px ${data.spritesheet.height}px; 
}
`

        data.sprites.forEach(sprite => {
            const name = '' + sprite.name.toLocaleLowerCase().replace(/_/g, '-')
            icons[`${name}.png`] = true
            tpl = `
${tpl} 
.ico-${name}{
    width: ${sprite.width}px; 
    height: ${sprite.height}px; 
    background-position: ${sprite.offset_x}px ${sprite.offset_y}px;
}
                `
        })

        return tpl
    }
}