import Vue from 'vue'
import Vuex from 'vuex'

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
        ]
    },
    mutations: {
        increment(state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        }
    },
    actions: {

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
        }
    },
    modules: {

    }
})

export default store