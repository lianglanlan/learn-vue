export default {
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
}