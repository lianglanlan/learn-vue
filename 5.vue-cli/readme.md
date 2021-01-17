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
命令行运行后敲回车，在选择vue build时，应该选runtime-only。此处选runtime+compiler看看不同

Install vue-router? 暂时不需要，选n

Use ESLint to lint your code? y

Pick an ESLint preset  Standard

Set up unit tests     
单元测试  n

Setup e2e tests with Nightwatch?   
依赖Nightwatch做e2e(end to end 端到端)测试  n

