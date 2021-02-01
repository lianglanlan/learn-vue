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

//axios发送并发请求
axios.all([axios({
  url: 'http://123.207.32.32:8000/home/multidata'
}), axios({
  url: 'http://123.207.32.32:8000/home/data',
  params: {
    type: 'pop',
    page: 5
  }
})]).then(results => {
  console.log(results)
  //results为数组类型，results[0]为第一个请求结果，results[1]为第一个请求结果
})
