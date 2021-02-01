import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import moduleA from './modules/moduleA'

Vue.use(Vuex)

const state = {
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
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {
        a: moduleA
    }
})

export default store