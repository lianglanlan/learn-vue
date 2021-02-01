import Vue from 'vue'
import App from './App'
import store from './store'

import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store
})

axios({
  url: 'http://123.207.32.32:8000/home/multidata',
  method: 'get', //默认为get请求
  //参数
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => console.log(res))
