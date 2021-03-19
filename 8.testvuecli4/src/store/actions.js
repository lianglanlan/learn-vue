import { ADD_COUNTER, ADD_TO_CART } from './mutation-types'

export default {
    addCart({ commit, state }, payload) {
        let oldProduct = state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct) {
            commit(ADD_COUNTER, oldProduct)
        } else {
            commit(ADD_TO_CART, payload)
        }
    }
}