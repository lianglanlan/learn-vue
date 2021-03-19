import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                oldProduct.count += 1
            } else {
                payload.count = 1
                state.cartList.push(payload)
            }
        },
        addCounter(state, payload) {
            payload.count++
        },
        addToCart(state, payload) {
            payload.count = 1
            state.cartList.push(payload)
        }
    },
    actions: {
        addCart({ commit, state }, payload) {
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                commit('addCounter', oldProduct)
            } else {
                commit('addToCart', payload)
            }
        }
    }
})

export default store
