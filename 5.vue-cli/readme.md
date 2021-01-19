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
* runtime-only      
```
new Vue({
  el: '#app',
  render: h => h(App)
})
```
render => vdom => ui
那么,.vue中的template是由谁处理了呢。是由`vue-template-compiler`处理的


1. 步骤少，性能高
2. 代码量少

Install vue-router? 暂时不需要，选n

Use ESLint to lint your code? y

Pick an ESLint preset  Standard

Set up unit tests     
单元测试  n

Setup e2e tests with Nightwatch?   
依赖Nightwatch做e2e(end to end 端到端)测试  n

## vue cli3
### vue cli3与vue cli2的区别
* cli3是基于webpack4打造的，cli2是webpack3
* cli3的设计原则是“0配置”，移除了配置文件根目录下的build和config等目录
* cli3提供了vue ui命令，提供了可视化配置，更加人性化
* 移除了static文件夹，新增public文件夹，并且index.html移动到public中

## 安装
```
vue create 项目名称
```
* Please pick a preset  选择 `Manually select features`回车，出来很多选项，想选中当前选项，按空格
* Where do you prefer placing config for Babel, ESLint, etc.?  配置文件想放在哪里？`In dedicated config files `选择单独的配置文件
* Save this as a preset for future projects?   `y`
* Save preset as:  `lanlan`
