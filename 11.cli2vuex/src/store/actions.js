export default {
    aChangeAge({ commit }, payload) {
        /*
        setTimeout(() => {
            commit('changeAge')
            console.log(payload)
        }, 100)
        */
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                commit('changeAge')
                console.log(payload)
                resolve('里面执行完了')
            }, 100)
        })
    }
}