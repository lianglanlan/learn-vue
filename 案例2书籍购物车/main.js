const app = new Vue({
    el: '#app',
    data: {
        books: [
            {
                id: 1,
                name: '《算法导论》',
                date: '2006-9',
                price: 85,
                count: 1
            }, {
                id: 2,
                name: '《代码大全》',
                date: '2006-9',
                price: 59,
                count: 1
            }, {
                id: 3,
                name: '《算法导论》',
                date: '2006-9',
                price: 39,
                count: 1
            }, {
                id: 4,
                name: '《算法导论》',
                date: '2006-9',
                price: 128,
                count: 1,
            }
        ]
    },
    filters: {
        showPrice(price) {
            return '￥' + parseInt(price).toFixed(2)
        }
    },
    methods: {
        increment(index) {
            this.books[index].count++
        },
        decrement(index) {
            this.books[index].count--
        },
        removeHandle(index) {
            this.books.splice(index, 1)
        }
    },
    computed: {
        totalPrice() {
            return this.books.reduce((pre, item) => {
                return pre + item.price * item.count
            }, 0)
        }
    }
})