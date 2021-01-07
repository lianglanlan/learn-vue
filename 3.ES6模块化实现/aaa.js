var name = '小明'
var age = 18
var flag = true

function sum(num1, num2) {
    return num1 + num2
}

//导出方式1
export {
    flag, sum
}

//导出方式2
export var num1 = 1000

//test.js
export var title = "小星星"
export var content = '哈哈哈'
//导出函数
export function fun1(num1, num2) {
    return num1 + num2
}
//导出类
export class Person {
    run() {
        console.log('在奔跑')
    }
}

// 可参看博客 https://www.cnblogs.com/lianglanlan/p/10597700.html