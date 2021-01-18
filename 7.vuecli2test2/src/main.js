import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  // render: h => h('h2',{class: 'box'},['hello world']) //1.普通用法。可以这样使用，直接创建h2.box标签
  // render: h => h('h2',
  //   { class: 'box' },
  //   ['hello world', h('button', ['按钮'])]) //还可以这样使用
  render: h => h(App) //App作为对象传入
})
