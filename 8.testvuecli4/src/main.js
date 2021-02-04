import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false  //提示信息

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
