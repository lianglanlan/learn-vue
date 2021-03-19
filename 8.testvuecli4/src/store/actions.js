export default {
    addCart({ commit, state }, payload) {
        let oldProduct = state.cartList.find(item => item.iid === payload.iid)
        if (oldProduct) {
            commit('addCounter', oldProduct)
        } else {
            commit('addToCart', payload)
        }
    }
}