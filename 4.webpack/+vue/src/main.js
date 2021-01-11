const { add, mul } = require('./js/mathUtils')

console.log(add(20, 30))

import { name, age, height } from './js/info'
console.log(name)

//添加这行代码后打包报错,需添加css loader
require('./css/normal.css')
// 需添加less相对应loader
require('./css/special.less')
document.writeln('<h2>你好</h2>')

import App from './vue/app'

// //使用vue
import Vue from 'vue'
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})