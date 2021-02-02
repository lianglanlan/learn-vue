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

axios.defaults.baseURL = 'http://123.207.32.32:8000'
axios.defaults.timeout = 5000

axios({
  url: '/home/multidata',
  method: 'get', //默认为get请求
  //参数
  params: {
    type: 'pop',
    page: 1
  }
}).then(res => console.log(res))

//axios发送并发请求
axios.all([axios({
  url: '/home/multidata'
}), axios({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 5
  }
})])
  /*
    .then(results => {
      console.log(results)
      //results为数组类型，results[0]为第一个请求结果，results[1]为第一个请求结果
    })
  */
  //可以直接使用spread展开两个请求结果
  .then(axios.spread((res1, res2) => {
    console.log(res1)
    console.log(res2)
  }))

//创建axios实例
const instance1 = axios.create({
  baseURL: 'http://123.207.32.32:8000',
  timeout: 1000,
})

instance1({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
})

instance1({
  url: '/home/data',
  params: {
    type: 'pop',
    page: 5
  }
}).then(res => {
  console.log(res)
})
//可以创建不同的实例
const instance2 = axios.create({
  baseURL: 'http://123.207.35.32:8888',
  timeout: 5000,
})

import { request } from './network/request'

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res)
})