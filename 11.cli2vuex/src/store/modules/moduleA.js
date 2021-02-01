export default {
    state: {
        name: 'jim'
    },
    mutations: {
        updateName(state, payload) {
            state.name = payload
        }
    },
    actions: {
        aChangeAge(context) {   //context只能调本模块内的东西
            setTimeout(() => {
                context.commit('updateName', '王五')
            }, 1000)
        }
    },
    getters: {
        fullname(state) {
            return state.name + '111'
        },
        fullname2(state, getters) {
            return getters.fullname + '222'
        },
        fullname3(state, getters, rootState) {
            return getters.fullname2 + rootState.counter
        }
    }
}