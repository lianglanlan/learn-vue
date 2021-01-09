const { add, mul } = require('./js/mathUtils')

console.log(add(20, 30))

import { name, age, height } from './js/info'
console.log(name)

//添加这行代码后打包报错,需添加css loader
require('./css/normal.css')
// 需添加less相对应loader
require('./css/special.less')
document.writeln('<h2>你好</h2>')

// //使用vue
import Vue from 'vue'
new Vue({
    el: '#app',
    //此处的template会替换掉#app
    template: `
        <div>
            <h2>{{message}}</h2>
            <button @click="btnClick">按钮</button>
            <h2>{{name}}</h2>
        </div>
    `,
    data: {
        message: 'hello webpack',
        name: '小明'
    },
    methods: {
        btnClick() {
            console.log(1)
        }
    }
})