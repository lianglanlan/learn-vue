const fs = require('fs')

// 雪碧图样式处理模板
module.exports = {
    SpritesmithTemplate(data) {
        // pc
        let icons = {}
        let tpl = `.ico { 
                display: inline-block; 
                background-image: url(${data.sprites[0].image}); 
                background-size: ${data.spritesheet.width}px ${data.spritesheet.height}px; 
            }`

        data.sprites.forEach(sprite => {
            const name = '' + sprite.name.toLocaleLowerCase().replace(/_/g, '-')
            icons[`${name}.png`] = true
            tpl = `${tpl} 
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