## 安装vue脚手架
`npm install -g @vue/cli`

拉取2.x模板
`npm install -g @vue/cli-init`

vue cli2初始化项目
`vue init webpack my-project`

创建vue cli2的一个项目 
```
vue init webpack 6.vuecli2test
```
命令行运行后敲回车，在选择vue build时，应该选runtime-only
### runtime-compiler和runtime-only的区别
区别在main.js
* runtime-compiler  
```
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
```
template => ast => render => vdom(虚拟Dom) => ui（ui页面）
* *runtime-only      
```
new Vue({
  el: '#app',
  render: h => h(App)
})
```
render => vdom => ui
1、步骤少，性能高
2、代码量少

Install vue-router? 暂时不需要，选n

Use ESLint to lint your code? y

Pick an ESLint preset  Standard

Set up unit tests     
单元测试  n

Setup e2e tests with Nightwatch?   
依赖Nightwatch做e2e(end to end 端到端)测试  n

