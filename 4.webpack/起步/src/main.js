const { add, mul } = require('./js/mathUtils')

console.log(add(20, 30))

import { name, age, height } from './js/info'
console.log(name)

//添加这行代码后打包报错
require('./css/normal.css')