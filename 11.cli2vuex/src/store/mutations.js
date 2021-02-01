import { INCREMENT } from './mutations-type'

export default {
    [INCREMENT](state) {
        state.counter++
    },
    decrement(state) {
        state.counter--
    },
    // incrementCount(state, count) {
    //     console.log(count)
    //     //使用普通提交方式，这里count是数字。使用对象风格的提交方式，这里的count是个对象。
    //     // state.counter += count
    // },
    incrementCount(state, payload) {
        state.counter += payload.count
    },
    addStu(state, stu) {
        state.students.push(stu)
    },
    changeAge(state) {
        state.info.age = 16
        //使用异步修改
        //错误代码
        // setTimeout(() => {
        //     state.info.age = 16     //执行后，页面中变化了，devtool调试工具并没有发生变化，所以，mutation必须是同步函数
        // }, 100)
    },
    addAddress(state) {
        // state.info.address = '中国' //界面不会发生改变
        Vue.set(state.info, 'address', '中国')
    },
    deletePro(state) {
        Vue.delete(state.info, 'age')
    }
}