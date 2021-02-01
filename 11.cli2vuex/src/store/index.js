import Vue from 'vue'
import Vuex from 'vuex'

import { INCREMENT } from './mutations-type'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        counter: 0,
        students: [
            {
                id: 110,
                name: 'lanlan',
                age: 18
            }, {
                id: 111,
                name: 'lisi',
                age: 20
            }, {
                id: 112,
                name: 'zhangsan',
                age: 18
            }, {
                id: 113,
                name: 'james',
                age: 23
            }
        ],
        info: {
            name: 'lan',
            age: 18
        }
    },
    mutations: {
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
    },
    actions: {
        aChangeAge({ commit }, payload) {
            setTimeout(() => {
                commit('changeAge')
                console.log(payload)
            }, 100)
        }
    },
    getters: {
        powerCounter(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter((stu) => stu.age > 20);
        },
        more20stuLength(state, getters) {
            return getters.more20stu.length
        },
        moreAgeStu(state) {
            return age => state.students.filter((stu) => stu.age > age)
        },
    },
    modules: {

    }
})

export default store